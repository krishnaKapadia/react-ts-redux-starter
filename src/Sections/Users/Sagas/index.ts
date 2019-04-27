import { LoginRequest as ILoginRequest, LoginRequest, IRegistrationRequest, IPasswordResetRequest } from "../Models";
import { put, call, takeLatest } from 'redux-saga/effects';
import * as Actions from '../Actions';
import axios from 'axios';
import { isNil } from 'lodash';
import { ENDPOINTS } from "../../../Services/urlService";

const loginUrl = ENDPOINTS.LOGIN;
const passwordResetUrl = ENDPOINTS.RESET_PASSWORD;
const registrationUrl = ENDPOINTS.REGISTER;

const executeLoginRequest = (payload: ILoginRequest): any => {
    console.log("Posting: ", payload);
    return axios.post(loginUrl, payload);
};

const executeResetPasswordRequest = (payload: IPasswordResetRequest): any => {
    console.log("Posting: ", payload);
    return axios.post(passwordResetUrl, payload);
};

const executeRegistrationRequest = (payload: IRegistrationRequest): any => {
    console.log(payload);
    return axios.post(registrationUrl, payload);
};

export function* login(res_payload: any) {
    try {
        const { payload } = res_payload;
        const res = yield call(executeLoginRequest,  payload);
        const err = res.data.error;
        if(err) {
            throw err;
        } else {
            yield put(Actions.LoginSuccess(res));
        }
    } catch(err) {
        yield put(Actions.LoginFailure(err));
    }
}

export function* resetPasswordRequest(res_payload: any) {
    try {
        const { payload } = res_payload;
        const res = yield call(executeResetPasswordRequest, payload);
        console.log(res.data);
        if (isNil(res.data.success)) {
            throw res.body;
        } else {
            yield put(Actions.ResetSuccess());
        }
    } catch(err) {
        yield put(Actions.ResetFailure(err));
    }
}

export function* register(res_payload: any) {
    try {
        const { payload } = res_payload;
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
    yield takeLatest(Actions.RegistrationRequest, register);
}