import React, { Component } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { PulseLoader } from 'react-spinners';
import { isNil, isEmpty } from 'lodash';
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

import { IPasswordResetRequest, IValidateResetTokenStatus, IValidateResetTokenResponse, IPasswordResetViaEmailRequest } from '../../Models';

import * as Actions from '../../Actions';
import * as Selectors from '../../Selectors';
import { ErrorText } from '../../../../Components/ErrorText';
import { validateResetToken } from '../../Sagas';

type StateProps = {
	isLoading: boolean;
	hasSucceeded: boolean;
	hasError: boolean;
	isValidatingToken: boolean;
	isTokenValid: boolean;
	getValidationResponse: IValidateResetTokenResponse;
	hasPasswordResetViaEmailSucceeded: boolean;
};

type DispatchProps = {
	requestPasswordReset: (payload: IPasswordResetRequest) => void;
	validateResetToken: (payload: { token: string }) => void;
	resetPasswordViaEmail: (payload: IPasswordResetViaEmailRequest) => void;
};

type PassedProps = {
	match: any;
};

type State = {
	email: string;
	password: string;
	passwordConfirmation: string;
	renderResetForm: boolean;
	passwordValidationError: string;
};

type Props = StateProps & DispatchProps & PassedProps;
class UnconnectedForgotPasswordView extends Component<Props, State> {

	state = {
		email: '',
		password: '',
		passwordConfirmation: '',
		passwordValidationError: '',
		renderResetForm: false
	};

	componentDidMount() {
		const { token } = this.props.match.params;
		if (!isNil(token)) {
			console.log("Token present:", token);
			this.props.validateResetToken(token);
		}
	}

	handleResetSubmission = (e: any) => {
		e.preventDefault();
		
		if(this.props.isTokenValid) {
			// New password update
			if(this.state.password !== this.state.passwordConfirmation) {
				console.log("passwords do not match")
				this.setState({ passwordValidationError: "Passwords do not match!" });
				return;
			} else {
				const payload = { email: this.props.getValidationResponse.email, password: this.state.password };
				// Dispatch change password action
				this.props.resetPasswordViaEmail(payload);
			}
		} else {
			// Request email to be sent
			const { email } = this.state;
			const payload = {
				email
			};
	
			this.props.requestPasswordReset(payload);
		}
	}

	componentWillUpdate() {
		const validationResponse = this.props.getValidationResponse;
		if(!isNil(validationResponse) && isEmpty(this.state.email)) {
			const { email } = validationResponse;
			this.setState({ email });
		}
	}
	
