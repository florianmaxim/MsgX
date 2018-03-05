import BlockchainController from '../controllers/controller-blockchain';

const Blockchain = new BlockchainController();

const getMessage = () => {

  return (dispatch) => {

    Blockchain.connect();

    Blockchain.getMessage((msg) => {

      //console.log(msg)

      dispatch({type: "RECEIVE_MESSAGE", payload: msg})

    })
  }
} 


const getPrice = () => {

  return (dispatch) => {

    Blockchain.connect();    

    Blockchain.getPrice((msg) => {

      //console.log(msg)

      dispatch({type: "RECEIVE_PRICE", payload: msg.toNumber()})

    })
  }
}


const getAuthor = () => {

  return (dispatch) => {

    Blockchain.connect();    

    Blockchain.getAuthor((msg) => {

      //console.log(msg)

      dispatch({type: "RECEIVE_AUTHOR", payload: msg})

    })

  }

}

const setMessage = (message, price) => {
  console.log('setMessage')

  return (dispatch) => {

    Blockchain.connect();    

    Blockchain.setMessage(message, price, (msg) => {

      //console.log(msg)

      dispatch({type: "RECEIVE_MESSAGE", payload: msg})

    })

  }

}

export {getMessage, getPrice, getAuthor, setMessage}