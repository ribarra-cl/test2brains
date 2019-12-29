/*
  Author: Richard Ibarra <richard.ibarra@gmail.com>
  Project: 2brains
  Date: 29 Dec 2019
 */

import * as express from "express";
import * as path from "path";

export default class MainController
{

  static index = (req: express.Request, res: express.Response) => {
    res.sendFile(path.join(__dirname + '/../../public/views/index.html'));
  }

}
