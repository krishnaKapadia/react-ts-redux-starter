import React, { FunctionComponent } from 'react';
import { Row, Col } from 'reactstrap';
import './styles/style.css';

import TopNav from './../TopNav/index';
import SideNav from '../SideNav';

type Props = {
  children: any;
};

const SIDEBAR_SIZES = {
  md: 3,
  lg: 2,
  xl: 0
};

export const Chrome: FunctionComponent<Props> = ({ children }) => (
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

      <Col style={{ background: '#ecf0f1' }}>
        <div className="app">
          {children}
        </div>
      </Col>
    </Row>

  </div>
);

