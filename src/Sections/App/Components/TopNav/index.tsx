import React, { FunctionComponent } from 'react';
import { Row, Col } from 'reactstrap';
import { IoIosSearch, IoIosContact, IoIosNotificationsOutline } from 'react-icons/io';
import './styles/style.css';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../Models';
import * as Actions from "../../Actions";

const TopNav: FunctionComponent = () => {
  const searchTerm = useSelector((state: AppState) => state.topLevelSearch);
  const dispatch = useDispatch();

  return (
    <Row className={"topNav-container"}>
      <Col xs={7}>
        <div className={"topNav-searchContainer"}>
          <IoIosSearch />
          <input 
            className={"topNav-searchbar"} 
            onChange={(e) => dispatch(Actions.UPDATE_SearchQuery(e.target.value))}
            value={searchTerm}
            placeholder={"Search..."} 
            type="text" 
            name="search" 
            id="searchBar" 
          />
        </div>
      </Col>

      <Col xs={5}>
        <div className="topNav-buttonContainer">
          <IoIosNotificationsOutline className={"icon"} size={"26px"} style={{ marginRight: '30px' }} />
          <IoIosContact size={"24px"} className="icon" />
        </div>
      </Col>
    </Row>
  );
};

export default TopNav;