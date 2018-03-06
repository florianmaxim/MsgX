
const init = {
    message: '',
    url: 'https://github.com/florianmaxim/msgx',
    closed: true
  };
  
  export default function (state = init, action) {
  
    switch(action.type){
  
      case "RECEIVE_NOTIFICATION":
        return {
          message: action.payload.message,
          url: action.payload.url,
          closed: false
        }
      break;
  
      case "CLOSE_NOTIFICATION":
        return {
          message: state.message,
          url: state.url,
          closed: action.payload
        }
      break;
  
    }
  
    return state;
    
  }