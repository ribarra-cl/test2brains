"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("request");
const redis_client_1 = require("../redis-client");
const config_1 = require("../config");
const CACHE_KEY = 'users-6';
const CACHE_TIMEOUT = 60;
exports.requestUsers = (callback) => {
    const url = `https://randomuser.me/api/?results=100&seed=2brains`;
    const fallibleRequest = () => {
        const rnd = Math.random();
        request.get(url, (error, response, body) => {
            if (rnd < config_1.REQUEST_FAILURE) {
                console.log("--did fail", rnd);
                setTimeout(() => {
                    fallibleRequest();
                }, 500);
            }
            else {
                console.log("--did not fail", rnd);
                const json = JSON.parse(body);
                const users = json.results;
                callback(users);
            }
        });
    };
    fallibleRequest();
};
exports.fetchUsers = (callback) => {
    redis_client_1.redisClient.get(CACHE_KEY, (error, users) => {
        if (users) {
            console.log("--got from cache");
            callback(JSON.parse(users));
        }
        else {
            exports.requestUsers((users) => {
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