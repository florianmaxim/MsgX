"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _containerMessage = _interopRequireDefault(require("./containers/container-message"));

var _reactRouter = require("react-router");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default() {
  return _react.default.createElement(_reactRouter.Switch, null, _react.default.createElement(_reactRouter.Route, {
    path: "/set/:message",
    component: _containerMessage.default
  }), _react.default.createElement(_reactRouter.Route, {
    exactPath: "/",
    component: _containerMessage.default
  }));
};

exports.default = _default;