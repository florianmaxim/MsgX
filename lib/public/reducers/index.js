"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _reducerMessage = _interopRequireDefault(require("./reducer-message"));

var _reducerNotifications = _interopRequireDefault(require("./reducer-notifications"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _redux.combineReducers)({
  message: _reducerMessage.default,
  notifications: _reducerNotifications.default
});

exports.default = _default;