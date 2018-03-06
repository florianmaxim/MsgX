"use strict";

var config = _interopRequireWildcard(require("../config.json"));

var _chalk = _interopRequireDefault(require("chalk"));

var _http = require("http");

var _react = _interopRequireDefault(require("react"));

var _server = _interopRequireDefault(require("react-dom/server"));

var _reactRouter = require("react-router");

var _path = _interopRequireDefault(require("path"));

var _express = _interopRequireDefault(require("express"));

var _styledComponents = require("styled-components");

var _redux = require("redux");

var _reactRedux = require("react-redux");

var _reducers = _interopRequireDefault(require("./public/reducers"));

var _App = _interopRequireDefault(require("./public/App"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var message = {
  message: "I loved the internet.",
  price: 29000000000000000,
  //In Wei
  author: "0x4518fc23a24c01fc55d94e8742c7e8ea54822a41"
};
var store = (0, _redux.createStore)(_reducers.default);

var http = require("http");

var socketio = require("socket.io");

var app = (0, _express.default)(); // make an Express app

var server = http.createServer(app); // HTTP server based on Express app

var io = socketio.listen(server); // Socket now listening to HTTP server

app.use('/', _express.default.static(_path.default.resolve(__dirname, 'public')));
app.get('*', function (req, res) {
  io.on('connection', function (socket) {
    io.sockets.emit('message', message.message);
    io.sockets.emit('price', message.price);
    io.sockets.emit('author', message.author);
    console.log('Websocket: connected.');
    socket.on('setMessage', function (newMessage) {
      console.log('Websocket: Received new message: ' + JSON.stringify(newMessage));
      message = newMessage;
      socket.broadcast.emit('message', message.message);
      socket.broadcast.emit('price', message.price);
      socket.broadcast.emit('author', message.author);
    });
  });
  var context = {};
  var sheet = new _styledComponents.ServerStyleSheet();

  var html = _server.default.renderToString(sheet.collectStyles(_react.default.createElement(_reactRedux.Provider, {
    store: store
  }, _react.default.createElement(_reactRouter.StaticRouter, {
    location: req.url,
    context: context
  }, _react.default.createElement(_App.default, null)))));

  var styles = sheet.getStyleTags();

  if (context.url) {
    res.writeHead(301, {
      Location: context.url
    });
    res.end();
  } else {
    res.header('Content-Type', 'text/html');
    res.write("<!doctype html><html><head><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, user-scalable=no\"><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><link rel=\"shortcut icon\" type=\"image/x-icon\" href=\"/static/favicon.png\"><title>Buy A Golden Message To The Internet</title>".concat(styles, "</head><body><div id=\"root\">").concat(html, "</div><script src=\"/bundle.js\"></script></body></html>"));
    res.end();
  }
});
server.listen(config.port, function () {
  console.log("\n    [".concat(_chalk.default.hex('#FFD700').bold(config.info.name), " ").concat(_chalk.default.red("(".concat(config.version.number, ")")), " \"").concat(_chalk.default.blue(config.version.name), "\"]\n    - Listening on port ").concat(_chalk.default.yellow(config.port), "\n  "));
});