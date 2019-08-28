import { createSelector } from 'reselect';
import { GlobalState } from '../../../Global/GlobalReducer';
import { UserState } from '../Models';
import { isNil } from 'lodash';
import { ValidateResetTokenSuccess } from './../Actions/index';

const userState = (state: GlobalState): UserState => state.user;

export const hasPasswordResetError = createSelector(
    userState,
    state => !isNil(state.login.reset.failure)
);

export const hasPasswordResetViaEmailError = createSelector(
    userState,
    state => !isNil(state.login.resetViaEmail.failure)  
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
);

export const isPasswordResetViaEmailLoading = createSelector(
    userState,
    state => 
        state.login.resetViaEmail.sent && 
        !state.login.resetViaEmail.success && 
        isNil(state.login.resetViaEmail.failure)
)

export const isValidatingResetToken = createSelector(
    userState,
    state =>
        state.login.validateResetToken.sent &&
        isNil(state.login.validateResetToken.success) &&
        isNil(state.login.validateResetToken.failure)
);

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

export const hasLoginSucceeded = createSelector(
    userState,
    state => state.login.success
);

export const hasPasswordResetRequestSucceeded = createSelector(
    userState,
    state => 
        state.login.reset.success
);

export const hasPasswordResetViaEmailSucceded = createSelector(
    userState,
    state => 
        state.login.resetViaEmail.success
)

export const isTokenValid = createSelector(
    userState,
    state => {
        console.log(state.login.validateResetToken.success);
        return !isNil(state.login.validateResetToken.success);
    }
);

export const getValidationTokenResponse = createSelector(
    userState,
    state =>
        !isNil(state.login.validateResetToken.success) ? state.login.validateResetToken.success : null
);