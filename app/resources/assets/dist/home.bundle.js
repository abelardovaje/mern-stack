webpackJsonp([1],{

/***/ 0:
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var React = __webpack_require__(0);
var header_1 = __webpack_require__(3);
var form_1 = __webpack_require__(15);
var chat_1 = __webpack_require__(39);
var Home = (function (_super) {
    __extends(Home, _super);
    function Home() {
        var _this = _super.call(this) || this;
        _this.state = {
            name: "",
            age: 0,
            contacts: [{
                    name: 'abel',
                    age: 29,
                    id: 1
                }]
        };
        _this.handleChange = _this.handleChange.bind(_this);
        _this.addContact = _this.addContact.bind(_this);
        return _this;
    }
    Home.prototype.loadContacts = function () {
        var lists = this.state.contacts.map(function (list, key) {
            return React.createElement("tr", { key: key },
                React.createElement("td", null, list.id),
                React.createElement("td", null, list.name),
                React.createElement("td", null, list.age),
                React.createElement("td", null,
                    React.createElement("button", { className: "btn btn-primary" }, "Edit")));
        });
        return lists;
    };
    Home.prototype.homeService = function () {
        return {};
    };
    Home.prototype.handleChange = function (e) {
        this.setState((_a = {},
            _a[e.target.name] = e.target.value,
            _a));
        var _a;
    };
    Home.prototype.addContact = function () {
        var contacts = this.state.contacts;
        contacts.push({
            name: this.state.name,
            age: this.state.age
        });
        this.setState({
            contacts: contacts
        });
    };
    Home.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(header_1.Header, null),
            React.createElement("div", { className: "container home-container" },
                React.createElement(form_1.Form, null),
                React.createElement(chat_1.Chat, null))));
    };
    return Home;
}(React.Component));
exports.Home = Home;


/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var React = __webpack_require__(0);
var Form = (function (_super) {
    __extends(Form, _super);
    function Form() {
        var _this = _super.call(this) || this;
        _this.login = _this.login.bind(_this);
        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }
    Form.prototype.componentDidMount = function () {
        console.log(this.props.contacts);
    };
    Form.prototype.handleChange = function (e) {
        this.props.formHandleChange(e);
    };
    Form.prototype.login = function (e) {
    };
    Form.prototype.render = function () {
        return (React.createElement("div", { className: "form-container" },
            React.createElement("form", { onSubmit: this.login, method: "post" },
                React.createElement("input", { type: "text", name: "username", placeholder: "username", onChange: this.handleChange }),
                React.createElement("button", null, "Login"))));
    };
    return Form;
}(React.Component));
exports.Form = Form;


/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var React = __webpack_require__(0);
var ReactDom = __webpack_require__(2);
var home_1 = __webpack_require__(12);
ReactDom.render(React.createElement(home_1.Home, null), document.getElementById('app'));


/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var React = __webpack_require__(0);
var Header = (function (_super) {
    __extends(Header, _super);
    function Header() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Header.prototype.menus = function () {
        var lists = ['Home', 'About'];
        var links = lists.map(function (link, index) {
            return React.createElement("li", { key: index },
                React.createElement("a", { href: link.toLowerCase() }, link));
        });
        return links;
    };
    Header.prototype.render = function () {
        return (React.createElement("div", { className: "header" },
            React.createElement("ul", null, this.menus())));
    };
    return Header;
}(React.Component));
exports.Header = Header;


/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var React = __webpack_require__(0);
var Chat = (function (_super) {
    __extends(Chat, _super);
    function Chat() {
        return _super.call(this) || this;
    }
    Chat.prototype.render = function () {
        return (React.createElement("div", { className: "chat-container" },
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col-lg-2" },
                    React.createElement("div", { className: "title" }, "Online"),
                    React.createElement("div", { className: "user-list" },
                        React.createElement("ul", null,
                            React.createElement("li", null, "User")))),
                React.createElement("div", { className: "col-lg-10" },
                    React.createElement("div", { className: "chat-timeline" }),
                    React.createElement("div", { className: "chat-message-box" },
                        React.createElement("div", { className: "col-lg-10 input-message" },
                            React.createElement("input", { type: "text", placeholder: "Write here..." })),
                        React.createElement("div", { className: "col-lg-2 send-message" }))))));
    };
    return Chat;
}(React.Component));
exports.Chat = Chat;


/***/ })

},[16]);
//# sourceMappingURL=home.bundle.js.map