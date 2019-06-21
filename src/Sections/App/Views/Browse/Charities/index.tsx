import React, { Component } from 'react';
import { Row, Col, Button, UncontrolledButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { IoMdArrowDropdown } from 'react-icons/io';
import './style/style.css';
import { SortBy, Categories } from './constants';
import { Charities } from './constants';
import { CharityModule } from '../../../Components/CharityModule';

type Props = {

};

type State = {
  dropdownOpen: boolean;
};

class BrowseCharities extends Component<Props, State> {

  constructor(props: any) {
    super(props);

    this.state = {
      dropdownOpen: false
    };
  }

  render() {
    return (
      <div className="browseCharitiesContainer">
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
          <Row>
            {
              Charities.map((item) => 
                <Col sm={6} md={4} lg={3}>                    
                  <CharityModule data={item} />
                </Col>
              )
            }
          </Row>
        </div>

      </div>
    );
  }

}

export default BrowseCharities;