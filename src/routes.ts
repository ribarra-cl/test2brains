/*
  Author: Richard Ibarra <richard.ibarra@gmail.com>
  Project: 2brains
  Date: 28 Dec 2019
 */

import * as express from 'express';
import * as path from "path";

const routes = (app: express.Application): void => {

  app.route('/').get((req: express.Request, res: express.Response) => {
    res.send('Hello world');
  });

  // static files: html, css, js, etc
  app.use(express.static(path.join(__dirname, '../public')));

  // All other routes should 404
  app.route('/*')
    .get((req: express.Request, res: express.Response) => {
      res.sendStatus(404)
    });
};

export default routes;