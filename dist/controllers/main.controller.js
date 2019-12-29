"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
class MainController {
}
exports.default = MainController;
MainController.index = (req, res) => {
    res.sendFile(path.join(__dirname + '/../../public/views/index.html'));
};
//# sourceMappingURL=main.controller.js.map