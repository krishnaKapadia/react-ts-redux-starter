import React, { Component } from 'react';
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
import { Link } from 'react-router-dom';
import { default as NumberFormat } from 'react-number-format';
import './styles/index.css';
import * as Constants from './constants';
import classnames from 'classnames';
import { isEmpty } from 'lodash';
import { PaymentTabs } from '../../Components/PaymentTabs';

type State = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  selectedCost: string;
  customCost: string;
  selectedPeriod: string;
  step: number;
};

class UnconnectedRegistrationContainer extends Component<{}, State> {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    selectedCost: "$5",
    customCost: "",
    selectedPeriod: "",
    step: 2,
  };

  next = () => {
    this.setState((state) => ({ step: state.step + 1 }));
  }

  previous = () => {
    this.setState((state) => ({ step: state.step - 1 }));
  }

  stepOne = () => {
    return (
      <Form onSubmit={(e: any) => {
        e.preventDefault();

        console.log(this.state);
        this.next();
      }}>
        <FormGroup>
          <Label className="label" for="emailInput">Email</Label>
          <Input
            required
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })}
            // className="input"
            type="email"
            name="emailInput"
          />
        </FormGroup>

        <FormGroup>
          <Label className="label" for="passwordInput" sm={2}>Password</Label>
          <Input
            value={this.state.password}
            onChange={(e) => this.setState({ password: e.target.value })}
            // className="input"
            type="password"
            name="passwordInput"
            required
          />
        </FormGroup>

        <Row>
          <Col>
            <FormGroup>
              <Label className="label" for="firstNameInput">First name</Label>
              <Input
                required
                value={this.state.firstName}
                onChange={(e) => this.setState({ firstName: e.target.value })}
                // className="input"
                type="text"
                name="firstNameInput"
              />
            </FormGroup>
          </Col>

          <Col>
            <FormGroup>
              <Label className="label" for="lastNameInput">Last name</Label>
              <Input
                required
                value={this.state.lastName}
                onChange={(e) => this.setState({ lastName: e.target.value })}
                // className="input"
                type="text"
                name="lastNameInput"
              />
            </FormGroup>
          </Col>
        </Row>

        <Row className="onboarding-footer">
          <Col>
            <Link to="/auth/login">
              <Button color='secondary' outline className={"btn-blue full-width"}>Login</Button>
            </Link>
          </Col>
          <Col md={8}>
            <Button color='primary' type="submit" className={"btn-blue full-width"}>Create Account</Button>
          </Col>
        </Row>

      </Form>
    );
  }

  stepTwo = () => {
    const isActive = classnames("full-width", { 'input--inactive': !isEmpty(this.state.customCost) });

    return (
      <Form onSubmit={(e: any) => {
        e.preventDefault();

        console.log(this.state);
        this.next();
      }}>
        <FormGroup>
          <Label className="label" for="emailInput"><b>HOW MUCH DO YOU WISH TO DONATE?</b></Label>
          <Row>
            {
              Constants.Costs.map((c, idx) => (
                <Col>
                  <Button
                    onClick={() => this.setState({ selectedCost: Constants.Costs[idx].cost, customCost: "" }) }

                    className={
                      classnames("full-width", {
                        'input--inactive': !isEmpty(this.state.customCost),
                        'input--selected': this.state.selectedCost === Constants.Costs[idx].cost
                      })
                    }
                  outline>{c.cost}</Button>
                </Col>
              ))
            }
          </Row>

          <Row style={{ marginTop: '12px' }}>
            <Col md={"12"}>
              <p style={{ textAlign: 'center' }}>OR</p>
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <NumberFormat
                className={classnames({
                  'input--active': !isEmpty(this.state.customCost)
                })}
                thousandSeparator={true}
                prefix={'$'}
                customInput={Input} 
                value={this.state.customCost}
                onChange={(e) => {
                  console.log(e.target.value)
                  this.setState({ customCost: e.target.value, selectedCost: "" })}
                }
                // className="input"
                name="firstNameInput"
                placeholder={"Enter a custom amount, e.g $17.50"}
              />
            </Col>
          </Row>
        </FormGroup>

        

        <FormGroup style={{ marginTop: '40px' }}>
          <Label className="label" for="periodInput"><b>HOW OFTEN DO YOU WANT TO DONATE??</b></Label>
          <Row>
            {
              Constants.Periods.map((p, idx) => (
                <Col>
                  <Button
                    onClick={() => this.setState({ selectedPeriod: Constants.Periods[idx].period })}

                    className={
                      classnames("full-width", {
                        'input--selected': this.state.selectedPeriod === Constants.Periods[idx].period
                      })
                    }
                    outline>{p.period}</Button>
                </Col>
              ))
            }
          </Row>
        </FormGroup>


        <Row className="onboarding-footer">
          <Col>
            <Button onClick={this.previous} color='secondary' outline className={"btn-blue full-width"}>Back</Button>
          </Col>
          <Col md={8}>
            <Button color='primary' type="submit" className={"btn-blue full-width"}>Next</Button>
          </Col>
        </Row>

      </Form>
    );
  }

  stepThree = () => {
    return <h1>Placeholder</h1>;
  }

  stepFour = () => {
    return(
      <Form onSubmit={(e: any) => {
        e.preventDefault();

        console.log(this.state);
        this.next();
      }}>
      
        <PaymentTabs />

        <Row className="onboarding-footer">
          <Col>
            <Link to="/auth/login">
              <Button color='secondary' outline className={"btn-blue full-width"}>Login</Button>
            </Link>
          </Col>
          <Col md={8}>
            <Button color='primary' type="submit" className={"btn-blue full-width"}>Create Account</Button>
          </Col>
        </Row>

      </Form>
    );
  }

  stepDisplayController = (): React.ReactFragment => {
    switch (this.state.step) {
      case 0:
        return this.stepOne();

      case 1:
        return this.stepTwo();
      
      case 2:
        return this.stepFour();

      default:
        return this.stepOne();
    }
  }

  render() {

    return (
      <Container fluid className={"full-height"}>
        <Row className="onboarding-layout full-height">
          <Col sm={12} md={7} lg={5} xl={4}>
            <div className="content">
              <div className="onboarding-header">
                <h2>{ Constants.stepDefinitions[this.state.step].stepTitle }</h2>
              </div>
              
              <div className="onboarding-content">
                {this.stepDisplayController()}
              </div>
              
              {/*
              <Row>
                <Col></Col>
              </Row> */}
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export const RegistrationContainer = UnconnectedRegistrationContainer;