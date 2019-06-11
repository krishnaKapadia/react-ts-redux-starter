import React, { FunctionComponent } from 'react';
import { Row, Col, Button, Form, Input, Label } from 'reactstrap';
import '../../Style/index.css';
import { IOnboardingView, SignUpPayload } from '../../Models';

type Props = {
  progress: (data: Partial<SignUpPayload>) => void;
};

const DataHandler = (e: any, callback: any) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const email = formData.get('email');
  const password = formData.get('password');
  const firstName = formData.get('firstName');
  const lastName = formData.get('lastName');

  const data = {
    email, 
    password, 
    name: {
      firstName,
      lastName
    }
  };

  callback(data);
};

export const GetStartedView: FunctionComponent<Props> = ({ progress }) => {

    return (
      <div className="GetStarted-Container">
        <div className="GetStarted-Card">

          <div className="GetStarted-Header">
            <div className="GetStarted-title">
              <h1>Get Started</h1>
            </div>

            <div className="GetStarted-progress">
              <h1><span>1</span> 2 3</h1>
            </div>
          </div>

          <div className="GetStarted-Body">
            <Form id={"GetStartedForm"} className={"GetStartedForm"} onSubmit={(e) => DataHandler(e, progress)}>

              <div className="formGroup">
                <p>Email</p>
                <Input bsSize="lg" type="email" name="email" id="email" />
              </div>

              <div className="formGroup">
                <p>Password</p>
                <Input bsSize="lg" type="password" name="password" id="password" />
              </div>

              <div className="formGroup-row">
                <div className="formGroup">
                  <p>First name</p>
                  <Input bsSize="lg" type="text" name="firstName" id="firstName" />
                </div>

                <div className="formGroup">
                  <p>Last name</p>
                  <Input bsSize="lg" type="text" name="lastName" id="lastName" />
                </div>
              </div>
                            
            </Form>
          </div>

          <div className="formGroup">
            <Button type="submit" form={"GetStartedForm"} className={"submit-button"}>Next</Button>
          </div>
        </div>
      </div>
    );

}
