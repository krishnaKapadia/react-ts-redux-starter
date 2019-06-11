import React, { FunctionComponent, Component } from 'react';
import RootRef from '@material-ui/core/RootRef';
import './style/index.css';
import { Row, Col, FormGroup, Label, Input } from 'reactstrap';
import { FaCcVisa } from 'react-icons/fa';
import { TextField } from '@material-ui/core';
import Payment from 'payment';

type Props = {
  Icon: any;
};

type State = {
  number: string;
  expiration: string;
  name: string;
  cvv: string;
}

export class CreditCardInput extends Component<Props, State> {
  private numberInput: React.RefObject<HTMLInputElement>;
  private expirationInput: React.RefObject<HTMLInputElement>;
  private cvvInput: React.RefObject<HTMLInputElement>;

  constructor(props: Props) {
    super(props);

    this.numberInput = React.createRef();
    this.expirationInput = React.createRef();
    this.cvvInput = React.createRef();

    this.state = {
      number: ' ',
      expiration: ' ',
      name: ' ',
      cvv: ' '
    };
  }

  componentDidMount() {
    Payment.formatCardNumber(this.numberInput.current);
    Payment.formatCardExpiry(this.expirationInput.current);
    Payment.formatCardCVC(this.cvvInput.current);
  }

  render() {
    const { number, expiration, cvv, name } = this.state;
    const { Icon } = this.props;

    return (
      <div className={"BaseCard"}>
        <Row>
          <Col>
            <p><strong>CARD DETAILS</strong></p>
          </Col>

          <Col>
            <Icon size={30} style={{ float: 'right' }}/>
          </Col>
        </Row>

        <Row>
          <Col md={9}>
            <FormGroup>
              <TextField
                ref={this.numberInput}
                className="full-width"
                label="Card Number"
                value={number}
                onChange={(e) => this.setState({ number: e.target.value} )}
                margin="normal"
              />
            </FormGroup>
          </Col>

          <Col>
            <FormGroup>
              <TextField
                ref={this.expirationInput}
                label="Expiration"
                value={expiration}
                onChange={(e) => this.setState({ expiration: e.target.value })}
                margin="normal"
              />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col md={9}>
            <FormGroup>
              <TextField
                className={"full-width"}
                label="Cardholder Name"
                value={name}
                onChange={(e) => this.setState({ name: e.target.value })}
                margin="normal"
              />
            </FormGroup>
          </Col>

          <Col>
            <FormGroup>
              <TextField
                ref={this.cvvInput}
                label="CVV"
                value={cvv}
                onChange={(e) => this.setState({ cvv: e.target.value })}
                margin="normal"
              />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col className={"margin-none"}>
            <div className="BaseCard-poweredByText float-right">
              <p><small>Powered by Stripe</small></p>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
};