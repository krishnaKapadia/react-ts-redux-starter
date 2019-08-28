import createActionFactory from 'typescript-fsa';
import { UserPayload, LoginResponse, LoginRequest as ILoginRequest, IRegistrationRequest, RegistrationResponse, IPasswordResetRequest, IValidateResetTokenStatus, IPasswordResetViaEmailRequest } from '../Models';
import { ErrorResponse } from '../../../Utils/Redux/models';

const createAction = createActionFactory('Users');

//  Reset
export const ResetRequest = createAction<IPasswordResetRequest>('LOGIN_RESET_REQUEST');
export const ResetSuccess = createAction('LOGIN_RESET_SUCCESS');
export const ResetFailure = createAction<ErrorResponse>('LOGIN_RESET_FAILURE');

// Check reset token is valid
export const ValidateResetTokenRequest = createAction<{ token: string }>('VALIDATE_RESET_TOKEN_REQUEST');
export const ValidateResetTokenSuccess = createAction<IValidateResetTokenStatus>('VALIDATE_RESET_TOKEN_SUCCESS');
export const ValidateResetTokenFailure = createAction<ErrorResponse>('VALIDATE_RESET_TOKEN_FAILURE');

// Reset password via email
export const ResetPasswordViaEmailRequest = createAction<IPasswordResetViaEmailRequest>('RESET_PASSWORD_VIA_EMAIL_REQUEST');
export const ResetPasswordViaEmailSuccess = createAction('RESET_PASSWORD_VIA_EMAIL_SUCCESS');
export const ResetPasswordViaEmailFailure = createAction<ErrorResponse>('RESET_PASSWORD_VIA_EMAIL_FAILURE');

// Login
export const LoginRequest = createAction<ILoginRequest>('LOGIN_REQUEST');
export const LoginSuccess = createAction<LoginResponse>('LOGIN_SUCCESS');
export const LoginFailure = createAction<ErrorResponse>('LOGIN_FAILURE');

// Logout
export const LogOut = createAction('LOGOUT');

// Register
export const RegistrationRequest = createAction<IRegistrationRequest>("REGISTRATION_REQUEST");
export const RegistrationSuccessful = createAction<RegistrationResponse>("REGISTRATION_SUCCESS");
export const RegistrationFailure = createAction<ErrorResponse>("REGISTRATION_FAILURE");