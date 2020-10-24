"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Home = _interopRequireDefault(require("../pages/Home"));

var _Login = _interopRequireDefault(require("../pages/Login/Login"));

var _Register = _interopRequireDefault(require("../pages/Login/Register"));

var _Seller = _interopRequireDefault(require("../pages/Login/Seller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var routes = [// public Routes
// { path: '/sign-up', component: SellerSignUp },
// { path: '/login', component: Pageslogin },
// { path: '/forget-password', component: ForgetPassword },
// { path: '/logout', component: Logout },
{
  path: '/',
  component: _Home["default"]
}, {
  path: '/login',
  component: _Login["default"]
}, {
  path: '/register',
  component: _Register["default"]
}, {
  path: '/seller',
  component: _Seller["default"]
} // Authenticated Routes
// { path: '/dashboard', component: Dashboard},
// { path: '/unauthorized', component: Unauthorized},
];
var _default = routes;
exports["default"] = _default;