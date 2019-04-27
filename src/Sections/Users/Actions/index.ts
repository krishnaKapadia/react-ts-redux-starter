import createActionFactory from 'typescript-fsa';
import { UserPayload, LoginResponse, LoginRequest as ILoginRequest, IRegistrationRequest, RegistrationResponse, IPasswordResetRequest } from '../Models';
import { ErrorResponse } from '../../../Utils/Redux/models';

const createAction = createActionFactory('Users');

//  Reset
export const ResetRequest = createAction<IPasswordResetRequest>('LOGIN_RESET_REQUEST');
export const ResetSuccess = createAction('LOGIN_RESET_SUCCESS');
export const ResetFailure = createAction<ErrorResponse>('LOGIN_RESET_FAILURE');

// Login
export const LoginRequest = createAction<ILoginRequest>('LOGIN_REQUEST');
export const LoginSuccess = createAction<LoginResponse>('LOGIN_SUCCESS');
export const LoginFailure = createAction<ErrorResponse>('LOGIN_FAILURE');

// Register
export const RegistrationRequest = createAction<IRegistrationRequest>("REGISTRATION_REQUEST");
export const RegistrationSuccessful = createAction<RegistrationResponse>("REGISTRATION_SUCCESS");
export const RegistrationFailure = createAction<ErrorResponse>("REGISTRATION_FAILURE");