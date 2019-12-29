/*
  Author: Richard Ibarra <richard.ibarra@gmail.com>
  Project: 2brains
  Date: 28 Dec 2019
 */

import * as express from 'express';
import * as path from "path";
import MainController from "./controllers/main.controller";

const routes = (app: express.Application): void => {

  app.route('/').get(MainController.index);
  app.route('/users').get(MainController.index);

  // static files: html, css, js, etc
  const staticPath = path.join(__dirname + '/../public');
  app.use('/static', express.static(staticPath));

  // All other routes should 404
  app.route('/*')
    .get((req: express.Request, res: express.Response) => {
      res.sendStatus(404)
    });
};

export default routes;