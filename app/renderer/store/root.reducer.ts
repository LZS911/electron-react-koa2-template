import { combineReducers } from 'redux';
import { HeaderNavReducer } from './reducer/headerNav';

export default combineReducers({ headerNav: HeaderNavReducer });
