"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
const routes = (app) => {
    app.route('/').get((req, res) => {
        res.send('Hello world');
    });
    app.use(express.static(path.join(__dirname, '../public')));
    app.route('/*')
        .get((req, res) => {
        res.sendStatus(404);
    });
};
exports.default = routes;
//# sourceMappingURL=routes.js.map