import React, { Component } from 'react';
import { Text, Grid, Box } from 'grommet';
import { Router } from '../Utils/React-Router';
import { GlobalRoutes } from './Routes/index';
import '../Styles/global.css';

type StateProps = {};

type Props = StateProps;

class App extends Component<Props> {

  render() {
    return (
      <Router routes={GlobalRoutes} />
    );
  }
}

export default App;
