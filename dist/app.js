"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const routes_1 = require("./routes");
const app = express();
routes_1.default(app);
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const PORT = process.env.PORT || 3000;
var server = app.listen(PORT, function () {
    console.log('Server listening at http:/localhost:%s', PORT);
});
//# sourceMappingURL=app.js.map