import React, { FunctionComponent, useState } from 'react';
import {
  Button,
  Row,
  Col,
  Input,
  Form
} from 'reactstrap';
import '../../Style/index.css';
import { SignUpPayload, Frequency } from '../../Models';

import NumberFormat from 'react-number-format';

type Props = {
  progress: (data: Partial<SignUpPayload>) => void;
};

const Amounts = [
  {
    key: 0,
    value: 5,
  },
  {
    key: 1,
    value: 10,
  },
  {
    key: 2,
    value: 25,
  }
];

const Frequencies = [
  {
    key: 0,
    value: Frequency.Weekly,
  },
  {
    key: 1,
    value: Frequency.Fortnightly,
  },
  {
    key: 2,
    value: Frequency.Monthly,
  }
];

const DataHandler = (e: any, data: Partial<SignUpPayload>, callback: any) => {
  e.preventDefault();

  callback(data);
};

export const DonationDetails: FunctionComponent<Props> = ({ progress }) => {
  const [activeDonation, setActiveDonation] = useState(1);
  const [frequency, setFrequency] = useState(0);
  const [customFieldActive, setCustomFieldActive] = useState(false);

  const payload = {
    amountPerWeek:  customFieldActive ? activeDonation : Amounts[activeDonation].value,
    paymentFrequency: Frequencies[frequency].value
  };

  return (
    <div className="GetStarted-Container">
      <div className="GetStarted-Card">

        <div className="GetStarted-Header">
          <div className="GetStarted-title">
            <h1>Options</h1>
          </div>

          <div className="GetStarted-progress">
            <h1>1 <span>2</span> 3</h1>
          </div>
        </div>

        <div className="GetStarted-Body">
          <Form id={"GetStartedForm"} className={"GetStartedForm"} onSubmit={(e) => DataHandler(e, payload, progress)}>
            <div className="formGroup">
              <p className="fontWeightRegular">I WISH TO DONATE</p>

              <Row>
                {
                  Amounts.map((i, idx) =>
                    <Col key={idx}>
                      <Button onClick={() => { setActiveDonation(i.key); setCustomFieldActive(false); }} className={`GetStarted-Outline-Button ${(i.key === activeDonation && !customFieldActive) && "GetStarted-Outline-Button__active"}`} outline>
                        ${i.value}
                      </Button>
                    </Col>
                  )
                }
              </Row>

              <Row>
                <Col xs={12} style={{ textAlign: 'center' }}>
                  <p className="fontWeightRegular">or</p>
                </Col>
              </Row>

              <Row>
                <Col>
                  <div className="formGroup">
                    <NumberFormat 
                    thousandSeparator
                    placeholder={"$   Enter a custom value"} 
                    className={`outlineInput ${customFieldActive && "outlineInput--active"}`} 
                    customInput={Input} 
                    prefix={'$'} 
                    renderText={value => <div>{value}</div>}
                    onValueChange={(val) => { setCustomFieldActive(true); setActiveDonation(val.floatValue); }}
                    />
                  </div>
                </Col>
              </Row>

              <br />

              <p className="fontWeightRegular">EVERY</p>

              <Row>

                {
                  Frequencies.map((i, idx) =>
                    <Col key={idx}>
                      <Button onClick={() => setFrequency(i.key)} className={`GetStarted-Outline-Button ${i.key === frequency && "GetStarted-Outline-Button__active"}`} outline>
                        {i.value}
                      </Button>
                    </Col>
                  )
                }
              </Row>

            </div>

          </Form>
        </div>

        <div className="formGroup">
          <Button type="submit" form={"GetStartedForm"} className={"submit-button"}>Next</Button>
        </div>
      </div>
    </div>
  )
};