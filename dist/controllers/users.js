"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("request");
class UsersController {
    constructor() {
        this.fetchUsers = (callback) => {
            const url = `https://randomuser.me/api/?results=100&seed=2brains`;
            request(url, (error, response, body) => {
                const json = JSON.parse(body);
                callback(json.results);
            });
        };
        this.login = (req, res) => __awaiter(this, void 0, void 0, function* () {
            console.log("params", req);
            this.fetchUsers((users) => {
                const { username, password } = req.body;
                const user = users.find((user) => {
                    if (user.login.username == username && user.login.password == password) {
                        return true;
                    }
                });
                res.send(user);
            });
        });
    }
}
exports.default = UsersController;
//# sourceMappingURL=users.js.map