"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Fruit_ = require("./Fruit_");

var _containerFruits = _interopRequireDefault(require("../containers/container-fruits"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Fruit =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Fruit, _React$Component);

  function Fruit(props) {
    var _this;

    _classCallCheck(this, Fruit);

    _this = _possibleConstructorReturn(this, (Fruit.__proto__ || Object.getPrototypeOf(Fruit)).call(this, props));
    _this.state = {
      name: props.match.params.fruitName
    };
    return _this;
  }

  _createClass(Fruit, [{
    key: "handleOnClick",
    value: function handleOnClick() {}
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react.default.createElement("div", {
        onClick: function onClick() {
          return _this2.handleOnClick();
        }
      }, _react.default.createElement(_Fruit_.Heading, null, _react.default.createElement("h1", null, "Fruits"), _react.default.createElement(_containerFruits.default, null)));
    }
  }]);

  return Fruit;
}(_react.default.Component);
/* export default ({ match }) => (

    <BlockHeight>{match.params.blockHeight}</BlockHeight>

); */


exports.default = Fruit;