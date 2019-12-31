/*
  Author: Richard Ibarra <richard.ibarra@gmail.com>
  Project: 2brains
  Date: 29 Dec 2019
 */

import * as express from "express";
import * as admin from 'firebase-admin';
import {fetchUsers, findUser} from "../utils/users";
import IUser from "../models/user.model";

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
    console.log("GET /api/users");
    fetchUsers((users: any[]) => {
      res.send(users);
    })
  }

  detail = (req: express.Request, res: express.Response) => {
    const { uuid } = req.params;
    console.log(`GET /api/users/${uuid}`);
    findUser(uuid, (user) => {
      res.send(user);
    });
  }

  login = async (req: express.Request, res: express.Response) => {
    console.log("POST /api/users/login");
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
        const user = found as IUser;
        this.app.auth().createCustomToken(user.login.uuid)
          .then((token) => {
            res.send({user, token});
        });
      }
      else
      {
        res.send({error: 'Usuario no encontrado.'});
      }
    });

  }
}
