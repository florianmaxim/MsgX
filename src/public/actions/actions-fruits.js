import axios from 'axios';

const pseudo = [
  {
    _id: "0",
    name: 'Mango'
  },
  {
    _id: "1",
    name: 'Pineapple'
  }
]

const fetchFruits = () => {

  return (dispatch) => {

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
    dispatch({type: "RECEIVE_FRUITS", payload: pseudo})

  }

}

export {fetchFruits}