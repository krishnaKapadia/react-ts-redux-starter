// @ts-nocheck
import React from 'react';
import { Route } from "react-router-dom";
import { LoginContainer } from "../Views/Login";
import { RegistrationContainer } from '../Views/Register';
import { ForgotPasswordView } from '../Views/ForgotPassword';

const baseUrl = "/auth";

export const UserSectionRoutes: any[] = [
    <Route path={`${baseUrl}/forgotPassword/:token`} component={ForgotPasswordView} />,
    <Route path={`${baseUrl}/forgotPassword`} component={ForgotPasswordView} />,
    <Route path={`${baseUrl}/register`} component={RegistrationContainer}/>,
    <Route path={`${baseUrl}/`} component={LoginContainer} />
];