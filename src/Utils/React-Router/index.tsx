import React, { FunctionComponent } from "react";
import { createBrowserHistory } from "history";
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Chrome } from './../../Sections/App/Components/Chrome/index';

export const History = createBrowserHistory();

type RouterProps = {
  routes: Route[];
  withChrome: boolean;
};

export const Router: FunctionComponent<RouterProps> = ({ routes, withChrome }) => {
  if(withChrome) {
    return (
      <BrowserRouter>
        <Chrome>
          <Switch>
            {routes}
          </Switch>
        </Chrome>
      </BrowserRouter>
    );
  } else {
    return (
      <BrowserRouter>
        <Switch>
          {routes}
        </Switch>
      </BrowserRouter>
    );
  }
};
