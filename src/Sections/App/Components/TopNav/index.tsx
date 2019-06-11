import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { IoIosSearch, IoIosContact, IoIosNotificationsOutline } from 'react-icons/io';
import './style.css';


type Props = {

};

class TopNav extends Component<Props> {

  render(){
    return (
      
      <Row className={"topNav-container"}>

        <Col md={8}>
          <div className={"topNav-searchContainer"}>
            <IoIosSearch />
            <input className={"topNav-searchbar"} placeholder={"Search..."} type="text" name="search" id="searchBar" />
          </div>
        </Col>

        <Col md={4}>
          <div className="topNav-buttonContainer">
            <IoIosNotificationsOutline className={"icon"} size={"26px"} style={{ marginRight: '30px' }} />
            <IoIosContact size={"24px"} className="icon" />
          </div>
        </Col>
      </Row>

    );
  }


}

export default TopNav;