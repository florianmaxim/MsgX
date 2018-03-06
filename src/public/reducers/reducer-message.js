
const init = {
  message: '',
  price: 0,
  author: 0,
  connectionType: null
};

export default function (state = init, action) {

  switch(action.type){

    case "RECEIVE_CONENCTION_TYPE":
      return {
        message: state.message,
        price: state.price,
        author: state.author,
        connectionType: action.payload,
      }
    break;

    case "RECEIVE_MESSAGE":
      return {
        message: action.payload,
        price: state.price,
        author: state.author,
        connectionType: state.connectionType
      }
    break;

    case "RECEIVE_PRICE":
    return {
      message: state.message,
      price: action.payload,
      author: state.author,
      connectionType: state.connectionType
    }
    break;

    case "RECEIVE_AUTHOR":
    return {
      message: state.message,
      price: state.price,
      author: action.payload,
      connectionType: state.connectionType
    }
  break;

  }

  return state;
  
}