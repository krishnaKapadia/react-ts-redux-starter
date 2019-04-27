import React from 'react';
import { Route } from "react-router-dom";
import { UserSectionRoutes } from '../Users/Routes';


export enum Routes {
    "/register", "/login"
}

const NavigationRoutes: any[] = [
    // <Route key={1} path={'/register'} component={RegistrationContainer} />,
    // <Route key={0} path={'/'} component={Wrapper} />
];

export const GlobalRoutes: any[] = [
    [...NavigationRoutes],
    [...UserSectionRoutes]
];