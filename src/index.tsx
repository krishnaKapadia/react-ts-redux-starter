import React from 'react';
import ReactDOM from 'react-dom';
import { Grommet } from 'grommet';
import 'react-app-polyfill/ie11';

import './Styles/_global.css';
import * as ServiceWorker from './Services/serviceWorker';
import App from './Sections/Dashboard/App';
import { GrommetTheme } from './Styles/theme';

ReactDOM.render(
  <Grommet theme={GrommetTheme}>
    <App />
  </Grommet>,
  document.getElementById('root') as HTMLElement,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
ServiceWorker.unregister();
