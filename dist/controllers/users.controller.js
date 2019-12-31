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
const admin = require("firebase-admin");
const users_1 = require("../utils/users");
class UsersController {
    constructor() {
        this.index = (req, res) => {
            console.log("GET /api/users");
            users_1.fetchUsers((users) => {
                res.send(users);
            });
        };
        this.detail = (req, res) => {
            const { uuid } = req.params;
            console.log(`GET /api/users/${uuid}`);
            users_1.findUser(uuid, (user) => {
                res.send(user);
            });
        };
        this.login = (req, res) => __awaiter(this, void 0, void 0, function* () {
            console.log("POST /api/users/login");
            users_1.fetchUsers((users) => {
                const { username, password } = req.body;
                const found = users.find((user) => {
                    if (user.login.username == username && user.login.password == password)
                        return true;
                });
                if (found) {
                    const user = found;
                    this.app.auth().createCustomToken(user.login.uuid)
                        .then((token) => {
                        res.send({ user, token });
                    });
                }
                else {
                    res.send({ error: 'Usuario no encontrado.' });
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
//# sourceMappingURL=users.controller.js.map