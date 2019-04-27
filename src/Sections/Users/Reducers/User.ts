import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { UserState, UserPayload, LoginResponse, InitialLoginState } from "../Models";
import * as Actions from '../Actions';
import { UserReducer } from './index';
import { InitialRequestState, ErrorResponse } from '../../../Utils/Redux/models';
import { reducerUpdate } from './../../../Utils/Redux/reducer-utils';
import { applyMiddleware } from 'redux';

const INITIAL_STATE: UserState = {
    email: "",
    firstName: "",
    lastName: "",
    login: InitialLoginState,
    registration: InitialRequestState,
};

export const CurrentUserReducer = reducerWithInitialState(INITIAL_STATE)
.case(Actions.ResetRequest, (state: UserState) =>
    reducerUpdate(state, {
        login: {
            ...InitialLoginState,
            reset: {
                sent: true,
                success: false,
                failure: null, 
            }
        }
    })
)
.case(Actions.ResetSuccess, (state: UserState) =>
    reducerUpdate(state, {
        login: {
            ...InitialLoginState,
            reset: {
                sent: false,
                success: true,
                failure: null,
            }
        }
    })
)
.case(Actions.ResetFailure, (state: UserState, res_payload: ErrorResponse) =>
    reducerUpdate(state, {
        login: {
            ...InitialLoginState,
            reset: {
                sent: false,
                success: false,
                failure: res_payload,
            }
        }
    })
)
.case(Actions.LoginRequest, (state: UserState) => 
    reducerUpdate(state, {
        login: {
            sent: true,
            success: false,
            failure: null, 
            ...InitialLoginState
        }
    })
)
.case(Actions.LoginSuccess, (state: UserState, res_payload: LoginResponse) => 
    reducerUpdate(state, {
        ...res_payload,
        login: {
            sent: false,
            success: true,
            failure: null,
            ...InitialLoginState
        }
    })
)
.case(Actions.LoginFailure, (state: UserState, payload: ErrorResponse) =>
    reducerUpdate(state, {
        login: {
            sent: false,
            success: false,
            failure: payload,
            ...InitialLoginState
        }
    })
)
.case(Actions.RegistrationRequest, (state: UserState) => 
    reducerUpdate(state, {
        registration: {
            sent: true,
            success: false,
            failure: null,
        }
    })
)
.case(Actions.RegistrationSuccessful, (state: UserState) =>
    reducerUpdate(state, {
        registration: {
            sent: true,
            success: true,
            failure: null,
        }
    })    
)
.case(Actions.RegistrationFailure, (state: UserState, payload: ErrorResponse) => 
    reducerUpdate(state, {
        registration: {
            sent: true,
            success: false,
            failure: payload
        }
    })
);