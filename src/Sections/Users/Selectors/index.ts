import { createSelector } from 'reselect';
import { GlobalState } from '../../../GlobalReducer';
import { UserState } from '../Models';
import { isNil } from 'lodash';

const userState = (state: GlobalState): UserState => state.user;

export const hasPasswordResetError = createSelector(
    userState,
    state => !isNil(state.login.reset.failure)
);

export const hasLoginError = createSelector(
    userState,
    state => !isNil(state.login.failure)
);

export const hasRegistrationError = createSelector(
    userState,
    state => !isNil(state.registration.failure)
);

export const getRegistrationError = createSelector(
    userState,
    state => state.registration.failure
);

export const isPasswordResetLoading = createSelector(
    userState, 
    state => 
        state.login.reset.sent && 
        !state.login.reset.success && 
        isNil(state.login.reset.failure)
)

export const isLoginLoading = createSelector(
    userState,
    state => 
        state.login.sent && 
        !state.login.success && 
        isNil(state.login.failure)
);

export const isRegistrationLoading = createSelector(
    userState,
    state =>
        state.registration.sent &&
        !state.registration.success &&
        isNil(state.registration.failure)
);

export const hasPasswordResetRequestSucceeded = createSelector(
    userState,
    state => 
        state.login.reset.success
);