/*
  Author: Richard Ibarra <richard.ibarra@gmail.com>
  Project: 2brains
  Date: 28 Dec 2019
 */

import * as express from 'express';
import routes from "./routes";

const app: express.Application = express();

routes(app);

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const PORT = process.env.PORT || 3000;

var server = app.listen(PORT, function () {
  console.log('Server listening at http:/localhost:%s', PORT);
});