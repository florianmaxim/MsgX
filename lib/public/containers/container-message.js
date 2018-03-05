"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _redux = require("redux");

var _reactRedux = require("react-redux");

var actionsMessage = _interopRequireWildcard(require("../actions/actions-message"));

var _componentButton = _interopRequireDefault(require("../components/component-button"));

var _componentLogo = _interopRequireDefault(require("../components/component-logo"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  width: 100vw;\n  height: 100vh;\n  box-sizing: border-box;\n  border: 0px solid gold;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n\n  box-shadow: 0px 0px 50px rgba(255, 255, 255, 1);  \n"], ["\n  width: 100vw;\n  height: 100vh;\n  box-sizing: border-box;\n  border: 0px solid gold;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n\n  box-shadow: 0px 0px 50px rgba(255, 255, 255, 1);  \n"]),
    _templateObject2 = /*#__PURE__*/ _taggedTemplateLiteral(["\n\n  position: absolute;\n\n  left: 0;\n  top: 0;\n\n"], ["\n\n  position: absolute;\n\n  left: 0;\n  top: 0;\n\n"]),
    _templateObject3 = /*#__PURE__*/ _taggedTemplateLiteral(["\n\n  position: relative;\n  \n  margin-left: 5vw;\n  width: 90vw;\n  \n  margin-top: 5vh;\n  height: 90vh;\n\n  background: transparent;\n\n  font-family: Roboto;\n  font-size: 10vh;\n  color: white;\n  text-shadow: 0px -0px 50px rgba(255, 215, 0, .75);\n\n  text-align: center;\n  resize: both;\n\n  overflow: hidden;\n  overflow-y: scroll;\n\n  border: 0;\n  outline: 0;\n\n  text-shadow: 0 1px 0 hsl(174,5%,80%),\n  1px 2px 0 hsl(174,5%,75%),\n  2px 3px 0 hsl(174,5%,70%),\n  3px 4px 0 hsl(174,5%,66%),\n  4px 5px 0 hsl(174,5%,64%),\n\n  0 0 5px rgba(0,0,0,.05),\n  0 1px 3px rgba(0,0,0,.2),\n  0 3px 5px rgba(0,0,0,.2),\n  0 5px 10px rgba(0,0,0,.2);\n\n"], ["\n\n  position: relative;\n  \n  margin-left: 5vw;\n  width: 90vw;\n  \n  margin-top: 5vh;\n  height: 90vh;\n\n  background: transparent;\n\n  font-family: Roboto;\n  font-size: 10vh;\n  color: white;\n  text-shadow: 0px -0px 50px rgba(255, 215, 0, .75);\n\n  text-align: center;\n  resize: both;\n\n  overflow: hidden;\n  overflow-y: scroll;\n\n  border: 0;\n  outline: 0;\n\n  text-shadow: 0 1px 0 hsl(174,5%,80%),\n  1px 2px 0 hsl(174,5%,75%),\n  2px 3px 0 hsl(174,5%,70%),\n  3px 4px 0 hsl(174,5%,66%),\n  4px 5px 0 hsl(174,5%,64%),\n\n  0 0 5px rgba(0,0,0,.05),\n  0 1px 3px rgba(0,0,0,.2),\n  0 3px 5px rgba(0,0,0,.2),\n  0 5px 10px rgba(0,0,0,.2);\n\n"]),
    _templateObject4 = /*#__PURE__*/ _taggedTemplateLiteral(["\n\n  position: absolute;\n\n  bottom: 15vh;\n  left: 50vw;\n  transform: translate3d(-50%,0,0);\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n"], ["\n\n  position: absolute;\n\n  bottom: 15vh;\n  left: 50vw;\n  transform: translate3d(-50%,0,0);\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n"]),
    _templateObject5 = /*#__PURE__*/ _taggedTemplateLiteral(["\n\n  width: 95%;\n  height: 35px; \n\n  cursor: pointer;\n  user-select: none;\n\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n\n  h1{\n    margin:0;\n    padding:0;\n    \n    font-family: Lato;\n    font-size: 18px;\n    font-weight: 600;\n    \n    color: black;\n  }\n"], ["\n\n  width: 95%;\n  height: 35px; \n\n  cursor: pointer;\n  user-select: none;\n\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n\n  h1{\n    margin:0;\n    padding:0;\n    \n    font-family: Lato;\n    font-size: 18px;\n    font-weight: 600;\n    \n    color: black;\n  }\n"]),
    _templateObject6 = /*#__PURE__*/ _taggedTemplateLiteral(["\n\n  position: fixed;\n\n  height: 5vh;\n  \n  left: auto;\n  top: 2.5vw;\n  right: 2.5vw;\n  bottom: auto;\n\n  font-family: Roboto;\n  font-size: 7.5vh;\n  \n  color: white;\n  text-shadow: 0px -0px 50px rgba(255, 215, 0, .75);\n\n  text-shadow:\n  0 1px 0 hsl(174,5%,80%),\n  1px 2px 0 hsl(174,5%,75%),\n  2px 3px 0 hsl(174,5%,70%);\n\n  @media(orientation: portrait){\n    height: 5vh;\n    \n    left: auto;\n\n    top: 5vw;\n    right: 5vw;\n\n    bottom: auto;\n  }\n\n  transform: translate3d(0%,-50%,0);\n\n  cursor: pointer;\n  user-select: none;\n"], ["\n\n  position: fixed;\n\n  height: 5vh;\n  \n  left: auto;\n  top: 2.5vw;\n  right: 2.5vw;\n  bottom: auto;\n\n  font-family: Roboto;\n  font-size: 7.5vh;\n  \n  color: white;\n  text-shadow: 0px -0px 50px rgba(255, 215, 0, .75);\n\n  text-shadow:\n  0 1px 0 hsl(174,5%,80%),\n  1px 2px 0 hsl(174,5%,75%),\n  2px 3px 0 hsl(174,5%,70%);\n\n  @media(orientation: portrait){\n    height: 5vh;\n    \n    left: auto;\n\n    top: 5vw;\n    right: 5vw;\n\n    bottom: auto;\n  }\n\n  transform: translate3d(0%,-50%,0);\n\n  cursor: pointer;\n  user-select: none;\n"]);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Outer = _styledComponents.default.div(_templateObject);

var Wrapper = _styledComponents.default.div(_templateObject2);

var Textarea = _styledComponents.default.textarea(_templateObject3);

var PriceWrapper = _styledComponents.default.div(_templateObject4);

var Price = _styledComponents.default.div(_templateObject5);

var Toggle = _styledComponents.default.div(_templateObject6);

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
      message: "".concat(_this.props.message.message),
      readonly: false,
      caption: "buy",
      currency: 0,
      toggle: 0
    };
    return _this;
  }

  _createClass(ContainerMessage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.getMessage();
      this.props.getPrice();
      this.props.getAuthor();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(props) {
      this.setState({
        message: "".concat(props.message.message)
      });
    }
  }, {
    key: "handleOnSubmit",
    value: function handleOnSubmit() {
      this.props.setMessage(this.state.message, this.props.message.price);
    }
  }, {
    key: "_handleKeyPress",
    value: function _handleKeyPress(e) {
      if (e.key === 'Enter') {
        this.handleOnSubmit();
      }
    }
  }, {
    key: "handleChange",
    value: function handleChange(event) {
      this.setState({
        message: event.target.value
      });
    }
  }, {
    key: "toggleCurrency",
    value: function toggleCurrency() {
      this.setState({
        currency: this.state.currency < currencies.length - 1 ? this.state.currency + 1 : 0
      });
    }
  }, {
    key: "toggle",
    value: function toggle() {
      this.setState({
        toggle: this.state.toggle < 1 ? this.state.toggle + 1 : 0
      });

      switch (this.state.toggle) {
        case 0:
          this.setState({
            message: this.props.message.message
          });
          break;

        case 1:
          this.setState({
            message: this.props.message.author
          });
          break;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react.default.createElement(Outer, null, _react.default.createElement(Wrapper, null, _react.default.createElement(Textarea, {
        value: "".concat(this.state.message),
        onChange: function onChange(event) {
          _this2.handleChange(event);
        }
      })), _react.default.createElement(PriceWrapper, null, _react.default.createElement(Price, {
        onClick: function onClick() {
          return _this2.toggleCurrency();
        }
      }, _react.default.createElement("h1", null, "".concat((this.props.message.price / 1000000000000000000 * currencies[this.state.currency][1]).toFixed(2))), _react.default.createElement("h1", null, "".concat(currencies[this.state.currency][0], " \u25BC"))), _react.default.createElement(_componentButton.default, {
        caption: this.state.caption,
        onClick: function onClick() {
          return _this2.handleOnSubmit();
        }
      })), _react.default.createElement(_componentLogo.default, null));
    }
  }]);

  return ContainerMessage;
}(_react.default.Component);

function props(state) {
  return {
    message: state.message
  };
}

function actions(dispatch) {
  return (0, _redux.bindActionCreators)({
    getMessage: actionsMessage.getMessage,
    getPrice: actionsMessage.getPrice,
    getAuthor: actionsMessage.getAuthor,
    setMessage: actionsMessage.setMessage
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