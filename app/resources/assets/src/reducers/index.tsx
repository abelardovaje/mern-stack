import {combineReducers} from 'redux';
import UserReducer from './usersReducers';

const allReducers = combineReducers({

	users:UserReducer

});

export default allReducers;
