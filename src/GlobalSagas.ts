import { SagaIterator } from 'redux-saga';
import { UserSagas } from './Sections/Users/Sagas';

export default function*(): SagaIterator {
    return UserSagas();
}