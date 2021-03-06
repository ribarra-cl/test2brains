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
const admin = require("firebase-admin");
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
            this.fetchUsers((users) => {
                const { username, password } = req.body;
                const found = users.find((user) => {
                    if (user.login.username == username && user.login.password == password)
                        return true;
                });
                if (found) {
                    const user = { uuid: found.login.uuid, username: found.login.username };
                    this.app.auth().createCustomToken(user.uuid, {
                        username: user.username
                    }).then((token) => {
                        res.send({ token });
                    });
                }
                else {
                    res.status(404).send();
                }
            });
        });
        const serviceAccount = require("../../brains-78452-3aa52b2692ad.json");
        this.app = admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
            databaseURL: "https://brains-78452.firebaseio.com"
        });
    }
}
exports.default = UsersController;
//# sourceMappingURL=users.js.map