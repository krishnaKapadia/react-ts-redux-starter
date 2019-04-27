import React from 'react';
import { Route } from "react-router-dom";
import { LoginContainer } from "../Views/Login";
import { RegistrationContainer } from '../Views/Register';

export const UserSectionRoutes: any[] = [
    <Route key={1} path={"/register"} component={RegistrationContainer}/>,
    <Route key={0} path={'/'} component={LoginContainer} />
];