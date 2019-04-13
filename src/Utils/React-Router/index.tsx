import React, { FunctionComponent } from "react";
import createBrowserHistory from "history/createBrowserHistory";
import { Route, BrowserRouter, Switch } from 'react-router-dom';

export const History = createBrowserHistory();

type RouterProps = {
    routes: Route[];
};

export const Router: FunctionComponent<RouterProps> = ({ routes }) => (
  <BrowserRouter>
    <Switch>
      {routes}
    </Switch>
  </BrowserRouter>
);