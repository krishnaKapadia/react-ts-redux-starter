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
} from 'reactstrap';

import './styles/index.css';
import { Link } from 'react-router-dom';

class UnconnectedLoginContainer extends Component {
  state = {
    email: "",
    password: ""
  };

  render() {
    return (
      <Container fluid className={"full-height"}>
        <Row className="onboarding-layout full-height">
          <Col sm={6} md={6} lg={4} xl={3}>
            <div className="content">
              <div className="onboarding-header">
                <h2>Login</h2>
              </div>

              <Form onSubmit={(e: any) => {
                e.preventDefault();

                console.log(this.state);
              }}>
                <FormGroup>
                  <Label className="label" for="exampleEmail" sm={2}>Email</Label>
                  <Input
                    required
                    value={this.state.email}
                    onChange={(e) => this.setState({ email: e.target.value })}
                    // className="input"
                    type="email"
                    name="email"
                    id="exampleEmail"
                  />
                </FormGroup>

                <FormGroup>
                  <Label className="label" for="examplePassword" sm={2}>Password</Label>
                  <Input
                    value={this.state.password}
                    onChange={(e) => this.setState({ password: e.target.value })}
                    // className="input"
                    type="password"
                    name="password"
                    required
                  />
                </FormGroup>
              
                <Row className="onboarding-footer">
                  <Col>
                    <Link to="/auth/register">
                      <Button color='secondary' outline className={"btn-blue full-width"}>Register</Button>
                    </Link>
                  </Col>
                  <Col>
                    <Button color='primary' type="submit" className={"btn-blue full-width"}>Login</Button>
                  </Col>
                </Row>

              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export const LoginContainer = UnconnectedLoginContainer;



{/* <Container className={"login-layout"}>
  <Row className={"full-height"}>
    <Col md={12} className={"section login full-height"}>

      <div className="content">
        <Row>
          <Col sm={"12"}>
            <h1 className="title">{title}</h1>
          </Col>
        </Row>

        <div className="loginForm">
          {
            this.renderLogin()
          }
        </div>

      </div>
    </Col>

    <Col md={12} lg={8} className={"section background-purple full-height d-none d-lg-block"} />
  </Row>
</Container> */}