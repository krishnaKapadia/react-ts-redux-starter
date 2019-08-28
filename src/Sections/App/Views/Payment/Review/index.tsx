import React, { Component } from 'react';
import { Dispatch } from 'redux';
import { isNil, isEmpty } from 'lodash';
import { connect, DispatchProp } from 'react-redux';
import { Row, Col, Input } from 'reactstrap';
import './styles/index.css';

import { CharityList } from './../../../Components/CharityList/index';
import { GlobalState } from '../../../../../Global/GlobalReducer';
import { ICharity } from '../../../Models';
import { getSelectedCharities } from '../../../Selectors';
import { CardForm } from '../../../Components/CardForm';
import * as Actions from '../../../Actions';


type StateProps = {
  selectedCharities: ICharity[];
};

type DispatchProps = {
  postPayment: (token: string) => void;
};

type PassedProps = {
  history: any;
};

type Props = StateProps & DispatchProps & PassedProps;
class UnconnectedReviewPayment extends Component<Props> {

  componentDidMount() {
    const { selectedCharities } = this.props;

    if (isNil(selectedCharities) || isEmpty(selectedCharities)) {
      this.props.history.push('/browse');
    }
  }

  render() {
    const { selectedCharities, postPayment } = this.props;

    return (
      <div className="paymentContainer">
        <div className="container-header paymentContainer_header">
          <div className="container-header--title">
            <h2 className="paymentContainer_header--title">Review donation</h2>
          </div>
        </div>
  
        <div className="container-body">
  
          <Row>
            <Col md={6}>
              <p><strong>Charities to support</strong></p>
  
              <div className={"review_charityList"}>
                <CharityList history={this.props.history} charities={selectedCharities} />
              </div>
            </Col>
  
            <Col md={6}>
              <div className={"review_paymentDetails"}>
                <p><strong>Payment details</strong></p>
                <CardForm postPayment={postPayment} />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export const ReviewPayment = connect<StateProps>(
  (state: GlobalState) => ({
    selectedCharities: getSelectedCharities(state)
  }),
  (dispatch: Dispatch) => ({
    postPayment: (token: string) => dispatch(Actions.POST_MakePaymentRequest({ token }))
  })
)(UnconnectedReviewPayment);