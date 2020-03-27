import { all } from 'redux-saga/effects';
import { AppSagas } from '../Sections/App/Sagas';

// TODO this may not be working as expected
export default function*() {
    yield all([
        AppSagas()
    ]);
    
}