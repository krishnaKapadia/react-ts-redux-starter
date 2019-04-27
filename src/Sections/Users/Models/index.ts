import { IRequestStatus, InitialRequestState } from "../../../Utils/Redux/models";

export interface ILoginState extends IRequestStatus {
    reset: IRequestStatus;
}

export const InitialLoginState: ILoginState = {
    reset: {
        ...InitialRequestState
    },
    ...InitialRequestState
};

export type UserState = {
    email: string;
    firstName: string;
    lastName: string;
    login: ILoginState;
    registration: IRequestStatus;
};

export type LoginRequest = {
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