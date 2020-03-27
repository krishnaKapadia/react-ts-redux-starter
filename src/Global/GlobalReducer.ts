import { combineReducers } from 'redux';
import { reducer as modal } from 'redux-modal';

import { AppReducer } from './../Sections/App/Reducers/AppReducer';
import { AppState } from './../Sections/App/Models';


export type GlobalState = {
    app: AppState
};

export default () => combineReducers({
    app: AppReducer,
    modal
});