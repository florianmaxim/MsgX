"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setMessage = exports.getDate = exports.getAuthor = exports.getStep = exports.getPrice = exports.getCount = exports.getMessage = exports.getConnectionType = void 0;

var _controllerBlockchain = _interopRequireDefault(require("../controllers/controller-blockchain"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Blockchain = new _controllerBlockchain.default();
var connected = false;

var getMessage = function getMessage() {
  return function (dispatch) {
    if (!connected) {
      Blockchain.connect();
      connected = true;
    }

    Blockchain.getMessage(function (msg) {
      //console.log(msg)
      dispatch({
        type: "RECEIVE_MESSAGE",
        payload: msg
      });
    });
  };
};

exports.getMessage = getMessage;

var getConnectionType = function getConnectionType() {
  return function (dispatch) {
    if (!connected) {
      Blockchain.connect();
      connected = true;
    }

    Blockchain.getConnectionType(function (type) {
      dispatch({
        type: "RECEIVE_CONENCTION_TYPE",
        payload: type
      });
    });
  };
};

exports.getConnectionType = getConnectionType;

var getPrice = function getPrice() {
  return function (dispatch) {
    if (!connected) {
      Blockchain.connect();
      connected = true;
    }

    Blockchain.getPrice(function (price) {
      dispatch({
        type: "RECEIVE_PRICE",
        payload: price
      });
    });
  };
};

exports.getPrice = getPrice;

var getStep = function getStep() {
  return function (dispatch) {
    if (!connected) {
      Blockchain.connect();
      connected = true;
    }

    Blockchain.getStep(function (step) {
      dispatch({
        type: "RECEIVE_STEP",
        payload: step
      });
    });
  };
};

exports.getStep = getStep;

var getCount = function getCount() {
  return function (dispatch) {
    if (!connected) {
      Blockchain.connect();
      connected = true;
    }

    Blockchain.getCount(function (count) {
      dispatch({
        type: "RECEIVE_COUNT",
        payload: count
      });
    });
  };
};

exports.getCount = getCount;

var getAuthor = function getAuthor() {
  return function (dispatch) {
    if (!connected) {
      Blockchain.connect();
      connected = true;
    }

    Blockchain.getAuthor(function (author) {
      dispatch({
        type: "RECEIVE_AUTHOR",
        payload: author
      });
    });
  };
};

exports.getAuthor = getAuthor;

var getDate = function getDate() {
  return function (dispatch) {
    if (!connected) {
      Blockchain.connect();
      connected = true;
    }

    Blockchain.getDate(function (date) {
      dispatch({
        type: "RECEIVE_DATE",
        payload: date
      });
    });
  };
};

exports.getDate = getDate;

var setMessage = function setMessage(message, price) {
  console.log('setMessage');
  return function (dispatch) {
    if (!connected) {
      Blockchain.connect();
      connected = true;
    }

    Blockchain.setMessage(message, price, function (msg) {
      getPrice();
      dispatch({
        type: "RECEIVE_MESSAGE",
        payload: msg
      });
    });
  };
};

exports.setMessage = setMessage;