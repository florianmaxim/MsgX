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

const getStep = () => {

  return (dispatch) => {

    if(!connected){
      Blockchain.connect();
      connected = true;
    }    

    Blockchain.getStep((step) => {

      dispatch({type: "RECEIVE_STEP", payload: step})

    })
  }
}

const getCount = () => {

  return (dispatch) => {

    if(!connected){
      Blockchain.connect();
      connected = true;
    }    

    Blockchain.getCount((count) => {

      dispatch({type: "RECEIVE_COUNT", payload: count})

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

const getDate = () => {

  return (dispatch) => {

    if(!connected){
      Blockchain.connect();
      connected = true;
    }    

    Blockchain.getDate((date) => {

      dispatch({type: "RECEIVE_DATE", payload: date})

    })

  }

}

const setMessage = (message, price) => {

  return (dispatch) => {

    if(!connected){
      Blockchain.connect();
      connected = true;
    }   

    Blockchain.setMessage(message, (msg) => {

      getCount();
      getMessage();
      getAuthor();
      getPrice();
      getDate();
      getStep();       

    })

  }

}

export {getConnectionType, getMessage, getCount, getPrice, getStep, getAuthor, getDate, setMessage}