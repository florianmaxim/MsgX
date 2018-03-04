import {combineReducers}   from 'redux';

import ReducerMessage from './reducer-message';

export default combineReducers({

    message: ReducerMessage

});