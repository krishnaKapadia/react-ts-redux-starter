import { LoginRequest as ILoginRequest, LoginRequest, IRegistrationRequest, IPasswordResetRequest, IPasswordResetViaEmailRequest } from "../Models";
import { put, call, takeLatest } from 'redux-saga/effects';
import * as Actions from '../Actions';
import axios from 'axios';
import { isNil } from 'lodash';
import { ENDPOINTS } from "../../../Services/urlService";

const loginUrl = ENDPOINTS.LOGIN;
const passwordResetUrl = ENDPOINTS.RESET_PASSWORD;
const passwordResetTokenValidation = ENDPOINTS.RESET_PASSWORD_TOKEN_VALIDATION;
const passwordResetViaEmail = ENDPOINTS.RESET_PASSWORD_WITH_EMAIL;
const registrationUrl = ENDPOINTS.REGISTER;

const executeLoginRequest = (payload: ILoginRequest): any => {
    console.log("Posting: ", payload);
    return axios.post(loginUrl, payload);
};

const executeResetPasswordRequest = (payload: IPasswordResetRequest): any => {
    console.log("Posting: ", payload);
    return axios.post(passwordResetUrl, payload);
};

const executeValidateResetTokenRequest = (payload: { token: string }): any => {
    console.log("Posting", payload);
    return axios.post(passwordResetTokenValidation, { token: payload });
}

const executeResetPasswordViaEmailRequest = (payload: IPasswordResetViaEmailRequest): any => {
    console.log("Posting", payload);
    return axios.post(passwordResetViaEmail, payload);
}

const executeRegistrationRequest = (payload: IRegistrationRequest): any => {
    console.log(payload);
    return axios.post(registrationUrl, payload);
};

const setAuthToken = (accessToken: string) => {
    if (!isNil(accessToken)) {
    // Set token to local storage
    localStorage.setItem('accessToken', accessToken);

    // Apply authorization token to every request if logged in
    axios.defaults.headers.common["Authorization"] = accessToken;
  } else {
    // Remove from local storage
    localStorage.removeItem('accessToken');

    // Delete auth header
    delete axios.defaults.headers.common["Authorization"];
  }
}

const authenticated = (): boolean => {
    return !isNil(localStorage.getItem('accessToken'));
}

export function* login(res_payload: any) {
    try {
        // if(authenticated()) {

            // yield put(Actions.LoginSuccess());
        // } else {
            console.log(res_payload);
            const { payload } = res_payload;
            const res = yield call(executeLoginRequest,  payload);
            const data = res.data;
            if (isNil(data.success) || !data.success) {
                throw res.data1;
            } else {
                const { accessToken } = data;
                
                setAuthToken(accessToken);

                yield put(Actions.LoginSuccess(data));
            }
        // }
    } catch(err) {
        console.log(err);
        yield put(Actions.LoginFailure(err));
    }

    // Set token to localStorage
    // const { token } = res.data;
    // localStorage.setItem("jwtToken", token);
    // // Set token to Auth header
    // setAuthToken(token);
    // // Decode token to get user data
    // const decoded = jwt_decode(token);
    // // Set current user
    // dispatch(setCurrentUser(decoded));
}

export function* resetPasswordRequest(req_payload: any) {
    try {
        const { payload } = req_payload;
        const res = yield call(executeResetPasswordRequest, payload);
        if (isNil(res.data.success)) {
            throw res.body;
        } else {
            yield put(Actions.ResetSuccess());
        }
    } catch(err) {
        yield put(Actions.ResetFailure(err));
    }
}

export function* validateResetToken(req_payload: any) {
    try {
        const { payload } = req_payload;
        const res = yield call(executeValidateResetTokenRequest, payload);

        if (isNil(res.data.success)) {
            throw res.data;
        } else {
            yield put(Actions.ValidateResetTokenSuccess(res.data));
        }
    } catch(err) {
        console.log("Error! ", err);
        yield put(Actions.ValidateResetTokenFailure(err));
    }
}

export function* resetPasswordViaEmail(req_payload: any) {
    try {
        const { payload } = req_payload;
        const res = yield call(executeResetPasswordViaEmailRequest, payload);
        const err = res.data.error;
        if (err) {
            throw err;
        } else {
            yield put(Actions.ResetPasswordViaEmailSuccess());
        }
    } catch (err) {
        console.log(err);
        yield put(Actions.ResetPasswordViaEmailFailure(err));
    }
}

export function* register(req_payload: any) {
    try {
        const { payload } = req_payload;
        const res = yield call(executeRegistrationRequest, payload);
        const err = res.data.error;
        if(err) {
            throw err;
        } else {
            yield put(Actions.RegistrationSuccessful);
        }
    } catch(err) {
        console.log(err);
        yield put(Actions.RegistrationFailure(err));
    }
}

export function* UserSagas() {
    yield takeLatest(Actions.LoginRequest, login);
    yield takeLatest(Actions.ResetRequest, resetPasswordRequest);
    yield takeLatest(Actions.ValidateResetTokenRequest, validateResetToken);
    yield takeLatest(Actions.ResetPasswordViaEmailRequest, resetPasswordViaEmail);
    yield takeLatest(Actions.RegistrationRequest, register);
}