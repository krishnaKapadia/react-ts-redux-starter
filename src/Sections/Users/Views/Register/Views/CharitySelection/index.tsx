import React, { Component } from 'react';
import Container from 'reactstrap/lib/Container';
import Col from 'reactstrap/lib/Col';
import Nav from 'reactstrap/lib/Nav';
import NavItem from 'reactstrap/lib/NavItem';
import { IoIosSearch, IoIosClose } from 'react-icons/io';
import Button from 'reactstrap/lib/Button';
import { FiHeart } from 'react-icons/fi';
import { Card, Row } from 'reactstrap';
import { FaFacebookSquare, FaTwitter, FaChromecast } from 'react-icons/fa';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Charity from './../../../../Components/Charity/index';
import { TiSocialInstagram } from 'react-icons/ti';
import { CharityModule } from '../../../../../App/Components/CharityModule';

type Props = {
  next: () => void;
  previous: () => void;
};

export class CharitySelection extends Component<Props> {

  render() {
    const { next, previous } = this.props;
    const data = {
      name: "SPCA",
      label: "spca",
      desc: "We help animals find happy, healthy homes. Support us so that we can help those in need.",
      donators: 1400,
      totalRaised: "600",
      bannerUrl: "https://images.pexels.com/photos/2331575/pexels-photo-2331575.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    };
    
    return (
      <Container fluid style={{ width: '84%' }}>
        <Row className={"onboarding-navigation"}>
          <Col xs={0} sm={6}>
            <Nav>
              <NavItem className="onboarding-navigation--link__active">Most Popular</NavItem>
              <NavItem>Categories</NavItem>
            </Nav>
          </Col>

          <Col xs={12} sm={6}>
            <Nav style={{ float: 'right' }}>
              {/* <NavItem>Selected: <b>2</b></NavItem> */}
              <NavItem>
                <div className={"topNav-searchContainer"}>
                  <IoIosSearch />
                  <input className={"topNav-searchbar"} placeholder={"Search..."} type="text" name="search" id="searchBar" />
                </div>
              </NavItem>
            </Nav>
          </Col>
        </Row>

        <Row>
          <div style={{ width: '85%', marginLeft: 'auto', marginRight: 'auto' }}>
            <p><small>Found <strong>8</strong> charities</small></p>
          </div>          
        </Row>

        <Row>
          {/* <Col sm={6} md={4} lg={3}>
            <CharityModule data={data} />
          </Col>

          <Col sm={6} md={4} lg={3}>                    
            <CharityModule data={data} />
          </Col>
          
          <Col sm={6} md={4} lg={3}>
            <CharityModule data={data} />
          </Col>
          
          <Col sm={6} md={4} lg={3}>
            <CharityModule data={data} />
          </Col> */}
          {/* <Col>
            <div className="informationContainer">
              <Container>
                <div className={"informationContainer-close-icon clickable"}>
                  <IoIosClose className={"informationContainer-close-icon"} color={"#6c757d"} size={32} />
                </div>

                <Row className="informationContainer-header">
                  <h3>BREAST CANCER SOCIETY</h3>
                </Row>

                <Row style={{ marginBottom: '24px', marginTop: '24px' }}>
                  <Col style={{ marginLeft: 0, paddingLeft: 0 }} md={8}>
                    <img height={'160px'} src="https://images.unsplash.com/photo-1560215704-64a4cba82a67?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1778&q=80" alt="" />
                  </Col>
                  <Col md={4}>
                    <div style={{ display: 'flex', flexDirection: 'column', width: 'fit-content' }}> 
                      <div className="social-links">
                        <p>Social links</p>
                        <div className="social-links-icons">
                          <FaFacebookSquare className={"social-icon"} size={24} />
                          <FaTwitter className={"social-icon"} size={24} />
                          <TiSocialInstagram className={"social-icon"} size={24} />
                          <FaChromecast className={"social-icon"} size={24} />
                        </div>
                      </div>

                      <div className="social-links">
                        <p>Phone number</p>
                        <p><small>0800 12 21 45</small></p>
                      </div>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <div className="section-title">
                    <h5><small>Description</small></h5>
                  </div>
                </Row>

                <Row>
                  <p>Over the past 20 years we've been helping those who are diagnosed with Breast Cancer.
We understand it can be a tough time so we try our best to give support to the strong
women who need it. We are a not-for-profit charitable trust, so the progress we make is
entirely reliant on your generosity.</p>
                  <br/>
                  <p>Fundraisers, donors and volunteers like you are an essential part of what we do. Together, 
we can work towards a future where no one dies from breast cancer.</p>
                </Row>
                
                <Row>
                  <div className="section-title">
                    <h5><small>Live updates</small></h5>
                  </div>
                </Row>

                  <Row>
                    <Col sm={6} md={6} lg={3} style={{ paddingLeft: 0 }}>
                      <Card className={"Card2 Card2-live"}>
                        <div className={"icon--padding-bottom"}>
                          <FaFacebookSquare size={24} />
                        </div>
                        <p><small>Text would go here</small></p>
                      </Card>
                    </Col>

                    <Col sm={6} md={6} lg={3} style={{ paddingLeft: 0 }}>
                      <Card className={"Card2 Card2-live"}>
                        <div className={"icon--padding-bottom"}>
                          <FaTwitter size={24} />
                        </div>
                        <p><small>Text would go df dfsdf sdfsef sef</small></p>
                      </Card>
                    </Col>
                </Row>
                
                <br />

                <Row>
                  <div className="section-title--flex">
                    <h5><small>Latest donations</small></h5>
                    <h5><small>Total donations: <span className="red">2.2K</span></small></h5>
                  </div>
                </Row>

                <Row>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell>First name</TableCell>
                        <TableCell>Time</TableCell>
                      </TableRow>
                    </TableHead>

                    <TableBody>
                      <TableRow key={1}>
                        <TableCell>1</TableCell>
                        <TableCell>Risha</TableCell>
                        <TableCell>10 min ago</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </Row>
                
                <br/>

                <Row>
                  <Col>
                    <Button color='primary' className={"btn-green full-width"}>Select charity</Button>
                  </Col>
                </Row>

              </Container>
            </div>
          </Col> */}
        </Row>

        <Row className="onboarding-footer">
          <Col md={3}>
            <Button color='secondary' onClick={previous} outline className={"btn-blue full-width"}>Back</Button>
          </Col>

          <Col style={{ textAlign: 'center' }}>
            <p>Selected: </p>
          </Col>

          <Col md={3}>
            <Button color='primary' onClick={previous} className={"btn-blue full-width"}>Next</Button>
          </Col>
        </Row>
      </Container>
    );
  }



}




    // const data = {
    //   name: "Breast Cancer Foundation",
    //   label: "Breast Cancer Foundation",
    //   desc: "klmawdklmakwl kmawlkdmawlk mlakwm dklawm lkm kla mlkamw lkamwlkamwdkl malkwmdlk",
    //   donators: 400,
    //   totalRaised: "5600",
    //   bannerUrl: "https://image.shutterstock.com/image-photo/two-young-women-standing-together-450w-438727765.jpg"
    // };

{/* <Row className="gridContainer">
  {/* <div style={{ width: '85%' }}>
              <p><small>Found <strong>8</strong> charities</small></p>
            </div>

            <Row>
              <Col md={12}>
                <div className={"gridContainer"}>
                  <Charity />
                  <Charity />
                  <Charity />
                  <Charity />
                  <Charity />
                  <Charity />
                  <Charity />
                  <Charity />
                  <Charity />
                </div>
              </Col> */}
// </Row>
