import React, { FunctionComponent, useState } from 'react';
import { Tabs, Tab, withStyles, AppBar } from '@material-ui/core';
import { FaCcVisa, FaCcMastercard, FaCcPaypal } from 'react-icons/fa';
import SwipeableViews from 'react-swipeable-views';
import { CreditCardInput } from '../CreditCard';

const PAYMENT_TABS = [
  {
    name: 'visa',
    icon: FaCcVisa
  },
  {
    name: 'mastercard',
    icon: FaCcMastercard
  }
]

const styles = {
  scroller: {
    paddingBottom: '8px'
  },
  indicator: {
    backgroundColor: '#03BFFE'
  }
};

const TabsFunction = (props: any) => {
  const { classes, children, ...other } = props;

  return (
    <Tabs classes={classes} {...other}>
      {children}
    </Tabs>
  );
};

const StyledTabs = withStyles(styles)(Tabs);

export const PaymentTabs: FunctionComponent = () => {
  const [currentTab, setCurrentTab] = useState(0);
  
  return (
    <>
      <StyledTabs centered value={currentTab} variant="fullWidth" onChange={(_event, value) => setCurrentTab(value)} indicatorColor={"primary"}>
        {
          PAYMENT_TABS.map((t, idx) => <Tab key={idx} icon={<t.icon size={30} color={"#03BFFE"} />} />)
        }
      </StyledTabs>
{/* 
      <SwipeableViews
        style={{ width: '100%' }}
        axis={'x'}
        index={currentTab}
        onChangeIndex={(value) => setCurrentTab(value)}
      > */}
        { currentTab === 0 && <CreditCardInput Icon={PAYMENT_TABS[0].icon} /> }
        { currentTab === 1 && <CreditCardInput Icon={PAYMENT_TABS[1].icon} /> }
      {/* </SwipeableViews> */}
    </>
  );
}