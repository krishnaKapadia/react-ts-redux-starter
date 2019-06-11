import React, { Component } from 'react';
import { Row, Col, Button, UncontrolledButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { IoMdArrowDropdown } from 'react-icons/io';
import './style/style.css';
import { SortBy } from './constants';
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

          <div className="container-header--sort">

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
            {/* <Row>
              {
                Charities.map((item, idx) => 
                  <Col style={{ marginBottom: '24px', flex: '0 0 260px' }} key={idx}>
                    <CharityModule data={item} />
                  </Col>
                )
              }
            </Row> */}
          


          {/* <CharityModule /> */}
        </div>

      </div>
    );
  }

}

export default BrowseCharities;