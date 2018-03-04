
const init = {
  message: '',
  price: 0,
  author: 0
};

export default function (state = init, action) {

  switch(action.type){

    case "RECEIVE_MESSAGE":
      return {
        message: action.payload,
        price: state.price,
        author: state.author
      }
    break;

    case "RECEIVE_PRICE":
    return {
      message: state.message,
      price: action.payload,
      author: state.author
    }
    break;

    case "RECEIVE_AUTHOR":
    return {
      message: state.message,
      price: state.price,
      author: action.payload
    }
  break;

  }

  return state;
  
}