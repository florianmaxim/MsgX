"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ComponentButton = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n\n    z-index: 2;\n\n    position: fixed;\n\n    bottom: 25vh;\n    left: 50vw;\n    transform: translateX(-50%);\n\n    @media(orientation:portrait) {\n        bottom: 15vh;\n    }\n\n    width: 250px;\n    height: 53px;\n\n    font-family: Lato;\n    font-weight: bold;\n  \n    text-transform: uppercase;\n    font-size: 10px;\n    letter-spacing: 2px;\n   \n    text-align:center;\n\n    display: flex;\n    flex-direction:column;\n    align-items:center;\n    justify-content:space-center;\n\n    color: black;\n\n    background: rgba(241,231,103,1);\n    background: -moz-linear-gradient(top, rgba(241,231,103,1) 0%, rgba(255,215,0,1) 100%);\n    background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(241,231,103,1)), color-stop(100%, rgba(255,215,0,1)));\n    background: -webkit-linear-gradient(top, rgba(241,231,103,1) 0%, rgba(255,215,0,1) 100%);\n    background: -o-linear-gradient(top, rgba(241,231,103,1) 0%, rgba(255,215,0,1) 100%);\n    background: -ms-linear-gradient(top, rgba(241,231,103,1) 0%, rgba(255,215,0,1) 100%);\n    background: linear-gradient(to bottom, rgba(241,231,103,1) 0%, rgba(255,215,0,1) 100%);\n\n    border: 1px solid rgba(255,255,255, .35);\n    border-radius: 3.5px;\n\n    display: flex;\n    align-items:center;\n    justify-content:center;\n\n    cursor: pointer;\n\n    box-shadow: 0px -0px 10px rgba(255, 215, 0, .75);\n\n    &:hover {\n        //color: black;\n        \n        background: rgba(253,215,0,1);\n        background: -moz-linear-gradient(top, rgba(253,215,0,1) 0%, rgba(241,232,103,1) 100%);\n        background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(253,215,0,1)), color-stop(100%, rgba(241,232,103,1)));\n        background: -webkit-linear-gradient(top, rgba(253,215,0,1) 0%, rgba(241,232,103,1) 100%);\n        background: -o-linear-gradient(top, rgba(253,215,0,1) 0%, rgba(241,232,103,1) 100%);\n        background: -ms-linear-gradient(top, rgba(253,215,0,1) 0%, rgba(241,232,103,1) 100%);\n        background: linear-gradient(to bottom, rgba(253,215,0,1) 0%, rgba(241,232,103,1) 100%);\n\n       //border: 2.5px solid gold;\n      }\n"], ["\n\n    z-index: 2;\n\n    position: fixed;\n\n    bottom: 25vh;\n    left: 50vw;\n    transform: translateX(-50%);\n\n    @media(orientation:portrait) {\n        bottom: 15vh;\n    }\n\n    width: 250px;\n    height: 53px;\n\n    font-family: Lato;\n    font-weight: bold;\n  \n    text-transform: uppercase;\n    font-size: 10px;\n    letter-spacing: 2px;\n   \n    text-align:center;\n\n    display: flex;\n    flex-direction:column;\n    align-items:center;\n    justify-content:space-center;\n\n    color: black;\n\n    background: rgba(241,231,103,1);\n    background: -moz-linear-gradient(top, rgba(241,231,103,1) 0%, rgba(255,215,0,1) 100%);\n    background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(241,231,103,1)), color-stop(100%, rgba(255,215,0,1)));\n    background: -webkit-linear-gradient(top, rgba(241,231,103,1) 0%, rgba(255,215,0,1) 100%);\n    background: -o-linear-gradient(top, rgba(241,231,103,1) 0%, rgba(255,215,0,1) 100%);\n    background: -ms-linear-gradient(top, rgba(241,231,103,1) 0%, rgba(255,215,0,1) 100%);\n    background: linear-gradient(to bottom, rgba(241,231,103,1) 0%, rgba(255,215,0,1) 100%);\n\n    border: 1px solid rgba(255,255,255, .35);\n    border-radius: 3.5px;\n\n    display: flex;\n    align-items:center;\n    justify-content:center;\n\n    cursor: pointer;\n\n    box-shadow: 0px -0px 10px rgba(255, 215, 0, .75);\n\n    &:hover {\n        //color: black;\n        \n        background: rgba(253,215,0,1);\n        background: -moz-linear-gradient(top, rgba(253,215,0,1) 0%, rgba(241,232,103,1) 100%);\n        background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(253,215,0,1)), color-stop(100%, rgba(241,232,103,1)));\n        background: -webkit-linear-gradient(top, rgba(253,215,0,1) 0%, rgba(241,232,103,1) 100%);\n        background: -o-linear-gradient(top, rgba(253,215,0,1) 0%, rgba(241,232,103,1) 100%);\n        background: -ms-linear-gradient(top, rgba(253,215,0,1) 0%, rgba(241,232,103,1) 100%);\n        background: linear-gradient(to bottom, rgba(253,215,0,1) 0%, rgba(241,232,103,1) 100%);\n\n       //border: 2.5px solid gold;\n      }\n"]);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Button = _styledComponents.default.div(_templateObject);

var ComponentButton =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ComponentButton, _React$Component);

  function ComponentButton(props) {
    _classCallCheck(this, ComponentButton);

    return _possibleConstructorReturn(this, (ComponentButton.__proto__ || Object.getPrototypeOf(ComponentButton)).call(this, props));
  }

  _createClass(ComponentButton, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(Button, {
        style: this.props.style,
        onClick: this.props.onClick,
        onTouchStart: this.props.onTouchStart,
        onMouseDown: this.props.onMouseDown,
        onTouchEnd: this.props.onTouchEnd,
        onMouseUp: this.props.onMouseUp,
        onMouseOver: this.props.onMouseOver,
        onMouseOut: this.props.onMouseOut
      }, this.props.caption);
    }
  }]);

  return ComponentButton;
}(_react.default.Component);

exports.ComponentButton = exports.default = ComponentButton;