import React, { Component } from 'react';
import './style/index.css';
import { Row, Card } from 'reactstrap';
import { IoIosInformationCircle, IoMdContact, IoMdAddCircleOutline } from 'react-icons/io';
import posed from 'react-pose';


const HoverAnimation = posed.div({
  hoverable: true,
  init: {
    scale: 1,
    rotateZ: 0,
    boxShadow: '0px 0px 0px rgba(0,0,0,0)'
  },
  hover: {
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 0
    },
    scale: 1.1,
    rotateZ: 5,
  },
  
});


class Charity extends Component {
 
  render() {

    return (
      // <HoverAnimation className={"card-animation-wrapper"}>
        <Card className="charity-card">
          <div className="charity-card-header">
            <p><strong>BREAST CANCER SOCIETY NZ</strong></p>
          </div>

          {/* <div className="charity-card-image">
            <img width={"80px"} height={"80px"} src="https://images.unsplash.com/photo-1560215704-64a4cba82a67?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1778&q=80" alt="" />
          </div> */}

          <div className="charity-card-desc">
            <p>This is the description that will be added here. Hopefully the word wrap works properly and it all works well.</p>
            <p>This is the second part of the description here.</p>
          </div>

          <div className="charity-card-footer">
            <div className="charity-card-footer-container">
              <HoverAnimation className={"clickable"}>
                <IoMdAddCircleOutline size={28} color={"#7d5fff"} />
              </HoverAnimation>

              <IoMdContact size={28} color={"#7d5fff"} />
            
              <HoverAnimation className={"clickable"}>
                <IoIosInformationCircle size={28} color={"#7d5fff"} />
              </HoverAnimation>
            </div>
          </div>
        </Card>
      // </HoverAnimation>
    );
  }




}

export default Charity;