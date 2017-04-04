"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true,
        select: false
    }
});
exports.UserSchema = mongoose.model('User', userSchema);
//# sourceMappingURL=UserSchema.js.map