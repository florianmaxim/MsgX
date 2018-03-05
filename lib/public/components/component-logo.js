"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var config = _interopRequireWildcard(require("../../../config.json"));

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n    z-index:5;\n\n    position:fixed;\n\n    left:3vw;\n    bottom:3vw;\n\n    @media(orientation: portrait){\n      top:auto;\n      bottom:4vh;\n\n      left:50vw;\n\n      transform: translateX(-50%);\n      flex-direction: column;\n    }\n    \n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n"], ["\n    z-index:5;\n\n    position:fixed;\n\n    left:3vw;\n    bottom:3vw;\n\n    @media(orientation: portrait){\n      top:auto;\n      bottom:4vh;\n\n      left:50vw;\n\n      transform: translateX(-50%);\n      flex-direction: column;\n    }\n    \n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n"]),
    _templateObject2 = /*#__PURE__*/ _taggedTemplateLiteral(["\n    width: 10vw;\n    height: 10vw;\n\n    max-width:75px;\n    max-height:75px;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background:transparent;\n    border: 10px solid transparent;\n    box-sizing: border-box;\n  \n    font-family: Lato;\n    font-size:2vw;\n    max-font-size:1.5em;\n    box-shadow: 0px 0px 15px rgba(255,255,255,0);\n    color:white;\n    opacity:.5;\n\n    cursor: pointer;\n\n    @media(orientation: portrait){\n      font-size:5vw;\n    }\n\n    transition: 3s opacity;\n"], ["\n    width: 10vw;\n    height: 10vw;\n\n    max-width:75px;\n    max-height:75px;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background:transparent;\n    border: 10px solid transparent;\n    box-sizing: border-box;\n  \n    font-family: Lato;\n    font-size:2vw;\n    max-font-size:1.5em;\n    box-shadow: 0px 0px 15px rgba(255,255,255,0);\n    color:white;\n    opacity:.5;\n\n    cursor: pointer;\n\n    @media(orientation: portrait){\n      font-size:5vw;\n    }\n\n    transition: 3s opacity;\n"]),
    _templateObject3 = /*#__PURE__*/ _taggedTemplateLiteral(["\n\n    width: 100vw;\n    height: 14px;\n    \n    max-height:75px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: white;\n    background:transparent;\n\n    border: 10px solid transparent;\n    box-sizing: border-box;\n\n    font-family: Lato;\n    font-size:14px;\n    text-shadow: 0px 0px 5px rgba(0,0,0,.5);\n    text-align:center;\n    text-decoration: none;\n    \n    opacity:.5;\n\n    cursor: pointer;\n\n    @media(orientation: portrait){\n\n    }\n\n    transition: 1s opacity;\n"], ["\n\n    width: 100vw;\n    height: 14px;\n    \n    max-height:75px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: white;\n    background:transparent;\n\n    border: 10px solid transparent;\n    box-sizing: border-box;\n\n    font-family: Lato;\n    font-size:14px;\n    text-shadow: 0px 0px 5px rgba(0,0,0,.5);\n    text-align:center;\n    text-decoration: none;\n    \n    opacity:.5;\n\n    cursor: pointer;\n\n    @media(orientation: portrait){\n\n    }\n\n    transition: 1s opacity;\n"]);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var LogoContainer = _styledComponents.default.div(_templateObject);

var LogoOuter = _styledComponents.default.div(_templateObject2);

var LogoText = _styledComponents.default.div(_templateObject3);

var ComponentLogo =
/*#__PURE__*/
function (_Component) {
  _inherits(ComponentLogo, _Component);

  function ComponentLogo(props) {
    var _this;

    _classCallCheck(this, ComponentLogo);

    _this = _possibleConstructorReturn(this, (ComponentLogo.__proto__ || Object.getPrototypeOf(ComponentLogo)).call(this, props));
    _this.state = {
      logo: true
    };
    return _this;
  }

  _createClass(ComponentLogo, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react.default.createElement(LogoContainer, {
        onMouseOver: function onMouseOver() {
          return _this2.setState({
            logo: true
          });
        },
        onMouseOut: function onMouseOut() {
          return _this2.setState({
            logo: false
          });
        },
        onTouchStart: function onTouchStart() {
          return _this2.setState({
            logo: !_this2.state.logo
          });
        }
      }, _react.default.createElement("a", {
        href: config.logoURL,
        target: "blank"
      }, _react.default.createElement(LogoOuter, {
        style: {
          boxShadow: this.state.logo ? '0px 0px 15px rgba(255,255,255,.8)' : '0px 0px 0px rgba(255,255,255,0)',
          display: config.logoEnabled ? 'flex' : 'none'
        }
      }, config.logoInitials)));
    }
  }]);

  return ComponentLogo;
}(_react.Component);

exports.default = ComponentLogo;