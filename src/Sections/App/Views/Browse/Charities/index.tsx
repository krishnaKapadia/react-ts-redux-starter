import React, { Component } from 'react';
import { Dispatch } from 'redux';
import { isEmpty, find, pull, clamp } from 'lodash';
import { ClipLoader } from 'react-spinners';
import { Row, Col, UncontrolledButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { IoMdArrowDropdown } from 'react-icons/io';
import posed from 'react-pose';
import './style/style.css';

import { GlobalState } from '../../../../../Global/GlobalReducer';
import * as Actions from '../../../Actions';
import { ICharity, AppState } from '../../../Models';
import { getCharities, isGettingCharities, getSearchQuery } from '../../../Selectors';
import { CharityModule } from '../../../Components/CharityModule';
import { SortBy, Categories } from './constants';
import { pipe, interpolate } from '@popmotion/popcorn';
import { OnboardingController } from '../../../../GetStarted';
import { connect } from 'react-redux';

const Box = posed.div({
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 200, damping: 10 }
  }
});

type StateProps = {
  charities: ICharity[];
  isFetching: boolean;
  searchQuery: string;
}

type DispatchProps = {
  fetchCharities: () => void;
}

type Props = StateProps & DispatchProps;

type State = {
  dropdownOpen: boolean;
  selectedCharities: ICharity[];
  displayDonationDetails: boolean;
};

class UnconnectedBrowseCharities extends Component<Props, State> {
  state: State = {
    dropdownOpen: false,
    selectedCharities: [],
    displayDonationDetails: false
  };

  componentDidMount() {
    const { charities } = this.props;

    if(isEmpty(charities)) {
      this.props.fetchCharities();
    }
  }


  charitySelectionHandler = (id: any) => {
    let { selectedCharities } = this.state;
    console.log(id);
    const exists = find(selectedCharities, (c: any) => c === id);
    
    // Improve the efficiency of this method
    if(exists) {
      selectedCharities = pull(selectedCharities, id); 
      console.log("Removed", selectedCharities);
    } else {
      selectedCharities.push(id);
    }
    
    console.log(selectedCharities);

    this.setState({ selectedCharities });
  }

  renderDonationDetails() {
    return <OnboardingController />;
  }

  renderCharities() {
    const { charities, searchQuery } = this.props;

    if(isEmpty(charities)) {
      return <h4>No charities found!</h4>;
    }

    const filteredCharities = charities.filter((c) => c.label.toLocaleLowerCase().includes(searchQuery));

    return filteredCharities.map((item) =>
      <Col key={item._id} sm={6} md={4} lg={3}>
        <CharityModule data={item} selectionHandler={(id: any) => this.charitySelectionHandler(id)} />
      </Col>
    );
  }

  render() {
    const { isFetching } = this.props;
    const { selectedCharities,  } = this.state;
    
    if(this.state.displayDonationDetails) {
      return this.renderDonationDetails();
    }

    return (
      <div className="container">
        <div className="container-header">
          <div className="container-header--title">
            <h2>Charities</h2>
          </div>

          <div className="container-header">
            <UncontrolledButtonDropdown style={{ marginRight: '24px' }}>
              <DropdownToggle className="btn-sort">
                <small>Categories</small>
                <IoMdArrowDropdown color="gray" />
              </DropdownToggle>

              <DropdownMenu>
                {
                  Categories.map((item) => (
                    <DropdownItem href={`#/${item}`}>{item}</DropdownItem>
                  ))
                }
              </DropdownMenu>
            </UncontrolledButtonDropdown>

            <UncontrolledButtonDropdown>
              <DropdownToggle className="btn-sort">
                <small>Most popular</small>
                <IoMdArrowDropdown color="gray" />
              </DropdownToggle>

              <DropdownMenu>
                {
                  SortBy.map((item) => (
                    <DropdownItem href={`#/${item.name}`}>{item.name}</DropdownItem>
                  ))
                }
              </DropdownMenu>
            </UncontrolledButtonDropdown>
          </div>
        </div>

        <div className="container-body">
          {
            isFetching && 
              <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <ClipLoader size={64} loading={isFetching} />
              </div>
          }
          

          <Row>
            {/* {
              Charities.map((item) => 
                <Col sm={6} md={4} lg={3}>                    
                  <CharityModule data={item} />
                </Col>
              )
            } */}

            { this.renderCharities() }
          </Row>
        </div>
        
        <Box className={"floatingContainer floatingContainer--left"} pose={selectedCharities.length > 0 ? 'visible' : 'hidden'} size={100}>
          <p>
              Selected: <strong>{selectedCharities.length}</strong>
          </p>
        </Box>

        <Box className={"floatingContainer floatingContainer--right clickable"} 
          pose={selectedCharities.length > 0 ? 'visible' : 'hidden'}
          size={100}
          onClick={() => this.setState({ displayDonationDetails: true })}
        >
          <p>
            Start donating!
          </p>
        </Box>
      </div>
    );
  }

}

export const BrowseCharities = connect<StateProps, DispatchProps>(
  (state: GlobalState) => ({
    isFetching: isGettingCharities(state),
    charities: getCharities(state),
    searchQuery: getSearchQuery(state)
  }),
  (dispatch: Dispatch) => ({
    fetchCharities: () => dispatch(Actions.GET_AllCharitiesRequest())
  })
)(UnconnectedBrowseCharities);