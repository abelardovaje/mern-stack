"use strict";
exports.__esModule = true;
var UserSchema_1 = require("./UserSchema");
var UserModel = (function () {
    function UserModel() {
    }
    UserModel.prototype.getUser = function () {
        return UserSchema_1.UserSchema.find({}, function (err, user) {
            return user;
        });
    };
    UserModel.prototype.register = function () {
        // let user = new UserSchema;
    };
    return UserModel;
}());
exports.UserModel = UserModel;
//# sourceMappingURL=UserModel.js.map