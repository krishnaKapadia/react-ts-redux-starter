import { IRequestStatus, InitialRequestState } from "../../../Utils/Redux/models";
import { Omit } from "lodash";

export type UserState = {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    accessToken: string;
    login: ILoginState;
    registration: IRequestStatus;
};

export type LoginRequest = {
    email: string;
    password: string;
};

export type IPasswordResetViaEmailRequest = {
    email: string;
    password: string;
};

export type IPasswordResetRequest = {
    email: string;
}

export interface UserPayload extends UserState {
    timeStamp: Date;
}

export type LoginResponse = {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    accessToken: string;
};

export type IRegistrationRequest = {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
};

export type RegistrationResponse = {
    email: string;
    firstName: string;
    lastName: string;
    accessToken: string;
};

export type IValidateResetTokenResponse = {
    email: string;
    message: string;
    success: boolean;
}

export type IValidateResetTokenStatus = Omit<IRequestStatus, 'success'> & {
    success: IValidateResetTokenResponse | null
};

export const InitialValidateResetState: IValidateResetTokenStatus = {
    ...InitialRequestState,
    success: null
};

export const PasswordResetViaEmail: IPasswordResetViaEmailRequest = {
    email: '',
    password: ''
};


export interface ILoginState extends IRequestStatus {
    reset: IRequestStatus;
    resetViaEmail: IRequestStatus;
    validateResetToken: IValidateResetTokenStatus;
}

export const InitialLoginState: ILoginState = {
    reset: {
        ...InitialRequestState
    },
    resetViaEmail: {
        ...InitialRequestState
    },
    validateResetToken: {
        ...InitialValidateResetState
    },
    ...InitialRequestState
};
