import React, { FunctionComponent, useState } from 'react';
import { Row, Col, Button, Input } from 'reactstrap';
import { connect } from 'react-redux';

import { GlobalState } from '../../../../Global/GlobalReducer';
import img from '../../../../Assets/Images/woman-tree.svg';

import { Container, Header, Section, H4, CharityBox, P } from './components';
import { Steps } from './step';
import { SignUpInfo } from './models';
import { FrequencyForm } from './subviews/FrequencyForm';

type State = {
  
};

type StateProps = {
  
};

type DispatchProps = {
  
};

type Props = StateProps & DispatchProps;

const UnconnectedFirstView: FunctionComponent<Props> = () => {
  const [isDropdownOpen, openDropdown] = useState();
  const [currentStep, setCurrentStep] = useState<number>(1);

  const [selected, setSelected] = useState(false);

  // Info
  const [info, updateInfo] = useState<SignUpInfo>({ frequency: null });

  const next = () => setCurrentStep(currentStep + 1);

  return (
    <Container>
      <Header>Lend a hand</Header>

      <Row style={{ height: '100%', margin: '8px' }}>
        <Col>
          <Section>
            <div style={{ width: '100%', maxWidth: '480px' }}>
              <Steps currentStep={currentStep} goTo={(i: number) => setCurrentStep(i)} />

              {currentStep === 2 && (
                <FrequencyForm updateInfo={updateInfo} info={info} next={next} />
              )}

              <H4 style={{ marginTop: '16px', marginBottom: '16px' }}>Select your charities</H4>

              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <Input placeholder="Search..." />
                <Button
                  style={{ paddingLeft: '16px !important', paddingRight: '16px !important' }}
                  color="primary"
                >
                  Next
                </Button>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
                <P>4 charities found</P>
                <P>Selected: 2</P>  
              </div>

              <br/>

              <CharityBox />
              <CharityBox />
              <CharityBox />
            </div>
          </Section>
        </Col>

        <Col>
          <Section color="white">
            <img
              className="bannerImg"
              style={{ height: '50vh', minHeight: '300px' }}
              src={img}
              alt="Woman watering tree"
            />
          </Section>
        </Col>
      </Row>

      <Header />
    </Container>
  );
}

export const FirstView = connect<StateProps, DispatchProps, {}, GlobalState>(
  _state => ({}),
  _dispatch => ({})
)(UnconnectedFirstView);