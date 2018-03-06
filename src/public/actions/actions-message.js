import BlockchainController from '../controllers/controller-blockchain';

const Blockchain = new BlockchainController();

let connected = false;

const getMessage = () => {

  return (dispatch) => {

    if(!connected){
      Blockchain.connect();
      connected = true;
    }

    Blockchain.getMessage((msg) => {

      //console.log(msg)

      dispatch({type: "RECEIVE_MESSAGE", payload: msg})

    })
  }
} 

const getConnectionType = () => {

  return (dispatch) => {

    if(!connected){
      Blockchain.connect();
      connected = true;
    }    

    Blockchain.getConnectionType((type) => {

      dispatch({type: "RECEIVE_CONENCTION_TYPE", payload: type})

    })
  }
}


const getPrice = () => {

  return (dispatch) => {

    if(!connected){
      Blockchain.connect();
      connected = true;
    }    

    Blockchain.getPrice((price) => {

      dispatch({type: "RECEIVE_PRICE", payload: price})

    })
  }
}


const getAuthor = () => {

  return (dispatch) => {

    if(!connected){
      Blockchain.connect();
      connected = true;
    }    

    Blockchain.getAuthor((author) => {

      dispatch({type: "RECEIVE_AUTHOR", payload: author})

    })

  }

}

const setMessage = (message, price) => {
  console.log('setMessage')

  return (dispatch) => {

    if(!connected){
      Blockchain.connect();
      connected = true;
    }   

    Blockchain.setMessage(message, price, (msg) => {

      getPrice();

      dispatch({type: "RECEIVE_MESSAGE", payload: msg})

    })

  }

}

export {getConnectionType, getMessage, getPrice, getAuthor, setMessage}