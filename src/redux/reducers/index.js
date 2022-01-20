import { combineReducers } from 'redux';
import user from './login';
import player from './player';
import token from './token';

const rootReducer = combineReducers({ user, player, token });

export default rootReducer;
