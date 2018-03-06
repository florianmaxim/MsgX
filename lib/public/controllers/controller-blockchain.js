"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var config = _interopRequireWildcard(require("../../../config.json"));

var _socket = _interopRequireDefault(require("socket.io-client"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CONTRACT_ADDRESS = config.contractAddress;
var CONTRACT_ABI = config.contractABI;
var CONTRACT;

var BlockchainController =
/*#__PURE__*/
function () {
  function BlockchainController() {
    _classCallCheck(this, BlockchainController);
  }

  _createClass(BlockchainController, [{
    key: "connect",
    value: function connect() {
      this.connectionType = '';
      this.socket = _socket.default.connect();
      this.socket.on('connect', function () {
        console.log('Websocket: connected');
      });

      if (typeof web3 !== 'undefined') {
        this.connectionType = 'blockchain';
        web3 = new Web3(web3.currentProvider);
        CONTRACT = web3.eth.contract(CONTRACT_ABI).at(CONTRACT_ADDRESS);
      } else {
        this.connectionType = 'websocket';
      }
    }
    /*
        Get connection type
    */

  }, {
    key: "getConnectionType",
    value: function getConnectionType(cb) {
      cb(this.connectionType);
    }
    /*
     Message
    */

  }, {
    key: "getMessage",
    value: function getMessage(cb) {
      if (this.connectionType === 'websocket') {
        this.socket.on('message', function (message) {
          return cb(message);
        });
      } else {
        CONTRACT.message.call(function (err, res) {
          cb(res);
        });
      }
    }
  }, {
    key: "getPrice",
    value: function getPrice(cb) {
      if (this.connectionType === 'websocket') {
        this.socket.on('price', function (price) {
          return cb(price);
        });
      } else {
        CONTRACT.price.call(function (err, res) {
          cb(res);
        });
      }
    }
  }, {
    key: "getStep",
    value: function getStep(cb) {
      if (this.connectionType === 'websocket') {
        this.socket.on('step', function (step) {
          return cb(step);
        });
      } else {
        CONTRACT.step.call(function (err, res) {
          cb(res);
        });
      }
    }
  }, {
    key: "getCount",
    value: function getCount(cb) {
      if (this.connectionType === 'websocket') {
        this.socket.on('count', function (count) {
          return cb(count);
        });
      } else {
        CONTRACT.count.call(function (err, res) {
          cb(res);
        });
      }
    }
  }, {
    key: "getAuthor",
    value: function getAuthor(cb) {
      if (this.connectionType === 'websocket') {
        this.socket.on('author', function (author) {
          return cb(author);
        });
      } else {
        CONTRACT.author.call(function (err, res) {
          cb(res);
        });
      }
    }
  }, {
    key: "getDate",
    value: function getDate(cb) {
      if (this.connectionType === 'websocket') {
        this.socket.on('date', function (author) {
          return cb(author);
        });
      } else {
        CONTRACT.date.call(function (err, res) {
          cb(res);
        });
      }
    }
  }, {
    key: "setMessage",
    value: function setMessage(message, price, cb) {
      var _this = this;

      if (this.connectionType === 'websocket') {
        /* this.socket.on('message', (message) => {
            return cb(message);
        }); */
      } else {
        var data = {
          from: web3.eth.coinbase,
          to: CONTRACT_ADDRESS,
          value: price,
          gasPrice: web3.toWei(0.00000001, 'ether')
        };
        CONTRACT.setMessage.sendTransaction(message, data, function (err, res) {
          //console.log('data')
          //console.log('transactionHash:'+res)
          var transactionHash = res;
          var filter = web3.eth.filter("latest");
          filter.watch(function (error, result) {
            //console.log('filter watching:'+result)
            web3.eth.getTransactionReceipt(transactionHash, function (err, res) {
              if (err) return cb(err); //console.log('getTransactionReceipt:'+res)

              if (res) {
                //Also write msg server for non blockchain connections
                _this.socket.emit('setMessage', {
                  message: message,
                  price: price.toNumber(),
                  author: web3.eth.coinbase.toString()
                }); //console.log('transcation mined')


                filter.stopWatching();
                cb(message);
              } else {//console.log('transcation pending')
              }
            });
          });
        });
      }
    }
  }]);

  return BlockchainController;
}();

exports.default = BlockchainController;