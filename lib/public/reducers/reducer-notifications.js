"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
var init = {
  message: '',
  url: 'https://github.com/florianmaxim/msgx',
  closed: true
};

function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : init;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "RECEIVE_NOTIFICATION":
      return {
        message: action.payload.message,
        url: action.payload.url,
        closed: false
      };
      break;

    case "CLOSE_NOTIFICATION":
      return {
        message: state.message,
        url: state.url,
        closed: action.payload
      };
      break;
  }

  return state;
}