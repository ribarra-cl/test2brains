/*
  Author: Richard Ibarra <richard.ibarra@gmail.com>
  Project: 2brains
  Date: 28 Dec 2019
 */

import * as express from 'express';
const bodyParser = require('body-parser');
import routes from "./routes";
import UsersController from "./controllers/users";

const app: express.Application = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const users = new UsersController();
app.post('/api/users/login', users.login);

routes(app);

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const PORT = process.env.PORT || 3000;

var server = app.listen(PORT, function () {
  console.log('Server listening at http:/localhost:%s', PORT);
});