import React from 'react';
import { Route } from "react-router-dom";
import { BrowseCharities } from '../Views/Browse/Charities';


export const AppRoutes: any[] = [
  <Route path="/browse" exact component={BrowseCharities} />
];