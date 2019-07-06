import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import './styles/style.css';
import { ReactComponentLike } from 'prop-types';
import { IoMdBook } from 'react-icons/io';
import { FiHeart, FiUnlock } from 'react-icons/fi';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

type INavItem = {
  name: string;
  url: string;
  icon: ReactComponentLike
};

const NAVIGATION_ITEMS: INavItem[] = [
  {
    name: "Browse Charities",
    url: "/browse",
    icon: IoMdBook
  },
  {
    name: "My Impact",
    url:"/myimpact",
    icon: FiHeart
  }
];

type Props = {

};

class SideNav extends Component<Props> {

  render() {

    return (
      <div className="sideNav-container">
        <h4>MENU</h4>

        <ListGroup className={"sideNav-list"}>
          {
            NAVIGATION_ITEMS.map((item, idx) => {
              const activeLink = window.location.pathname === item.url;
              const classes = classNames('sideNav-list-item', { 'sideNav-list-item__active': activeLink });

              return (
                <Link to={item.url} key={idx} onClick={() => this.forceUpdate()}>
                  <ListGroupItem className={classes}>
                    <item.icon size={20} className="icon" />
                    {item.name}
                  </ListGroupItem>
                </Link>
              );
            })
          }       
        </ListGroup>

        <div className="sideNav-footer">
          <ListGroupItem className={'sideNav-list-item'}>
            <FiUnlock size={20} className="icon" />
            Logout
          </ListGroupItem>
        </div>
      </div>
    );
  }

}

export default SideNav;