import React, { Component } from 'react';
import { Button, UncontrolledButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { IoMdArrowDropdown } from 'react-icons/io';
import './style.css';
import { SortBy } from './constants';

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
    }
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

        </div>

      </div>
    );
  }

}

export default BrowseCharities;