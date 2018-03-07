"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var config = _interopRequireWildcard(require("../../../config.json"));

var _react = _interopRequireDefault(require("react"));

var _redux = require("redux");

var _reactRedux = require("react-redux");

var actionsMessage = _interopRequireWildcard(require("../actions/actions-message"));

var actionsNotifications = _interopRequireWildcard(require("../actions/actions-notifications"));

var _componentButton = _interopRequireDefault(require("../components/component-button"));

var _componentLogo = _interopRequireDefault(require("../components/component-logo"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _timers = require("timers");

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  width: 100vw;\n  min-height: 100vh;\n\n  box-sizing: border-box;\n  border: 0px solid gold;\n\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  flex-direction: column;\n\n  box-shadow: 0px 0px 50px rgba(255, 255, 255, 1);  \n"], ["\n  width: 100vw;\n  min-height: 100vh;\n\n  box-sizing: border-box;\n  border: 0px solid gold;\n\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  flex-direction: column;\n\n  box-shadow: 0px 0px 50px rgba(255, 255, 255, 1);  \n"]),
    _templateObject2 = /*#__PURE__*/ _taggedTemplateLiteral(["\n\n  transition: 0.5s all;\n  //transition-delay: 0.5s;\n\n  margin:0;\n  padding:0;\n\n  width: 100%;\n\n  background: red;\n  \n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n\n  @media(orientation: portrait){\n\n  }\n\n  box-sizing: border-box;\n  //border: 5px solid green;\n\n"], ["\n\n  transition: 0.5s all;\n  //transition-delay: 0.5s;\n\n  margin:0;\n  padding:0;\n\n  width: 100%;\n\n  background: red;\n  \n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n\n  @media(orientation: portrait){\n\n  }\n\n  box-sizing: border-box;\n  //border: 5px solid green;\n\n"]),
    _templateObject3 = /*#__PURE__*/ _taggedTemplateLiteral(["\n\n  transition: 0.125s all;\n  transition-delay: 0s; \n\n  margin: 2.5vw;\n  padding:0;\n\n  width: 85vw;\n  \n  font-family: Roboto;\n  font-size: 2.5vh;\n  font-weight: 600;\n  letter-spacing: .125vh;\n  \n  color: white;\n  text-shadow: 0px -0px 5px rgba(255, 255, 255, .5);\n  text-transform: uppercase;\n\n  text-align: left;\n\n  box-sizing: border-box;\n  //border: 5px solid green;\n\n  @media(orientation: portrait){\n\n    margin: 2.5vh;\n    margin-left:4vh;\n\n  }\n\n"], ["\n\n  transition: 0.125s all;\n  transition-delay: 0s; \n\n  margin: 2.5vw;\n  padding:0;\n\n  width: 85vw;\n  \n  font-family: Roboto;\n  font-size: 2.5vh;\n  font-weight: 600;\n  letter-spacing: .125vh;\n  \n  color: white;\n  text-shadow: 0px -0px 5px rgba(255, 255, 255, .5);\n  text-transform: uppercase;\n\n  text-align: left;\n\n  box-sizing: border-box;\n  //border: 5px solid green;\n\n  @media(orientation: portrait){\n\n    margin: 2.5vh;\n    margin-left:4vh;\n\n  }\n\n"]),
    _templateObject4 = /*#__PURE__*/ _taggedTemplateLiteral(["\n\n  transition: 0.125s all;\n  transition-delay: 0s; \n\n  font-family: Roboto;\n  font-size: 2.5vh;\n  letter-spacing: .125vh;\n\n  font-weight: 600;\n  \n  color: white;\n\n  cursor: pointer;\n  user-select: none;\n\n  box-sizing: border-box;\n  //border: 5px solid blue;\n\n  @media(orientation: portrait){\n\n    margin-right: 2.5vh;\n\n  }\n"], ["\n\n  transition: 0.125s all;\n  transition-delay: 0s; \n\n  font-family: Roboto;\n  font-size: 2.5vh;\n  letter-spacing: .125vh;\n\n  font-weight: 600;\n  \n  color: white;\n\n  cursor: pointer;\n  user-select: none;\n\n  box-sizing: border-box;\n  //border: 5px solid blue;\n\n  @media(orientation: portrait){\n\n    margin-right: 2.5vh;\n\n  }\n"]),
    _templateObject5 = /*#__PURE__*/ _taggedTemplateLiteral(["\n\n  margin: 0;\n  padding: 0;\n\n  padding-top: 1.5vh;\n\n  width: 100%;\n  min-height: 50vh;\n\n  background: transparent;\n\n  font-family: Roboto;\n  font-size: 10vh;\n  color: white;\n  text-shadow: 0px -0px 50px rgba(255, 215, 0, .75);\n\n  text-align: center;\n  resize: both;\n\n  overflow: hidden;\n  overflow-y: scroll;\n\n  outline: 0;\n\n  text-shadow: 0 1px 0 hsl(174,5%,80%),\n  1px 2px 0 hsl(174,5%,75%),\n  2px 3px 0 hsl(174,5%,70%),\n  3px 4px 0 hsl(174,5%,66%),\n  4px 5px 0 hsl(174,5%,64%),\n\n  0 0 5px rgba(0,0,0,.05),\n  0 1px 3px rgba(0,0,0,.2),\n  0 3px 5px rgba(0,0,0,.2),\n  0 5px 10px rgba(0,0,0,.2);\n\n  box-sizing: border-box;\n  border: 5px solid blue;\n  border:0;\n"], ["\n\n  margin: 0;\n  padding: 0;\n\n  padding-top: 1.5vh;\n\n  width: 100%;\n  min-height: 50vh;\n\n  background: transparent;\n\n  font-family: Roboto;\n  font-size: 10vh;\n  color: white;\n  text-shadow: 0px -0px 50px rgba(255, 215, 0, .75);\n\n  text-align: center;\n  resize: both;\n\n  overflow: hidden;\n  overflow-y: scroll;\n\n  outline: 0;\n\n  text-shadow: 0 1px 0 hsl(174,5%,80%),\n  1px 2px 0 hsl(174,5%,75%),\n  2px 3px 0 hsl(174,5%,70%),\n  3px 4px 0 hsl(174,5%,66%),\n  4px 5px 0 hsl(174,5%,64%),\n\n  0 0 5px rgba(0,0,0,.05),\n  0 1px 3px rgba(0,0,0,.2),\n  0 3px 5px rgba(0,0,0,.2),\n  0 5px 10px rgba(0,0,0,.2);\n\n  box-sizing: border-box;\n  border: 5px solid blue;\n  border:0;\n"]),
    _templateObject6 = /*#__PURE__*/ _taggedTemplateLiteral(["\n\n  margin-top: 2.5vh;\n  \n  font-family: Roboto;\n  font-size: 10vh;\n  color: white;\n  text-shadow: 0px -0px 50px rgba(255, 215, 0, .75);\n\n  text-align: center;\n  resize: both;\n\n  overflow: hidden;\n  overflow-y: scroll;\n\n  outline: 0;\n\n  text-shadow: 0 1px 0 hsl(174,5%,80%),\n  1px 2px 0 hsl(174,5%,75%),\n  2px 3px 0 hsl(174,5%,70%),\n  3px 4px 0 hsl(174,5%,66%),\n  4px 5px 0 hsl(174,5%,64%),\n\n  0 0 5px rgba(0,0,0,.05),\n  0 1px 3px rgba(0,0,0,.2),\n  0 3px 5px rgba(0,0,0,.2),\n  0 5px 10px rgba(0,0,0,.2);\n\n  box-sizing: border-box;\n  //border: 5px solid blue;\n  border:0;\n"], ["\n\n  margin-top: 2.5vh;\n  \n  font-family: Roboto;\n  font-size: 10vh;\n  color: white;\n  text-shadow: 0px -0px 50px rgba(255, 215, 0, .75);\n\n  text-align: center;\n  resize: both;\n\n  overflow: hidden;\n  overflow-y: scroll;\n\n  outline: 0;\n\n  text-shadow: 0 1px 0 hsl(174,5%,80%),\n  1px 2px 0 hsl(174,5%,75%),\n  2px 3px 0 hsl(174,5%,70%),\n  3px 4px 0 hsl(174,5%,66%),\n  4px 5px 0 hsl(174,5%,64%),\n\n  0 0 5px rgba(0,0,0,.05),\n  0 1px 3px rgba(0,0,0,.2),\n  0 3px 5px rgba(0,0,0,.2),\n  0 5px 10px rgba(0,0,0,.2);\n\n  box-sizing: border-box;\n  //border: 5px solid blue;\n  border:0;\n"]),
    _templateObject7 = /*#__PURE__*/ _taggedTemplateLiteral(["\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  a{\n    margin: 8px;\n    margin-right: 12px;\n    \n    padding:0;\n\n    width: 100%;\n    \n    font-family: Lato;\n    font-size: 12px;\n    font-weight: 600;\n    \n    color: red;\n    text-shadow: 0px -0px 4px rgba(255, 255, 255, .25);\n\n    //text-decoration: underline;\n    text-transform: uppercase;\n\n    text-align: right;\n  }\n\n  box-sizing: border-box;\n  //border: 5px solid green;\n\n"], ["\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  a{\n    margin: 8px;\n    margin-right: 12px;\n    \n    padding:0;\n\n    width: 100%;\n    \n    font-family: Lato;\n    font-size: 12px;\n    font-weight: 600;\n    \n    color: red;\n    text-shadow: 0px -0px 4px rgba(255, 255, 255, .25);\n\n    //text-decoration: underline;\n    text-transform: uppercase;\n\n    text-align: right;\n  }\n\n  box-sizing: border-box;\n  //border: 5px solid green;\n\n"]),
    _templateObject8 = /*#__PURE__*/ _taggedTemplateLiteral(["\n\n  width: 100%;\n\n  cursor: pointer;\n  user-select: none;\n\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n"], ["\n\n  width: 100%;\n\n  cursor: pointer;\n  user-select: none;\n\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n"]),
    _templateObject9 = /*#__PURE__*/ _taggedTemplateLiteral(["\n\n    width: 100%;\n    margin:12px;\n    padding:0;\n    \n    font-family: Lato;\n    font-size: 18px;\n    font-weight: 600;\n    \n    color: black;\n\n    text-align: left;\n"], ["\n\n    width: 100%;\n    margin:12px;\n    padding:0;\n    \n    font-family: Lato;\n    font-size: 18px;\n    font-weight: 600;\n    \n    color: black;\n\n    text-align: left;\n"]),
    _templateObject10 = /*#__PURE__*/ _taggedTemplateLiteral(["\n\n    width: 100%;\n    margin:12px;\n    padding:0;\n    \n    font-family: Lato;\n    font-size: 18px;\n    font-weight: 600;\n    \n    color: black;\n\n    text-align: right;\n"], ["\n\n    width: 100%;\n    margin:12px;\n    padding:0;\n    \n    font-family: Lato;\n    font-size: 18px;\n    font-weight: 600;\n    \n    color: black;\n\n    text-align: right;\n"]),
    _templateObject11 = /*#__PURE__*/ _taggedTemplateLiteral(["\n\n    width: 100%;\n    margin:12px;\n\n    margin-left:0;\n    margin-right:0;\n    \n    padding:0;\n    \n    font-family: Lato;\n    font-size: 18px;\n    font-weight: 600;\n    \n    color: black;\n\n    text-align: center;\n"], ["\n\n    width: 100%;\n    margin:12px;\n\n    margin-left:0;\n    margin-right:0;\n    \n    padding:0;\n    \n    font-family: Lato;\n    font-size: 18px;\n    font-weight: 600;\n    \n    color: black;\n\n    text-align: center;\n"]);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function getStringFromTimestamp(UNIX_timestamp) {
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var year = a.getYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
  return time;
}

var Outer = _styledComponents.default.div(_templateObject);

var Notifications = _styledComponents.default.div(_templateObject2);

var NotificationsText = _styledComponents.default.div(_templateObject3);

var NotificationsClose = _styledComponents.default.div(_templateObject4);

var Textarea = _styledComponents.default.textarea(_templateObject5);

var ComponentCounter = _styledComponents.default.div(_templateObject6);

var ComponentPriceWrapper = _styledComponents.default.div(_templateObject7);

var ComponentPriceLine = _styledComponents.default.div(_templateObject8);

var ComponentPriceValue = _styledComponents.default.div(_templateObject9);

var ComponentPriceCurrency = _styledComponents.default.div(_templateObject10);

var ComponentDate = _styledComponents.default.div(_templateObject11);

var currencies = [["EUR", 700], ["ETH", 1], ["USD", 850]];

var ContainerMessage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ContainerMessage, _React$Component);

  function ContainerMessage(props) {
    var _this;

    _classCallCheck(this, ContainerMessage);

    _this = _possibleConstructorReturn(this, (ContainerMessage.__proto__ || Object.getPrototypeOf(ContainerMessage)).call(this, props));
    _this.state = {
      count: 0,
      message: '',
      author: '',
      date: 0,
      price: 0,
      caption: "".concat(config.buttonCaption),
      currency: 0,
      startedTyping: false
    };
    return _this;
  }

  _createClass(ContainerMessage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.props.getConnectionType();
      this.props.getCount();
      this.props.getMessage();
      this.props.getAuthor();
      this.props.getPrice();
      this.props.getStep();
      this.props.getDate();
      setInterval(function () {
        if (!_this2.state.startedTyping) _this2.props.setNotification({
          message: config.notifications.dontHesitate[Math.floor(Math.random() * config.notifications.dontHesitate.length)],
          url: null
        });
      }, 30000);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(props) {
      if (!this.props.message.connectionType) {
        var notification = config.notifications.dontHesitate[Math.floor(Math.random() * config.notifications.dontHesitate.length)];
        var url = 'https://github.com/florianmaxim/msgx';

        if (props.message.connectionType === 'websocket') {
          notification = config.notifications.notConnected;
        }

        this.props.setNotification({
          message: notification,
          url: url
        });
      }

      this.setState({
        count: props.message.count,
        message: "".concat(String(props.message.message)),
        author: String(props.message.author),
        date: Date(props.message.date),
        price: Number(props.message.price),
        caption: "".concat(String(this.state.count), ". (").concat(String(props.message.author).substr(0, 12), "...)")
      });
    }
  }, {
    key: "handleOnClickButton",
    value: function handleOnClickButton() {
      if (this.props.message.connectionType === 'blockchain') {
        var message = {
          count: this.state.count,
          message: this.state.message,
          price: this.state.price,
          author: this.state.author,
          date: this.state.date,
          step: this.state.step
        };
        this.props.setMessage(message);
      } else {
        window.open("https://ropsten.etherscan.io/address/".concat(this.props.message.author), "_blank");
      }
    }
  }, {
    key: "handleChange",
    value: function handleChange(event) {
      this.setState({
        startedTyping: true,
        message: event.target.value,
        count: Number(this.props.message.count) + 1
      }); //If we are on the blockchain we are able to set the next msg...

      if (this.props.message.connectionType === 'blockchain') {
        //console.log(this.props.message.price+'+'+this.props.message.step+'='+(Number(this.props.message.price)+Number(this.props.message.step)));
        this.setState({
          //caption: `${String(this.state.count)}. (${web3.eth.coinbase.toString().substr(0,8)}...`
          caption: "send (".concat(web3.eth.coinbase.toString().substr(0, 8), "...)"),
          date: new Date(),
          author: String(web3.eth.coinbase),
          price: Number(this.props.message.price) + Number(this.props.message.step)
        });
      }
    }
  }, {
    key: "toggleCurrency",
    value: function toggleCurrency() {
      this.setState({
        currency: this.state.currency < currencies.length - 1 ? this.state.currency + 1 : 0
      });
    }
  }, {
    key: "renderPrice",
    value: function renderPrice() {
      return "".concat((this.state.price / 1000000000000000000 * currencies[this.state.currency][1]).toFixed(5));
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return _react.default.createElement(Outer, null, _react.default.createElement(Notifications, {
        style: {
          height: this.props.notifications.closed ? '0' : '20vh'
        }
      }, _react.default.createElement("a", {
        href: "".concat(this.props.notifications.url),
        target: "blank"
      }, _react.default.createElement(NotificationsText, {
        style: {
          opacity: this.props.notifications.closed ? '0' : '1'
        }
      }, this.props.notifications.message)), _react.default.createElement(NotificationsClose, {
        style: {
          opacity: this.props.notifications.closed ? '0' : '1'
        },
        onClick: function onClick() {
          return _this3.props.closeNotification();
        }
      }, "\u2716")), _react.default.createElement(Textarea, {
        value: "".concat(this.state.message),
        onChange: function onChange(event) {
          _this3.handleChange(event);
        }
      }), _react.default.createElement(ComponentPriceWrapper, null, _react.default.createElement(ComponentPriceLine, {
        onClick: function onClick() {
          return _this3.toggleCurrency();
        }
      }, _react.default.createElement(ComponentPriceValue, null, this.renderPrice()), _react.default.createElement(ComponentPriceCurrency, null, "".concat(currencies[this.state.currency][0], " \u25BC"))), _react.default.createElement(_componentButton.default, {
        caption: this.state.caption,
        onClick: function onClick() {
          return _this3.handleOnClickButton();
        }
      }), _react.default.createElement(ComponentDate, null, this.state.date.toString().substr(0, 24))), _react.default.createElement(_componentLogo.default, null));
    }
  }]);

  return ContainerMessage;
}(_react.default.Component);

function props(state) {
  return {
    message: state.message,
    notifications: state.notifications
  };
}

function actions(dispatch) {
  return (0, _redux.bindActionCreators)({
    getConnectionType: actionsMessage.getConnectionType,
    getCount: actionsMessage.getCount,
    getMessage: actionsMessage.getMessage,
    getAuthor: actionsMessage.getAuthor,
    getPrice: actionsMessage.getPrice,
    getStep: actionsMessage.getStep,
    getDate: actionsMessage.getDate,
    setMessage: actionsMessage.setMessage,
    setNotification: actionsNotifications.setNotification,
    closeNotification: actionsNotifications.closeNotification
  }, dispatch);
}

var _default = (0, _reactRedux.connect)(props, actions)(ContainerMessage);
/*
 <textarea
          value={`${this.state.message}`}
          onChange={(event) => this.handleChange(event)} 
          />
*/


exports.default = _default;