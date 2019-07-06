import { UserSagas, login } from '../Sections/Users/Sagas';
import { AppSagas } from '../Sections/App/Sagas';

export default function*() {
    yield AppSagas();
    yield UserSagas();
}