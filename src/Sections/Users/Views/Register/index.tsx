import React, { Component, Fragment } from 'react';
import { History } from 'history';
import {
  Container,
  Row,
  Col,
  FormGroup,
  Input,
  Label,
  Button,
  Form,
} from 'reactstrap';
import { connect } from 'react-redux';
import { PulseLoader } from 'react-spinners';
import { Link } from 'react-router-dom';
import { Dispatch } from 'redux';
import { isNil } from 'lodash';
import './styles/index.css';
import { IRegistrationRequest, UserState } from '../../Models';
import * as Selectors from '../../Selectors';
import * as Actions from '../../Actions';
import { ErrorText } from './../../../../Components/ErrorText/index';

type StateProps = {
  isLoading: boolean;
  error: any;
};

type DispatchProps = {
  register: (payload: IRegistrationRequest) => void;
};

type Props = StateProps & DispatchProps;

type State = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  step: number;
};

class UnconnectedRegistrationContainer extends Component<Props, State> {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    step: 0,
  };

  handleSubmission = (e: any) => {
    e.preventDefault();
    const { email, password, firstName, lastName } = this.state;
    const payload = {
      email, password, firstName, lastName
    };

    this.props.register(payload);
  }

  stepOne = () => {
    const error = !isNil(this.props.error) && this.props.error.message;

    return (
      <>
        <Row>
          <Col>
            <Label className="label subtext">
              <small>1: Details</small>
            </Label>
          </Col>
        </Row> 

        <Form onSubmit={this.next}>
          <FormGroup>
            <Label className="label" for="exampleEmail">Email</Label>
            <Input required value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} className="input" type="email" name="email" id="exampleEmail" placeholder="Email" />
          </FormGroup>
          <FormGroup>
            <Label className="label" for="examplePassword">Password</Label>
            <Input required value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} className="input" type="password" name="password" id="examplePassword" placeholder="Password" />
            <ErrorText show={!isNil(this.props.error)} error={error} />
          </FormGroup>

          <Row>
            <Col sm={'12'} md={'6'}>
              <Link to={"/login"}>
                <Button type='button' outline className="btn-outline full-width">
                  Login
                </Button>
              </Link>
            </Col>

            <Col sm={'12'} md={'6'}>
              <Button type='submit' color="primary" className="btn-blue full-width">
                Next
              </Button>
            </Col>
          </Row>
        </Form>
      </>
    );
  }

  stepTwo = () => {
    const error = !isNil(this.props.error) && this.props.error.message;
    return (
      <>
        <Row>
          <Col>
            <Label className="label subtext">
              <small>2: Contact information</small>
            </Label>
          </Col>
        </Row>

        <Form onSubmit={this.handleSubmission}>
          <FormGroup> 
            <Label className="label">First name</Label>
            <Input required value={this.state.firstName} onChange={(e) => this.setState({ firstName: e.target.value })} className="input" type="text" name="firstName" id="firstName" placeholder="First name" />
          </FormGroup>
          <FormGroup>
            <Label className="label">Last name</Label>
            <Input required value={this.state.lastName} onChange={(e) => this.setState({ lastName: e.target.value })} className="input" type="text" name="lastName" id="lastName" placeholder="Last name" />
            <ErrorText show={!isNil(this.props.error)} error={error} />
          </FormGroup>

          <Row> 
            <Col sm={'12'} md={'6'}>
              <Button type='button' onClick={this.back} outline className="btn-outline full-width">
                Back
              </Button>
            </Col>

            <Col sm={'12'} md={'6'}>
              <Button type='submit' color="primary" className="btn-blue full-width">
                {this.props.isLoading ?
                  <PulseLoader size={10} color={'white'} /> :
                  'Login'
                }
              </Button>
            </Col>
          </Row>
        </Form>
      </>
    );
  }

  stepDisplayController = (): React.ReactFragment => {
    switch (this.state.step) {
      case 0:
        return this.stepOne();

      case 1:
        return this.stepTwo();

      default:
        return this.stepOne();
    }
  }

  next = (e: any) => {
    e.preventDefault();
    this.setState((state) => ({ step: state.step + 1 }));
  }

  back = (e: any) => {
    e.preventDefault();
    this.setState((state) => ({ step: state.step - 1 }));
  }

  render() {

    return (
      <Container className={"login-layout"} fluid>
        <Row className={"full-height"}>
          <Col md={12} lg={4} className={"section login full-height"}>
            <div className="login--title">
              <h1>Give</h1>
            </div>

            <div className="content">
              <Row>
                <Col sm={"12"}>
                  <h1 className="title">Sign up</h1>
                </Col>
              </Row>

              <div className="loginForm">
                {this.stepDisplayController()}
              </div>

              <div className="social">
                <Label className="label semi-bold" for="examplePassword">
                  Social sign up
                </Label>
              </div>

              <Row>
                <Col sm={'4'}>
                  <Button outline className="btn-outline full-width">
                    Facebook
                  </Button>
                </Col>
                <Col sm={'4'}>
                  <Button outline className="btn-outline full-width">
                    Google
                  </Button>
                </Col>
                <Col sm={'4'}>
                  <Button outline className="btn-outline full-width">
                    Linkedin
                  </Button>
                </Col>
              </Row>
            </div>

            <div className="registration-footer">
              <div className="subtitle">
                <p>Progress:
                  <span className="percentage"> {this.state.step === 0 ? '0%' : '50%'}</span>
                </p>
              </div>
              <div className="loadingBar">
                <span className={`step ${this.state.step >= 0 && 'step__active'}`} />
                <span className={`step ${this.state.step >= 1 && 'step__active'}`} />
              </div>
            </div>
          </Col>

          <Col xs={0} md={12} lg={8} className={"section background-green full-height d-none d-lg-block"} />
        </Row>
      </Container>
    );
  }
}

export const RegistrationContainer = connect<StateProps, DispatchProps>(
  (state: any) => ({
    isLoading: Selectors.isRegistrationLoading(state),
    error: Selectors.getRegistrationError(state)
  }),
  (dispatch: Dispatch) => ({
    register: (payload: IRegistrationRequest) => dispatch(Actions.RegistrationRequest(payload)),
  })
)(UnconnectedRegistrationContainer);