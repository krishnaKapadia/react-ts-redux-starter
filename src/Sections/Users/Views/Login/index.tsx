import React, { Component } from 'react';
import { History } from 'history';
import {
  Container,
  Row,
  Col,
  FormGroup,
  Input,
  Label,
  Button,
} from 'reactstrap';

import './index.css';
import { Link } from 'react-router-dom';

type PassedProps = {
  history: History
};

type StateProps = {
  email: string;
  password: string;
};

class LoginContainer extends Component<PassedProps, StateProps> {
  state = {
    email: "",
    password: ""
  };

  handleSubmission = () => {
    const { email, password } = this.state;
    const payload = {
      email, password
    };
    //  Send payload to authentication service
    console.log(payload);
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
                  <h1 className="title">Sign in</h1>
                </Col>
              </Row>

              <div className="loginForm">
                <FormGroup>
                  <Label className="label" for="exampleEmail" sm={2}>Email</Label>
                  <Input value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} className="input" type="email" name="email" id="exampleEmail" />
                </FormGroup>
                <FormGroup>
                  <Label className="label" for="examplePassword" sm={2}>Password</Label>
                  <Input
                    value={this.state.password}
                    onChange={(e) => this.setState({ password: e.target.value })}
                    className="input"
                    type="password"
                    name="password"
                  />
                </FormGroup>

                <Row>
                  <Col sm={'12'} md={'6'}>
                    <Link to={"/register"}>
                      <Button outline className="btn-outline full-width">
                        Register
                      </Button>
                    </Link>
                  </Col>

                  <Col sm={'12'} md={'6'}>
                    <Button className="btn-blue full-width">
                      Login
                    </Button>
                  </Col>
                </Row>
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

            <div className="footer">
              <p>Back</p>
            </div>
          </Col>

          <Col xshidden sm={12} md={8} className={"section background-purple full-height"} />
        </Row>
      </Container>
    );
  }
}

export default LoginContainer;