import axios from 'axios';
import * as Actions from '../Actions';
import { ENDPOINTS } from "../../../Services/urlService";
import { call, put, takeLatest } from 'redux-saga/effects';
import { isNil } from 'lodash';

const charitiesUrl = ENDPOINTS.CHARITIES;
const makePaymentUrl = ENDPOINTS.MAKE_PAYMENT;

const GET_AllCharities = (): any => {
  return axios.get(charitiesUrl);
};

const POST_AddCreditCard = (token: string): any => {
  return axios.post(makePaymentUrl, token);
};

export function* getAllCharities() {
  try {
    const res = yield call(GET_AllCharities);
    const { data } = res;
      yield put(Actions.GET_AllCharitiesSuccess(data));

  } catch (err) {
    console.log("ERROR: ", err);
    yield put(Actions.GET_AllCharitiesFailure(err));
  }
}

export function* makePayment({ token }: any) {
  try {
    const res = yield call(POST_AddCreditCard(token));
    console.log(res);
    //  TODO update the res payload to return a success var.
    const { success } = res;
    yield put(Actions.POST_MakePaymentSuccess({ success }));
  } catch (err) {
    console.log("ERROR: ", err);
    yield put(Actions.POST_MakePaymentFailure(err));
  }
}

export function* AppSagas() {
  yield takeLatest(Actions.GET_AllCharitiesRequest, getAllCharities);
  yield takeLatest(Actions.POST_MakePaymentRequest, makePayment);
}