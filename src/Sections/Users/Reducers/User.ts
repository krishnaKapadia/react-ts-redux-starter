import { UserState } from "../Models";
import { UserReducer } from './index';
import { reducerWithInitialState } from 'typescript-fsa-reducers';

const INITIAL_STATE: UserState = {
    email: "",
    firstName: "",
    lastName: ""
};

export const CurrentUserReducer = reducerWithInitialState(INITIAL_STATE);