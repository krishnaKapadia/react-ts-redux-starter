export type IRequestStatus = {
    sent: boolean;
    success: boolean;
    failure: object | null;
};

export const InitialRequestState: IRequestStatus = {
    sent: false,
    success: false,
    failure: null
};

export type ErrorResponse = {
    message: string;
};
