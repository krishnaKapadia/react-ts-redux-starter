import React from 'react';
import { Route } from "react-router-dom";
import { UserSectionRoutes } from '../Users/Routes';
import { AppRoutes } from '../App/Routes';
import App from '../App';
import BrowseCharities from './../App/Views/Browse/Charities/index';
import { CharityProfile } from './../App/Views/Browse/CharityProfile/index';

export enum Routes {
    "/register", "/login"
}

const NavigationRoutes: any[] = [
    <Route key={1} path={'/charities/:name'} component={CharityProfile} />,
    <Route key={0} path={'/'} component={BrowseCharities} />
];

export const GlobalRoutes: any[] = [
    [...UserSectionRoutes],
    [...NavigationRoutes]
];