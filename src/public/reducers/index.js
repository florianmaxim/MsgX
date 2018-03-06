import {combineReducers}   from 'redux';

import ReducerMessage from './reducer-message';
import ReducerNotifications from './reducer-notifications';

export default combineReducers({

    message: ReducerMessage,
    notifications: ReducerNotifications

});