import { SagaIterator } from 'redux-saga';
import { UserSagas, login } from './Sections/Users/Sagas';
import { takeLatest } from 'redux-saga/effects';
import * as Actions from './Sections/Users/Actions';

export default function*() {
    yield UserSagas();
}