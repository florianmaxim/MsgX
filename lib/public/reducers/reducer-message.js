"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
var init = {
  message: 'lala',
  price: 0,
  author: 0
};

function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : init;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "RECEIVE_MESSAGE":
      return {
        message: action.payload,
        price: state.price,
        author: state.author
      };
      break;

    case "RECEIVE_PRICE":
      return {
        message: state.message,
        price: action.payload,
        author: state.author
      };
      break;

    case "RECEIVE_AUTHOR":
      return {
        message: state.message,
        price: state.price,
        author: action.payload
      };
      break;
  }

  return state;
}