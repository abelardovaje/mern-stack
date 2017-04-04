"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var Database = (function () {
    function Database() {
        var db = mongoose.connection;
        db.on('error', console.error);
        db.once('open', function () {
            console.log('connected to db');
        });
        mongoose.Promise = global.Promise;
        mongoose.connect('mongodb://localhost/test');
    }
    return Database;
}());
exports.Database = Database;
//# sourceMappingURL=database.js.map