"use strict";
exports.__esModule = true;
var path = require("path");
var AboutController = (function () {
    function AboutController() {
    }
    AboutController.prototype.index = function (req, res) {
        res.sendFile(path.join(__dirname, '../../resources/views', 'about.html'));
    };
    return AboutController;
}());
exports.AboutController = AboutController;
//# sourceMappingURL=AboutController.js.map