	renderEmailRequestForm = () => {
		return (
			<Form onSubmit={this.handleResetSubmission}>
				{
					this.props.hasSucceeded ?
						<p>A password reset email was sent to {this.state.email}.
						Please follow the instructions to reset your password.
          </p>
						:
						<FormGroup>
							<Label className="label" for="exampleEmail">Please enter the email associated to your account.</Label>
							<Input
								required
								value={this.state.email}
								onChange={(e) => this.setState({ email: e.target.value })}
								className="input"
								type="email"
								name="passwordResetEmail"
								id="passwordResetEmail"
								invalid={this.props.hasError}
							/>
							<ErrorText show={this.props.hasError} error={"That email was not found. Please try again."} />
						</FormGroup>
				}

				<Row>
					<Col sm={'12'} md={this.props.hasSucceeded ? '12' : '6'}>
						<Link to={'/login'}>
							<Button
								className="btn-outline full-width"
								type='button'
								color={this.props.hasSucceeded ? 'primary' : 'secondary'}
								outline={!this.props.hasSucceeded}
							>
								Login
						</Button>
						</Link>
					</Col>

					{
						!this.props.hasSucceeded &&
						<Col sm={'12'} md={'6'}>
							<Button color='primary' className="btn-blue full-width" type="submit">
								{this.props.isLoading ?
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

	renderReset = () => {
		const passwordEntryDisplay = this.props.isTokenValid;

		if(this.props.hasPasswordResetViaEmailSucceeded) {
			return(
				<div>
					<p>Your password has been successfully reset! Please login again.</p>
					<Row>
						<Col sm={'12'}>
							<Link to={'/login'}>
								<Button
									className="btn-outline full-width"
									type='button'
									color={this.props.hasSucceeded ? 'primary' : 'secondary'}
									outline={!this.props.hasSucceeded}
								>
									Login
								</Button>
							</Link>
						</Col>
					</Row>
				</div>
			);
		}

		if(passwordEntryDisplay) {
			const { email } = this.props.getValidationResponse;
			return (
				<Form onSubmit={this.handleResetSubmission}>
					<div>
						<FormGroup>
							<Label xs={12} className="label" for="newPassword">New password</Label>
							<Input
								required
								value={this.state.password}
								onChange={(e) => this.setState({ password: e.target.value })}
								className="input"
								type="password"
								name="password"
								id="password"
								invalid={isEmpty(this.state.passwordValidationError)}
							/>
							<Label xs={12} className="label" for="newPassword">Confirm password</Label>
							<Input
								required
								value={this.state.passwordConfirmation}
								onChange={(e) => this.setState({ passwordConfirmation: e.target.value })}
								className="input"
								type="password"
								name="passwordConfirmation"
								id="passwordConfirmation"
								invalid={isEmpty(this.state.passwordValidationError)}
							/>
							<ErrorText show={this.props.hasError || !isEmpty(this.state.passwordValidationError)} error={"That email was not found. Please try again."} />
						</FormGroup>
					</div>
					
					<Row>
						<Col sm={'12'} md={'6'}>
							<Link to={'/login'}>
								<Button
									className="btn-outline full-width"
									type='button'
									color={'secondary'}
									outline
								>
									Login
						</Button>
							</Link>
						</Col>

						<Col sm={'12'} md={'6'}>
							<Button color='primary' className="btn-blue full-width" type="submit">
								{this.props.isLoading ?
									<PulseLoader size={10} color={'white'} /> :
									'Reset password'
								}
							</Button>
						</Col>
					</Row>
				</Form>
			);
		} else {
			return this.renderEmailRequestForm();
		}
	}

	renderResetRequest() {
		if(this.props.isValidatingToken) {
			return (
				<div className="loginForm">
					<PulseLoader size={10} color={'blue'} />
				</div>
			);
		} else {
			return (
				<>
					<div className="loginForm">
						{
							this.renderReset()
						}
					</div>
				</>
			);
		}
	}

	render() {
		let title = "";

		if (this.props.hasPasswordResetViaEmailSucceeded) {
			title = "Woohoo! Password successfully reset!";
		} else if(this.props.isTokenValid) {
			title = "Reset your password";
		} else {
			title = "Forgot your password?";
		}

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
									<h1 className="title">
										{title}
									</h1>
								</Col>
							</Row>
							<Row>
								<Col sm={"12"}>
									{
										this.props.isTokenValid &&
										<div>
											<p className="title">Welcome back {this.props.getValidationResponse.email}</p>
										</div>
									}
								</Col>
							</Row>
							{
								this.renderResetRequest()
							}
						</div>
					</Col>

					<Col md={12} lg={8} className={"section background-purple full-height d-none d-lg-block"} />
				</Row>
			</Container>
		);
	}
}

export const ForgotPasswordView = connect<StateProps, DispatchProps>(
	(state: any) => ({
		isLoading: Selectors.isPasswordResetLoading(state) || Selectors.isPasswordResetViaEmailLoading(state),
		hasSucceeded: Selectors.hasPasswordResetRequestSucceeded(state) || Selectors.hasPasswordResetViaEmailSucceded(state),
		hasPasswordResetViaEmailSucceeded: Selectors.hasPasswordResetViaEmailSucceded(state),
		hasError: Selectors.hasPasswordResetError(state) || Selectors.hasPasswordResetViaEmailError(state),
		isValidatingToken: Selectors.isValidatingResetToken(state),
		isTokenValid: Selectors.isTokenValid(state),
		getValidationResponse: Selectors.getValidationTokenResponse(state)
	}),
	(dispatch: Dispatch) => ({
		requestPasswordReset: (payload: IPasswordResetRequest) => dispatch(Actions.ResetRequest(payload)),
		validateResetToken: (payload: { token: string }) => dispatch(Actions.ValidateResetTokenRequest(payload)),
		resetPasswordViaEmail: (payload: IPasswordResetViaEmailRequest) => dispatch(Actions.ResetPasswordViaEmailRequest(payload))
	})
)(UnconnectedForgotPasswordView);