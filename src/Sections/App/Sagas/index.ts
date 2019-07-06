import axios from 'axios';
import * as Actions from '../Actions';
import { ENDPOINTS } from "../../../Services/urlService";
import { call, put, takeLatest } from 'redux-saga/effects';
import { isNil } from 'lodash';

const charitiesUrl = ENDPOINTS.CHARITIES;

const GET_AllCharities = (): any => {
  return axios.get(charitiesUrl);
}

export function* getAllCharities() {
  try {
    const res = yield call(GET_AllCharities);
    const { data } = res;
    // if(isNil(data.success) || !data.success) {
    //   throw res.data;
    // } else {
      yield put(Actions.GET_AllCharitiesSuccess(data));
    // }

  } catch (err) {
    console.log("ERROR: ", err);
    yield put(Actions.GET_AllCharitiesFailure(err));
  }
}

export function* AppSagas() {
  yield takeLatest(Actions.GET_AllCharitiesRequest, getAllCharities);
}