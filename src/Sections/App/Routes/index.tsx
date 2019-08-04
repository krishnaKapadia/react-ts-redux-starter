import React from 'react';
import { Route } from "react-router-dom";
import { ReviewPayment } from '../Views/Payment/Review';
import { BrowseCharities } from '../Views/Browse/Charities';
import { CharityProfile } from '../Views/Browse/CharityProfile';

const BrowseRoutes: any[] = [
  <Route key={1} path={'/charities/:name'} exact component={CharityProfile} />,
  <Route key={0} path="/browse" exact component={BrowseCharities} />,
];

const PaymentRoutes: any[] = [
  <Route key={0} path="/reviewDonation" exact component={ReviewPayment} />,
];

export const AppRoutes: any[] = [
  ...BrowseRoutes,
  ...PaymentRoutes,
  <Route key={0} path="/" component={BrowseCharities} />,
];