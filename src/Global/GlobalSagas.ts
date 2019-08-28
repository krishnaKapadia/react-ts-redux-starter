import { UserSagas, login } from '../Sections/Users/Sagas';
import { AppSagas } from '../Sections/App/Sagas';
import { all } from 'redux-saga/effects';

// TODO this may not be working as expected
export default function*() {
    yield all([
        UserSagas(),
        AppSagas()
    ]);
    
}