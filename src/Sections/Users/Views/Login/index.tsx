import React, { Component } from 'react';
import { History as IHistory } from 'history';
import {
  Container,
  Row,
  Col,
  FormGroup,
  Input,
  Label,
  Button,
  Form,
  FormFeedback,
  FormText
} from 'reactstrap';

import './styles/index.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PulseLoader } from 'react-spinners';

import { LoginRequest, UserState, IPasswordResetRequest } from '../../Models';
import { Dispatch } from 'redux';
import * as Actions from '../../Actions';
import { History } from './../../../../Utils/React-Router/index';
import * as Selectors from './../../Selectors/index';
import { GlobalState } from '../../../../GlobalReducer';
import { Select } from 'grommet/es6';
import { ErrorText } from '../../../../Components/ErrorText';

type PassedProps = {
  history: IHistory
};

type State = {
  email: string;
  password: string;
  renderPasswordReset: boolean;
  passwordResetEmail: string;
};

type StateProps = {
  hasLoginError: boolean;
  hasResetError: boolean;
  isLoading: boolean;
  isPasswordResetLoading: boolean;
  passwordResetSuccess: boolean;
};

type DispatchProps = {
  login: (payload: LoginRequest) => void;
  requestPasswordReset: (payload: IPasswordResetRequest) => void;
};

type Props = PassedProps & StateProps & DispatchProps;

class UnconnectedLoginContainer extends Component<Props, State> {
  state = {
    email: "",
    password: "",
    renderPasswordReset: false,
    passwordResetEmail: "",
  };

  handleSubmission = (e: any) => {
    e.preventDefault();

    const { email, password } = this.state;
    const payload = {
      email, password
    };

    this.props.login(payload);
  }

  handleResetSubmission = (e: any) => {
    e.preventDefault();

    const { passwordResetEmail } = this.state;
    const payload = {
      email: passwordResetEmail
    };

    this.props.requestPasswordReset(payload);
  }
  
  renderPasswordReset = () => {
    return (
      <Form onSubmit={this.handleResetSubmission}>
        {
          this.props.passwordResetSuccess ?
          <p>A password reset email was sent to {this.state.passwordResetEmail}. 
          Please follow the instructions to reset your password.
          </p>
          :
          <FormGroup>
            <Label className="label" for="exampleEmail" sm={2}>Email</Label>
            <Input
              required
              value={this.state.passwordResetEmail}
              onChange={(e) => this.setState({ passwordResetEmail: e.target.value })}
              className="input"
              type="email"
              name="passwordResetEmail"
              id="passwordResetEmail"
              invalid={this.props.hasResetError}
            />
            <ErrorText show={this.props.hasResetError} error={"That email was not found. Please try again."} />
          </FormGroup>
        }

        <Row>
          <Col sm={'12'} md={this.props.passwordResetSuccess ? '12' : '6'}>
            <Button 
              onClick={() => this.setState({ renderPasswordReset: false })} 
              className="btn-outline full-width"
              type='button'
              color={this.props.passwordResetSuccess ? 'primary': 'secondary'}
              outline={!this.props.passwordResetSuccess}
            >
              Login
            </Button>
          </Col>

                  
          {
            !this.props.passwordResetSuccess &&
            <Col sm={'12'} md={'6'}>
              <Button color='primary' className="btn-blue full-width" type="submit">
                {this.props.isPasswordResetLoading ?
                  <PulseLoader size={10} color={'white'} /> :
                  'Reset password'
                }
              </Button>
            </Col>
          }  
         
        </Row>
      </Form>
    );
  }

  renderLogin = () => {
    return (
      <Form onSubmit={this.handleSubmission}>
        <FormGroup>
          <Label className="label" for="exampleEmail" sm={2}>Email</Label>
          <Input
            required
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })}
            className="input"
            type="email"
            name="email"
            id="exampleEmail"
            invalid={this.props.hasLoginError}
          />
        </FormGroup>
        <FormGroup>
          <Label className="label" for="examplePassword" sm={2}>Password</Label>
          <Input
            value={this.state.password}
            onChange={(e) => this.setState({ password: e.target.value })}
            className="input"
            type="password"
            name="password"
            required
            invalid={this.props.hasLoginError}
          />
          <ErrorText show={this.props.hasLoginError} error={"That email/password combination is incorrect. Please try again."} />
        </FormGroup>

        <Row style={{ marginBottom: '12px' }}>
          <Col sm={'12'}>
            <p className="textLink" onClick={() => this.setState({ renderPasswordReset: true })}>
              Forgot password?
            </p>
          </Col>
        </Row>

        <Row>
          <Col sm={'12'} md={'6'}>
            <Link to={"/register"}>
              <Button type='button' outline className="btn-outline full-width">
                Register
              </Button>
            </Link>
          </Col>

          <Col sm={'12'} md={'6'}>
            <Button color='primary' className="btn-blue full-width" type="submit">
              {this.props.isLoading ?
                <PulseLoader size={10} color={'white'} /> :
                'Login'
              }
            </Button>
          </Col>
        </Row>
      </Form>

    );
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
                  <h1 className="title">Sign in</h1>
                </Col>
              </Row>

              <div className="loginForm">
                {
                  this.state.renderPasswordReset ?
                    this.renderPasswordReset() :
                    this.renderLogin()
                }
              </div>

              <div className="social">
                <Label className="label semi-bold" for="examplePassword">
                  Social sign in
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
          </Col>

          <Col md={12} lg={8} className={"section background-purple full-height d-none d-lg-block"} />
        </Row>
      </Container>
    );
  }
}

export const LoginContainer = connect<StateProps, DispatchProps>(
  (state: any) => ({
    hasResetError: Selectors.hasPasswordResetError(state),
    hasLoginError: Selectors.hasLoginError(state),
    isLoading: Selectors.isLoginLoading(state),
    isPasswordResetLoading: Selectors.isPasswordResetLoading(state),
    passwordResetSuccess: Selectors.hasPasswordResetRequestSucceeded(state)
  }),
  (dispatch: Dispatch) => ({
    login: (payload: LoginRequest) => dispatch(Actions.LoginRequest(payload)),
    requestPasswordReset: (payload: IPasswordResetRequest) => dispatch(Actions.ResetRequest(payload))
  })
)(UnconnectedLoginContainer);