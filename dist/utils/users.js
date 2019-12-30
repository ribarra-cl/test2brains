"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("request");
const redis_client_1 = require("../redis-client");
const CACHE_KEY = 'users';
const CACHE_TIMEOUT = 60;
exports.fetchUsers = (callback) => {
    const url = `https://randomuser.me/api/?results=100&seed=2brains`;
    redis_client_1.redisClient.get(CACHE_KEY, (error, users) => {
        if (users) {
            callback(JSON.parse(users));
        }
        else {
            request.get(url, (error, response, body) => {
                const json = JSON.parse(body);
                const users = json.results;
                redis_client_1.redisClient.setex(CACHE_KEY, CACHE_TIMEOUT, JSON.stringify(users), (error, result) => {
                });
                callback(users);
            });
        }
    });
};
exports.findUser = (uuid, callback) => {
    exports.fetchUsers((users) => {
        const user = users.find((user) => user.login.uuid = uuid);
        callback(user);
    });
};
//# sourceMappingURL=users.js.map