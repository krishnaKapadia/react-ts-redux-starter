import { combineReducers } from 'redux';
import { CurrentUserReducer } from './User';

export const UserReducer = combineReducers({
    user: CurrentUserReducer
})