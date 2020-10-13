import counterReducer from './counter';
import loggedReducer from './isLogged';

import {combineReducers} from 'redux';

const allReducers = combineReducers({
	//nome que desejar / reducer
	counter: counterReducer,
	isLogged: loggedReducer
});

export default allReducers;