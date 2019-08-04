// @ts-nocheck
import React from 'react';
import { Route } from "react-router-dom";
import { LoginContainer } from "../Views/Login";
import { RegistrationContainer } from '../Views/Register';
import { ForgotPasswordView } from '../Views/ForgotPassword';
import { GetStartedView } from '../../GetStarted/Views/GetStarted';
import { OnboardingController } from '../../GetStarted';

const baseUrl = "/auth";

export const UserSectionRoutes: any[] = [
    // tslint:disable-next-line: jsx-key
    <Route path={`${baseUrl}/v2/getStarted`} component={OnboardingController} />,

    <Route path={`${baseUrl}/forgotPassword/:token`} component={ForgotPasswordView} />,
    <Route path={`${baseUrl}/forgotPassword`} component={ForgotPasswordView} />,
    <Route path={`${baseUrl}/register`} component={RegistrationContainer}/>,
    <Route path={`${baseUrl}/`} component={LoginContainer} />
];