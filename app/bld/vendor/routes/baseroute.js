"use strict";
exports.__esModule = true;
var BaseRoute = (function () {
    function BaseRoute(app) {
        this.app = app;
        console.log('route constructor');
    }
    ;
    BaseRoute.prototype.router = function () {
        return this;
    };
    BaseRoute.prototype.get = function (url, controller, method) {
        var CRTL = new controller();
        this.app.get(url, CRTL[method].bind(CRTL));
    };
    BaseRoute.prototype.post = function (url, controller, method) {
        var CRTL = new controller();
        this.app.post(url, CRTL[method].bind(CRTL));
    };
    return BaseRoute;
}());
exports.BaseRoute = BaseRoute;
//# sourceMappingURL=baseroute.js.map