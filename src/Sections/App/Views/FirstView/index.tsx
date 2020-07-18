import React, { FunctionComponent, useState } from 'react';
import { Row, Col, Button, Input } from 'reactstrap';
import { connect } from 'react-redux';

import { GlobalState } from '../../../../Global/GlobalReducer';

import { Container, Header, Section } from './components';
import './components/styling.css';

type StateProps = {};

type DispatchProps = {};

type Props = StateProps & DispatchProps;

const UnconnectedFirstView: FunctionComponent<Props> = () => {
  return (
    <Container>
      <Header>Base project</Header>
      <Section color="grey">
        <Row>
          <Col md={6}>
            <h1>Click me</h1>
          </Col>
          <Col md={6}>
            <Button>ME!</Button>
          </Col>
        </Row>
      </Section>
    </Container>
  );
};

export const FirstView = connect<StateProps, DispatchProps, {}, GlobalState>(
  _state => ({}),
  _dispatch => ({})
)(UnconnectedFirstView);
