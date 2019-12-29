"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
const main_controller_1 = require("./controllers/main.controller");
const routes = (app) => {
    app.route('/').get(main_controller_1.default.index);
    app.route('/users').get(main_controller_1.default.index);
    const staticPath = path.join(__dirname + '/../public');
    app.use('/static', express.static(staticPath));
    app.route('/*')
        .get((req, res) => {
        res.sendStatus(404);
    });
};
exports.default = routes;
//# sourceMappingURL=routes.js.map