import { UserSectionRoutes } from '../Users/Routes';
import { AppRoutes } from '../App/Routes';

export enum Routes {
    "/register", "/login"
}

export const GlobalRoutes: any[] = [
    [...UserSectionRoutes],
    [...AppRoutes]
];