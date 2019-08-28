import React, { FunctionComponent, useState } from 'react';
import { StripeProvider, Elements, CardNumberElement, CardExpiryElement, CardCVCElement, injectStripe } from 'react-stripe-elements';
import { Row, Col, Button } from 'reactstrap';
import './index.css';

const Form: FunctionComponent<DispatchProps & any> = ({ postPayment, stripe }) => {
  const [cardHolderName, updateCardHolderName] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const { token } = await stripe.createToken({ name: cardHolderName });

    postPayment(token);
  };

  return (
    <form>
      <Row>
        <Col sm={12}>
          <div>
            <label>Card name</label>
            <input className={"cardForm__input"} onChange={(e: any) => updateCardHolderName(e.target.value)} />
          </div>
        </Col>
      </Row>

      <Row>
        <Col sm={12}>
          <div>
            <label>Card number</label>
            <CardNumberElement className={"cardForm__input"} onChange={(e: any) => console.log(e)} />
          </div>
        </Col>
      </Row>

      <Row>
        <Col sm={12} md={6}>
          <div>
            <label>CVC number</label>
            <CardCVCElement className={"cardForm__input"} onChange={(e: any) => console.log(e)} />
          </div>
        </Col>

        <Col sm={12} md={6}>
          <div>
            <label>Expiration date</label>
            <CardExpiryElement className={"cardForm__input"} onChange={(e: any) => console.log(e)} />
          </div>
        </Col>
      </Row>

      <Row>
        <Col sm={12}>
          <Button onClick={handleSubmit}>Submit</Button>
        </Col>
      </Row>
    </form>
  );
};

const InputForm = injectStripe(Form);


type StateProps = {

};

type DispatchProps = {
  postPayment: (token: string) => void;
};

type Props = StateProps & DispatchProps;
export const CardForm: FunctionComponent<Props> = ({ postPayment }) => (
  <StripeProvider apiKey={"pk_test_8tHvkTGwl4keWzePgMS8mSB9002ScSznJ0"}>
    <Elements>
      <div className="cardForm__container">
        <InputForm postPayment={postPayment} />
      </div>
    </Elements>
  </StripeProvider>
);
