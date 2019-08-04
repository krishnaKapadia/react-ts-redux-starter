import { combineReducers } from 'redux';
import { reducer as modal } from 'redux-modal';
import { UserState } from '../Sections/Users/Models';
import { CurrentUserReducer } from '../Sections/Users/Reducers/User';
import { AppState } from '../Sections/App/Models';
import { AppReducer } from './../Sections/App/Reducers/AppReducer';

export type GlobalState = {
    app: AppState,
    user: UserState
};

export default () => combineReducers({
    app: AppReducer,
    user: CurrentUserReducer,
    modal
});