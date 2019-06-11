import React, { Component } from 'react';
import { Row, Col, Button } from 'reactstrap';
import './Style/index.css';
import { GetStartedView } from './Views/GetStarted';
import { DonationDetails } from './Views/DonationDetails';
import { SignUpPayload, EmptySignupPayload } from './Models';

type Props = {

};

type State = {
  currentStep: number;
} & Partial<SignUpPayload>;

export class OnboardingController extends Component<Props, State> {

  constructor(props: Props) {
    super(props);

    this.state = {
      currentStep: 1,
      ...EmptySignupPayload
    };

  }

  handleProgression = (data: Partial<SignUpPayload>) => {

    this.setState((state) => ({ currentStep: state.currentStep + 1, ...data }));
  }

  render() {
    switch(this.state.currentStep){

      case 3:
        console.log(this.state);
        return null;
      
      case 1:
        return <DonationDetails progress={this.handleProgression} />;

      case 2:
      default:
        return <GetStartedView progress={this.handleProgression} />;

    }

  }

}
