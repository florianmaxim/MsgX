import {combineReducers}   from 'redux';

import ReducerFruits from './reducer-fruits';

export default combineReducers({

    fruits: ReducerFruits

});