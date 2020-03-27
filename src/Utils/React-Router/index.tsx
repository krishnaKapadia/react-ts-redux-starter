import React, { FunctionComponent } from "react";
import { createBrowserHistory } from "history";
import { Route, BrowserRouter, Switch } from 'react-router-dom';

export const History = createBrowserHistory();

type RouterProps = {
  routes: Route[];
};

const UnconnectedRouter: FunctionComponent<RouterProps> = ({ routes }) => (
  <BrowserRouter>
      <Switch>
        {routes}
      </Switch>
  </BrowserRouter>
);

export const Router = UnconnectedRouter;