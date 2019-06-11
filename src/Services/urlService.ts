import { DEV_URL } from "../Global/GlobalConfig";

export const ENDPOINTS = {
    LOGIN: `${DEV_URL}/login`,
    REGISTER: `${DEV_URL}/register`,
    RESET_PASSWORD: `${DEV_URL}/forgotPassword`,
    RESET_PASSWORD_TOKEN_VALIDATION: `${DEV_URL}/validatePasswordResetToken`,
    RESET_PASSWORD_WITH_EMAIL: `${DEV_URL}/resetPasswordViaEmail`,
};
