
const init = {
  count: 0,
  message: '',
  price: 0,
  author: 0,
  date: 0,
  step: 0,
  connectionType: null
};

export default function (state = init, action) {

  switch(action.type){

    case "RECEIVE_CONENCTION_TYPE":
      return {
        count: state.count,
        message: state.message,
        price: state.price,
        author: state.author,
        date: state.date,
        step: state.step,
        connectionType: action.payload,
      }
    break;

    case "RECEIVE_MESSAGE":
      return {
        count: state.count,
        message: action.payload,
        price: state.price,
        author: state.author,
        date: state.date,
        step: state.step,
        connectionType: state.connectionType
      }
    break;

    case "RECEIVE_PRICE":
    return {
      count: state.count,
      message: state.message,
      price: action.payload,
      author: state.author,
      date: state.date,
      step: state.step,
      connectionType: state.connectionType
    }
    break;

    case "RECEIVE_AUTHOR":
    return {
      count: state.count,
      message: state.message,
      price: state.price,
      author: action.payload,
      date: state.date,
      step: state.step,
      connectionType: state.connectionType
    }
  break;

  case "RECEIVE_DATE":
    return {
      count: state.count,
      message: state.message,
      price: state.price,
      author: state.author,
      date: action.payload,
      step: state.step,
      connectionType: state.connectionType
    }
  break;

  case "RECEIVE_STEP":
    return {
      count: state.count,
      message: state.message,
      price: state.price,
      author: state.author,
      date: state.date,
      step: action.payload,
      connectionType: state.connectionType
    }
  break;

  case "RECEIVE_COUNT":
    return {
      count: action.payload,
      message: state.message,
      price: state.price,
      author: state.author,
      date: state.date,
      step: state.step,
      connectionType: state.connectionType
    }
  break;

  }

  return state;
  
}