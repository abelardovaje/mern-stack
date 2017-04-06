"use strict";
exports.__esModule = true;
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var expressSession = require("express-session");
var methodOverride = require("method-override");
var cookieParser = require("cookie-parser");
var helmet = require("helmet");
var csurf = require("csurf");
var Config = (function () {
    function Config(app) {
        this.app = app;
        this.staticPaths();
        this.middlewares();
    }
    Config.prototype.staticPaths = function () {
        console.log(path.join(__dirname, '../public'));
        this.app.use("/node_modules", express.static(path.join(__dirname, '../../../node_modules')));
        this.app.use("/assets", express.static(path.join(__dirname, '../resources/assets')));
        this.app.use("/dist", express.static(path.join(__dirname, '../resources/assets/dist')));
        this.app.use("/public", express.static(path.join(__dirname, '../public')));
    };
    Config.prototype.middlewares = function () {
        this.app.use(cookieParser());
        this.app.use(csurf({ cookie: true }));
        this.app.use(helmet());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(methodOverride('X-HTTP-Method-Override'));
        this.app.use(expressSession({
            secret: 'secret',
            resave: false,
            saveUninitialized: true
        }));
        this.app.use(function (req, res, next) {
            res.cookie('XSRF-TOKEN', req.csrfToken());
            next();
        });
    };
    return Config;
}());
exports.Config = Config;
//# sourceMappingURL=config.js.map