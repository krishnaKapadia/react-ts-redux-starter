import React, { FunctionComponent } from 'react';
import { Row, Col } from 'reactstrap';
import './styles/style.css';

import TopNav from './../TopNav/index';
import SideNav from '../SideNav';
import { withRouter } from 'react-router';

type Props = {
  children: any;
  history: any;
};

const SIDEBAR_SIZES = {
  md: 3,
  lg: 2,
  xl: 0
};

const UnconnectedChrome: FunctionComponent<Props> = ({ children, history }) => {
  let display = false;
  display = location.pathname.indexOf("auth") === -1;

  history.listen((location: any) => {
    display = location.pathname.indexOf("auth") === -1;
  });

  if(display) {
    return (
      <div className="appContainer">
        <Row>
          {/* <Col md={SIDEBAR_SIZES.md} lg={SIDEBAR_SIZES.lg} xl={SIDEBAR_SIZES.xl} className={"appContainer-logoSection"}>
          <p>Logo here</p>
        </Col> */}

          <Col style={{ minHeight: '64px' }}>
            <TopNav />
          </Col>
        </Row>

        <Row className={'appContainer-content'} style={{ overflowY: 'hidden' }}>
          {/* <Col md={SIDEBAR_SIZES.md} lg={SIDEBAR_SIZES.lg} xl={SIDEBAR_SIZES.xl} style={{ overflow: 'hidden', paddingRight: '0px' }}>
          <SideNav />
        </Col> */}

          {/* #ecf0f1 */}
          <Col style={{ background: 'white' }}>
            <div className="app">
              {children}
            </div>
          </Col>
        </Row>

      </div>
    );
  }

  return(
    <Row className={'appContainer-content'} style={{ overflowY: 'hidden' }}>
      <Col style={{ background: 'white' }}>
        <div className="app">
          {children}
        </div>
      </Col>
    </Row>
  );
};

export const Chrome = withRouter<any>(UnconnectedChrome);