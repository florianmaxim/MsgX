"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchFruits = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pseudo = [{
  _id: "0",
  name: 'Mango'
}, {
  _id: "1",
  name: 'Pineapple'
}];

var fetchFruits = function fetchFruits() {
  return function (dispatch) {
    /* 
        let url = 'https://api.blockcypher.com/v1/eth/main';
    
        axios.get(`${url}`)
    
          .then((response) => {        
            dispatch({type: "RECEIVE_BLOCKS", payload:response.data})
          })
    
          .catch((err) => {
            dispatch({type: "RECEIVE_BLOCKS_ERROR", payload: err})
          });
     */
    dispatch({
      type: "RECEIVE_FRUITS",
      payload: pseudo
    });
  };
};

exports.fetchFruits = fetchFruits;