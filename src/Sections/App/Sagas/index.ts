import * as Actions from '../Actions';
import { takeLatest } from 'redux-saga/effects';

const placeholderSaga = (): any => {
  return "placeholder";
};

export function* AppSagas() {
  yield takeLatest(Actions.placeholderAction, placeholderSaga);
}