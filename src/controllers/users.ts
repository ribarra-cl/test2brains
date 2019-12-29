/*
  Author: Richard Ibarra <richard.ibarra@gmail.com>
  Project: 2brains
  Date: 29 Dec 2019
 */

import * as express from "express";
import * as request from "request";

export default class UsersController
{

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
    console.log("params", req);
    this.fetchUsers((users: any[]) => {

      const { username, password } = req.body;

      // TODO: create models for this
      const user = users.find((user) => {
        if(user.login.username == username && user.login.password == password)
        {
          return true;
        }
      });
      res.send(user);
    });

  }
}
