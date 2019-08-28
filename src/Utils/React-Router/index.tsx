import React, { FunctionComponent, useEffect } from "react";
import { createBrowserHistory } from "history";
import { Route, BrowserRouter, Switch, withRouter } from 'react-router-dom';
import { Chrome } from './../../Sections/App/Components/Chrome/index';

export const History = createBrowserHistory();

type RouterProps = {
  routes: Route[];
};

const UnconnectedRouter: FunctionComponent<RouterProps> = ({ routes }) => (
  <BrowserRouter>
    <Chrome>
      <Switch>
        {routes}
      </Switch>
    </Chrome>
  </BrowserRouter>
);

export const Router = UnconnectedRouter;