import React, { FunctionComponent, useEffect } from 'react';
import { Row, Col, Button } from 'reactstrap';
import './style/index.css';
import { ICharity } from '../../Models';
import { isNil, filter, isEmpty } from 'lodash';
import { useDispatch, connect } from 'react-redux';
import { show } from 'redux-modal';
import { Modals } from '../Modals';
import * as Actions from '../../Actions';
import { Dispatch } from 'redux';

type CharityListItemProps = {
  data: ICharity;
  removeSelectedCharity: (charityId: string) => void;
  index: number;
  show: any;
};

export const CharityListItem: FunctionComponent<CharityListItemProps> = ({ removeSelectedCharity, data, index, show }) => {

  return (
    <Col className={"charityList__item"} xs={12} style={{ marginBottom: '24px' }}>
      <Row>
        <Col sm={3}>
          <p className={"charityList__textGroup--header"}><small>Name:</small></p>
          <p className={"charityList__textGroup--text"}>{data.label}</p>
        </Col>

        <Col sm={3}>
          <p className={"charityList__textGroup--header"}><small>Donation:</small></p>
          <p>$0.50 p/w</p>
        </Col>

        <Col sm={4}>
          <p className={"charityList__textGroup--header"}><small>Weekly donation (%):</small></p>
          <p><strong>25%</strong> of weekly balance</p>
        </Col>

        <Col>
          <h3 className={"charityList__item--number"}>#{index}</h3>
        </Col>
      </Row>

      <br />

      <Row>

        <Col sm={3}>
          <p className={"charityList__textGroup--header"}><small>Donation number:</small></p>
          <p className={"charityList__textGroup--text"}>{data._id.substr(0, 8)}</p>
        </Col>

        <Col sm={3}>
          <p className={"charityList__textGroup--header"}><small>Date:</small></p>
          <p className={"charityList__textGroup--text"}>12/7</p>
        </Col>

        <Col sm={6}>
          <div style={{ marginTop: "8px", float: "right" }}>
            <Button className={"charityList__options--remove"} onClick={() => show(() => removeSelectedCharity(data._id))}>Remove</Button>
          </div>
        </Col>
      </Row>
    </Col>
  );
};

type PassedProps = {
  charities: ICharity[];
  history: any;
};

type DispatchProps = {
  show: any;
  updateCharities: (charities: ICharity[]) => void;
};

type Props = PassedProps & DispatchProps;
const UnconnectedCharityList: FunctionComponent<Props> = ({ history, charities, show, updateCharities }) => {
  const removeCharityFromSelected = (id: string) => {
    const selectedCharities = filter(charities, (charity: ICharity) => charity._id !== id);
    updateCharities(selectedCharities);
  };
  
  useEffect(() => {
    if (isNil(charities) || isEmpty(charities)) {
      history.push('/browse');
    }
  });

  return (
    <Row className="charityList">
      {
        !isNil(charities) && charities.map((charity, idx) => 
          <CharityListItem removeSelectedCharity={removeCharityFromSelected} key={charity._id} index={idx + 1} data={charity} show={show} /> 
        )
      }
    </Row>
  );
};

export const CharityList = connect<{}, DispatchProps>(
  null,
  (dispatch: Dispatch) => ({
    updateCharities: (charities: ICharity[]) => dispatch(Actions.UPDATE_selectedCharities(charities)),
    show: (successCallback: any) => dispatch(show(Modals.Remove, { successCallback }))
  })
)(UnconnectedCharityList);