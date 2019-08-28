import React, { FunctionComponent } from 'react';
import { Router } from '../Utils/React-Router';
import { GlobalRoutes } from './Routes/index';
import '../Styles/global.css';

type Props = {};

const NavigationController: FunctionComponent<Props> = ({}) => {
  return <Router routes={GlobalRoutes} />;
};

export default NavigationController;