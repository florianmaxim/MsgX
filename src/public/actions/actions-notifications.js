const setNotification = (notification) => {

    return (dispatch) => {
        dispatch({type: "RECEIVE_NOTIFICATION", payload: notification})
    }

}
  
  
const closeNotification = () => {

    return (dispatch) => {
        dispatch({type: "CLOSE_NOTIFICATION", payload: true})
    }
    
}

export {setNotification, closeNotification}