"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.closeNotification = exports.setNotification = void 0;

var setNotification = function setNotification(notification) {
  return function (dispatch) {
    dispatch({
      type: "RECEIVE_NOTIFICATION",
      payload: notification
    });
  };
};

exports.setNotification = setNotification;

var closeNotification = function closeNotification() {
  return function (dispatch) {
    dispatch({
      type: "CLOSE_NOTIFICATION",
      payload: true
    });
  };
};

exports.closeNotification = closeNotification;