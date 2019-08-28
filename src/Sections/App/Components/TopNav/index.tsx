import React, { FunctionComponent } from 'react';
import { Row, Col } from 'reactstrap';
import { isNil, isEmpty } from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { IoIosSearch, IoIosContact, IoIosNotificationsOutline } from 'react-icons/io';
import { LogOut } from '../../../Users/Actions/index';
import { GlobalState } from '../../../../Global/GlobalReducer';
import { AppState } from '../../Models';
import * as Actions from "../../Actions";
import './styles/style.css';

const TopNav: FunctionComponent = () => {
  const searchTerm = useSelector((state: AppState) => state.topLevelSearch);
  const isLoggedIn = useSelector((state: GlobalState) => {
    return !isNil(state.user.accessToken) && !isEmpty(state.user.accessToken);
  });
  
  const dispatch = useDispatch();
  const logout = () => dispatch(LogOut());
  const updateQuery = (query: string) => dispatch(Actions.UPDATE_SearchQuery(query));

  return (
    <Row className={"topNav-container"}>
      <Col xs={7}>
        <div className={"topNav-searchContainer"}>
          <IoIosSearch />
          <input 
            className={"topNav-searchbar"} 
            onChange={(e) => updateQuery(e.target.value)}
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
          <p className="topNav-text">$5 per/ week</p>
          <IoIosNotificationsOutline className={"icon"} size={"26px"} style={{ marginRight: '30px' }} />
          {
            isLoggedIn ?
              <IoIosContact size={"24px"} className="icon" onClick={logout} /> :
              <Link to={'/auth/login'}>Login</Link>
          }
        </div>
      </Col>
    </Row>
  );
};

export default TopNav;