"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require('body-parser');
const routes_1 = require("./routes");
const users_1 = require("./controllers/users");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const users = new users_1.default();
app.post('/api/users/login', users.login);
routes_1.default(app);
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const PORT = process.env.PORT || 3000;
var server = app.listen(PORT, function () {
    console.log('Server listening at http:/localhost:%s', PORT);
});
//# sourceMappingURL=app.js.map