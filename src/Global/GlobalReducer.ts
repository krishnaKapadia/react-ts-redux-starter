import { combineReducers } from 'redux';
import { UserState } from '../Sections/Users/Models';
import { CurrentUserReducer } from '../Sections/Users/Reducers/User';

export type GlobalState = {
    user: UserState
};

export default () => combineReducers({
    user: CurrentUserReducer
});