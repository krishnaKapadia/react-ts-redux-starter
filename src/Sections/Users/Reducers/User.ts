import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { UserState, InitialLoginState } from "../Models";
import * as Actions from '../Actions';
import { InitialRequestState, ErrorResponse } from '../../../Utils/Redux/models';
import { reducerUpdate } from './../../../Utils/Redux/reducer-utils';
import { getTokenFromLocalStorage } from '../../../Utils/Authentication/index';

const INITIAL_STATE: UserState = {
    id: "",
    email: "",
    firstName: "",
    lastName: "",
    accessToken: "",
    login: InitialLoginState,
    registration: InitialRequestState,
};

export const CurrentUserReducer = reducerWithInitialState(INITIAL_STATE)
.case(Actions.ResetPasswordViaEmailRequest, (state: UserState) =>
    reducerUpdate(state, {
        login: {
            ...InitialLoginState,
            resetViaEmail: {
                sent: true,
                success: false,
                failure: null
            }
        }
    })
)
.case(Actions.ResetPasswordViaEmailSuccess, (state: UserState) =>
    reducerUpdate(state, {
        login: {
            ...InitialLoginState,
            resetViaEmail: {
                sent: false,
                success: true,
                failure: null
            }
        }
    })
)
.case(Actions.ResetPasswordViaEmailFailure, (state: UserState, error: ErrorResponse) =>
    reducerUpdate(state, {
        login: {
            ...InitialLoginState,
            resetViaEmail: {
                sent: false,
                success: false,
                failure: error
            }
        }
    })
)
.case(Actions.ValidateResetTokenRequest, (state: UserState) => 
    reducerUpdate(state,  {
        login: {
            ...InitialLoginState,
            validateResetToken: {
                sent: true,
                success: null,
                failure: null
            }
        }
    })
)
    .case(Actions.ValidateResetTokenSuccess, (state: UserState, payload: any) => {
        return reducerUpdate(state,  {
            login: {
                ...InitialLoginState,
                validateResetToken: {
                    sent: false,
                    success: payload,
                    failure: null
                }
            }
        })
    }
)
.case(Actions.ValidateResetTokenFailure, (state: UserState, error) =>
    reducerUpdate(state, {
        login: {
            ...InitialLoginState,
            validateResetToken: {
                sent: false,
                success: null,
                failure: error
            }
        }
    })
)
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
.case(Actions.LogOut, (state: UserState) => 
    reducerUpdate(state, {
        ...INITIAL_STATE
    })
)
.case(Actions.LoginRequest, (state: UserState) => {
    return reducerUpdate(state, {
            login: {
                ...InitialLoginState,
                sent: true,
                success: false,
                failure: null, 
            }
        }
    );
    }
)
.case(Actions.LoginSuccess, (state: UserState, res_payload: any) =>  {
    const { email, id, firstName, lastName, accessToken } = res_payload;
    return reducerUpdate(state, {
        id,
        email,
        firstName,
        lastName,
        accessToken,
        login: {
            ...InitialLoginState,
            sent: false,
            success: true,
            failure: null,
        }
    });
})
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