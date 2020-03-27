import React from 'react';
import { Route } from "react-router-dom";

import * as Views from '../Views';

export const AppRoutes: any[] = [
  <Route key={0} path="/" component={Views.FirstView} />,
];