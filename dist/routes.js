"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const routes = (app) => {
    app.route('/').get((req, res) => {
        res.send('Hello world');
    });
    app.route('/*')
        .get((req, res) => {
        res.sendStatus(404);
    });
};
exports.default = routes;
//# sourceMappingURL=routes.js.map