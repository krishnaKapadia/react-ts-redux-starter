import React, { FunctionComponent, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Button } from 'reactstrap';
import './style/index.css';
import { ICharity } from '../../../Models';
import { FaArrowLeft, FaRegHeart, FaFireAlt, FaGraduationCap } from 'react-icons/fa';
import { Tab, Tabs } from '@material-ui/core';

type Props = ICharity;

// Eventually this page would make a seperate request that gets the charity's information
// to reduce the load time of the initial browse page due to the response being smaller
// and the query being smaller.

export const CharityProfile: FunctionComponent<any> = (props) => {
  const { name, desc } = props.location.state;
  const [value, setValue] = useState(1);
  const imageUrl = "url(https://images.unsplash.com/photo-1560145836-d22431066353?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80)";

  const imgCardStyle = {
    backgroundImage: imageUrl,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  };

  return (
    <div className="container">
      <Row className="container-header">
        <Col xs={12} md={10} className="container-header--title container-header--title--no-margin">
          <Link className="container-header--back-button" to={"/charities"}>
            <FaArrowLeft size={20} />
          </Link>
          <h2 className={"no-margin"}>Breast cancer society</h2>
        </Col>

        <Col xs={12} md={2}>
          <Button color={"primary"} className={"full-width "}>Donate</Button>
        </Col>
      </Row>

      <Row className={"container-header-navigation"}>
        <Col md={12}>
          <Tabs value={value} indicatorColor={"#48DBFB"} textColor={"primary"} onChange={(_e, value) => setValue(value)}>
            <Tab label={"Overview"} />
            <Tab label={"Goals"} />
            <Tab label={"Events"} />
            <Tab label={"History"} />
          </Tabs>
        </Col>
      </Row>

      <div className="container-body">
        <Row>
          <Col sm={12}>
            <Card className={"profile-card"}>
              <div className="profile-card__body">
                <div className={"profile-card__title"}>
                  <h5>Mission statement</h5>
                </div>

                <div className="profile-card__description">
                  <p className={"no-margin"}>We are New Zealand's oldest and largest animal welfare charity, with 38 animal centres across the country. We believe that all animal lives matter in our communities.</p>
                </div>
              </div>
            </Card>
          </Col>
        </Row>

        <br />
        <br />

        <Row>
          <Col md={4}>
            <Card className={"profile-card"}>
              <div className="profile-card__body">
                <div className={"profile-card__title text-center"}>
                  <h5>Our Vision</h5>
                </div>

                <div className="profile-card__icon">
                  <FaRegHeart color={"#ff9f43"} size={32} />
                </div>

                <div className="profile-card__description">
                  <p className={"no-margin text-center"}>All animal lives matter in our communities.</p>
                </div>
              </div>
            </Card>
          </Col>

          <Col md={4}>
            <Card className={"profile-card"}>
              <div className="profile-card__body">
                <div className={"profile-card__title text-center"}>
                  <h5>Our Purpose</h5>
                </div>

                <div className="profile-card__icon">
                  <FaFireAlt color={"#ff9f43"} size={32} />
                </div>

                <div className="profile-card__description">
                  <p className={"no-margin text-center"}>All animal lives matter in our communities.</p>
                </div>
              </div>
            </Card>
          </Col>

          <Col md={4}>
            <Card className={"profile-card"}>
              <div className="profile-card__body">
                <div className={"profile-card__title text-center"}>
                  <h5>Our Values</h5>
                </div>

                <div className="profile-card__icon">
                  <FaGraduationCap color={"#ff9f43"} size={32} />
                </div>

                <div className="profile-card__description">
                  <p className={"no-margin text-center"}>All animal lives matter in our communities.</p>
                </div>
              </div>
            </Card>
          </Col>
        </Row>

        <br/>
        <br/>

        <Row>
          <Col md={6}>
            <Card className={"profile-card"}>
              <div className="profile-card__body">
                <div className={"profile-card__title text-center"}>
                  <h5>Bio</h5>
                </div>

                <div className="profile-card__description">
                  <p className={"no-margin"}>Arr swing the lead log piracy lugsail bilged on her anchor Sea Legs topgallant dead men tell no tales red ensign. Chain Shot league nipperkin Davy Jones' Locker fire ship scurvy flogging hearties strike colors weigh anchor. Overhaul haul wind rigging hempen halter gabion quarter grog blossom gangway clap of thunder dead men tell no tales.</p>
                </div>
              </div>
            </Card>
          </Col>

          <Col md={6}>
            <Card className={"profile-card"} style={imgCardStyle}>
              
            </Card>
          </Col>
        </Row>
      </div>

    </div>
  );
}