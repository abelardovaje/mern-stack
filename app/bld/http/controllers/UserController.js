"use strict";
exports.__esModule = true;
var Model = require("../models");
var path = require("path");
var UserController = (function () {
    function UserController() {
        this.model = new Model.UserModel();
    }
    UserController.prototype.index = function (req, res) {
        this.model.getUser().then(function (user) {
            console.log(user);
            res.sendFile(path.join(__dirname, '../../resources/views', 'login.html'));
        });
    };
    UserController.prototype.login = function (req, res) {
        console.log(req.body);
        res.json(req.body);
    };
    return UserController;
}());
exports.UserController = UserController;
//# sourceMappingURL=UserController.js.map