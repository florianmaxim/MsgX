"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
var init = {
  message: '',
  price: 0,
  author: 0,
  connectionType: null
};

function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : init;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "RECEIVE_CONENCTION_TYPE":
      return {
        message: state.message,
        price: state.price,
        author: state.author,
        connectionType: action.payload
      };
      break;

    case "RECEIVE_MESSAGE":
      return {
        message: action.payload,
        price: state.price,
        author: state.author,
        connectionType: state.connectionType
      };
      break;

    case "RECEIVE_PRICE":
      return {
        message: state.message,
        price: action.payload,
        author: state.author,
        connectionType: state.connectionType
      };
      break;

    case "RECEIVE_AUTHOR":
      return {
        message: state.message,
        price: state.price,
        author: action.payload,
        connectionType: state.connectionType
      };
      break;
  }

  return state;
}