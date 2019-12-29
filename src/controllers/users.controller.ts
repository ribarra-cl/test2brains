/*
  Author: Richard Ibarra <richard.ibarra@gmail.com>
  Project: 2brains
  Date: 29 Dec 2019
 */

import * as express from "express";
import * as admin from 'firebase-admin';
import {fetchUsers} from "../utils/users";

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

  index = (req: express.Request, res: express.Response) => {
    fetchUsers((users: any[]) => {
      res.send(users);
    })
  }

  login = async (req: express.Request, res: express.Response) => {
    fetchUsers((users: any[]) => {

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
