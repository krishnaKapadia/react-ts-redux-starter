import React, { Component } from 'react';
import { Layout, Models } from './Layout';
import LoginContainer from './Login';

type StateProps = {};

type Props = StateProps;

class App extends Component<Props> {
  render() {
    return (
      <LoginContainer />
    );
  }
}

export default App;
