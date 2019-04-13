import React from 'react';
import { Route } from "react-router-dom";
import LoginContainer from '../Login/index';
import RegistrationContainer from '../Registration/index';

export enum Routes {
    "/register", "/login"
}

const NavigationRoutes: any[] = [
    <Route key={1} path={'/register'} component={RegistrationContainer} />,
    <Route key={0} path={'/'} component={LoginContainer} />
];

export const GlobalRoutes: any[] = [
    [...NavigationRoutes]
];