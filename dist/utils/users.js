"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("request");
exports.fetchUsers = (callback) => {
    const url = `https://randomuser.me/api/?results=100&seed=2brains`;
    request(url, (error, response, body) => {
        const json = JSON.parse(body);
        callback(json.results);
    });
};
exports.findUser = (uuid, callback) => {
    exports.fetchUsers((users) => {
        const user = users.find((user) => user.login.uuid = uuid);
        callback(user);
    });
};
//# sourceMappingURL=users.js.map