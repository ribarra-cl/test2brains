/*
  Author: Richard Ibarra <richard.ibarra@gmail.com>
  Project: 2brains
  Date: 29 Dec 2019
 */

import * as express from "express";
import * as request from "request";
import * as jwt from 'jsonwebtoken';
import * as admin from 'firebase-admin';

export default class UsersController
{

  app: admin.app.App;

  constructor() {

    const serviceAccount = require("../../brains-78452-3aa52b2692ad.json");

    this.app = admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: "https://brains-78452.firebaseio.com"
    });


  }

  // fetch users from https://randomuser.me/documentation#howto
  fetchUsers = (callback: (users: any) => any) => {
    const url = `https://randomuser.me/api/?results=100&seed=2brains`;
    request(url, (error, response, body) => {

      // TODO: move to logic to specific files
      // TODO: error handling
      const json : any = JSON.parse(body);
      callback(json.results);
    });
  }

  login = async (req: express.Request, res: express.Response) => {
    this.fetchUsers((users: any[]) => {

      const { username, password } = req.body;

      // TODO: create models for this
      const found = users.find((user) => {
        // TODO: send sha or md5 instead of password
        if(user.login.username == username && user.login.password == password)
          return true;
      });

      // user was found
      if(found)
      {
        const user = { uuid: found.login.uuid, username: found.login.username };
        this.app.auth().createCustomToken(user.uuid, {
          username: user.username
        }).then((token) => {
          res.send({token});
        });
      }
      else
      {
        res.status(404).send();
      }
    });

  }
}
