"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setMessage = exports.getAuthor = exports.getPrice = exports.getMessage = void 0;

var _controllerBlockchain = _interopRequireDefault(require("../controllers/controller-blockchain"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Blockchain = new _controllerBlockchain.default();

var getMessage = function getMessage() {
  return function (dispatch) {
    Blockchain.connect();
    Blockchain.getMessage(function (msg) {
      console.log(msg);
      dispatch({
        type: "RECEIVE_MESSAGE",
        payload: msg
      });
    });
  };
};

exports.getMessage = getMessage;

var getPrice = function getPrice() {
  return function (dispatch) {
    Blockchain.connect();
    Blockchain.getPrice(function (msg) {
      console.log(msg);
      dispatch({
        type: "RECEIVE_PRICE",
        payload: msg.toNumber()
      });
    });
  };
};

exports.getPrice = getPrice;

var getAuthor = function getAuthor() {
  return function (dispatch) {
    Blockchain.connect();
    Blockchain.getAuthor(function (msg) {
      console.log(msg);
      dispatch({
        type: "RECEIVE_AUTHOR",
        payload: msg
      });
    });
  };
};

exports.getAuthor = getAuthor;

var setMessage = function setMessage(message, price) {
  console.log('setMessage');
  return function (dispatch) {
    Blockchain.connect();
    Blockchain.setMessage(message, price, function (msg) {
      console.log(msg);
      dispatch({
        type: "RECEIVE_MESSAGE",
        payload: msg
      });
    });
  };
};

exports.setMessage = setMessage;