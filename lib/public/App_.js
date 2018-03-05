"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Outer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n\n  @import url('https://fonts.googleapis.com/css?family=Open+Sans');\n  @import url('https://fonts.googleapis.com/css?family=Cinzel');\n  @import url('https://fonts.googleapis.com/css?family=Roboto');\n\n  body {\n    margin: 0;\n\n    background: radial-gradient(ellipse farthest-corner at right bottom, #FEDB37 0%, #FDB931 8%, #9f7928 30%, #8A6E2F 40%, transparent 80%),\n    radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #5d4a1f 100%);\n  }\n\n  ::-webkit-scrollbar {\n    width: 0px;  /* remove scrollbar space */\n    height:0;\n    border: 0px solid gold;\n    background: black;  /* optional: just make scrollbar invisible */\n  }\n  /* optional: show position indicator in red */\n  ::-webkit-scrollbar-thumb {\n      background:gold;\n      width:0px;\n      height:0;\n  }\n"], ["\n\n  @import url('https://fonts.googleapis.com/css?family=Open+Sans');\n  @import url('https://fonts.googleapis.com/css?family=Cinzel');\n  @import url('https://fonts.googleapis.com/css?family=Roboto');\n\n  body {\n    margin: 0;\n\n    background: radial-gradient(ellipse farthest-corner at right bottom, #FEDB37 0%, #FDB931 8%, #9f7928 30%, #8A6E2F 40%, transparent 80%),\n    radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #5d4a1f 100%);\n  }\n\n  ::-webkit-scrollbar {\n    width: 0px;  /* remove scrollbar space */\n    height:0;\n    border: 0px solid gold;\n    background: black;  /* optional: just make scrollbar invisible */\n  }\n  /* optional: show position indicator in red */\n  ::-webkit-scrollbar-thumb {\n      background:gold;\n      width:0px;\n      height:0;\n  }\n"]),
    _templateObject2 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  width: 100vw;\n  height: 100vh;\n\n  box-sizing: border-box;\n  border: 0px solid gold;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  box-shadow: 0px 0px 50px rgba(255, 255, 255, 1);  \n"], ["\n  width: 100vw;\n  height: 100vh;\n\n  box-sizing: border-box;\n  border: 0px solid gold;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  box-shadow: 0px 0px 50px rgba(255, 255, 255, 1);  \n"]);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

(0, _styledComponents.injectGlobal)(_templateObject);

var Outer = _styledComponents.default.div(_templateObject2);

exports.Outer = Outer;