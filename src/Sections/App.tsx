import React, { Component } from 'react';
import LoginContainer from './Login/index';
// import { Row, Col, Grid, FlexboxGrid } from 'rsuite';
import { Text, Grid, Box } from 'grommet';
import { Router } from '../Utils/React-Router';
import { GlobalRoutes } from './Routes/index';

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
