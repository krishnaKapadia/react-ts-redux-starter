import React, { FunctionComponent } from 'react';
import { Router } from '../Utils/React-Router';
import { GlobalRoutes } from './Routes/index';
import '../Styles/global.css';

type Props = {};

const NavigationController: FunctionComponent<Props> = ({}) => {
  const url = window.location.pathname;
  const renderChrome = url.indexOf("auth") === -1;

  return <Router routes={GlobalRoutes} withChrome={renderChrome} />;
};

export default NavigationController;