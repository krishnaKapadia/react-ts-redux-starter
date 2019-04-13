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

import './style.css';
import { Link } from 'react-router-dom';

type StateProps = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  step: number;
};

class RegistrationContainer extends Component<{}, StateProps> {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    step: 0,
  };

  handleSubmission = () => {
    const { email, password, firstName, lastName } = this.state;
    const payload = {
      email, password, firstName, lastName
    };
     
    //  Send payload to authentication service
    console.log(payload);
  }

  stepOne = () => {
    return (
      <>
        <Row>
          <Col>
            <Label className="label subtext" sm={2}>
              <small>1: Details</small>
            </Label>
          </Col>
        </Row>

        <FormGroup>
          <Label className="label" for="exampleEmail" sm={2}>Email</Label>
          <Input value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} className="input" type="email" name="email" id="exampleEmail" placeholder="Email" />
        </FormGroup>
        <FormGroup>
          <Label className="label" for="examplePassword" sm={2}>Password</Label>
          <Input value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} className="input" type="password" name="password" id="examplePassword" placeholder="Password" />
        </FormGroup>

        <Row>
          <Col sm={'12'} md={'6'}>
            <Link to={"/login"}>
              <Button outline className="btn-outline full-width">
                Login
              </Button>
            </Link>
          </Col>

          <Col sm={'12'} md={'6'}>
            <Button onClick={() => this.next()} className="btn-blue full-width">
              Next
            </Button>
          </Col>
        </Row>
      </>
    );
  }

  stepTwo = () => {
    return (
      <>
        <Row>
          <Col>
            <Label className="label subtext">
              <small>2: Contact information</small>
            </Label>
          </Col>
        </Row>

        <FormGroup>
          <Label className="label" sm={3}>First name</Label>
          <Input value={this.state.firstName} onChange={(e) => this.setState({ firstName: e.target.value })} className="input" type="text" name="firstName" id="firstName" placeholder="First name" />
        </FormGroup>
        <FormGroup>
          <Label className="label" sm={3}>Last name</Label>
          <Input value={this.state.lastName} onChange={(e) => this.setState({ lastName: e.target.value })} className="input" type="text" name="lastName" id="lastName" placeholder="Last name" />
        </FormGroup>

        <Row>
          <Col sm={'12'} md={'6'}>
            <Button onClick={() => this.back()} outline className="btn-outline full-width">
              Back
            </Button>
          </Col>

          <Col sm={'12'} md={'6'}>
            <Button onClick={() => this.handleSubmission()} className="btn-blue full-width">
              Submit
            </Button>
          </Col>
        </Row>
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

  next = () => {
    this.setState((state) => ({ step: state.step + 1 }));
  }

  back = () => {
    this.setState((state) => ({ step: state.step - 1 }));
  }

  render() {

    return (
      <Container className={"login-layout"} fluid>
        <Row className={"full-height"}>
          <Col sm={12} md={4} className={"section login full-height"}>
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
              <span className={`step ${this.state.step === 0 && 'step__active'}`} />
              <span className={`step ${this.state.step === 1 && 'step__active'}`} />
            </div>
          </Col>

          <Col xs={0} sm={12} md={8} className={"section background-green full-height"} />
        </Row>
      </Container>
    );
  }
}

export default RegistrationContainer;