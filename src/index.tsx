import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { RendererProvider as FelaProvider } from 'react-fela';
import { createRenderer } from 'fela';

import 'react-app-polyfill/ie11';

require('typeface-josefin-sans');
require('typeface-open-sans');

import './Styles/_global.css';
import * as ServiceWorker from './Services/serviceWorker';

// Styling
import 'bootstrap/dist/css/bootstrap.min.css';

import './Utils/Theme/global.css';
import './Utils/Theme/colors.css';
import './Utils/Theme/utilities.css';

// Redux
import { createStore } from './Utils/Redux';
import NavigationController from './Sections/Navigation';

const Redux = createStore();

ReactDOM.render(
  <ReduxProvider store={Redux.store}>
    <FelaProvider renderer={createRenderer()}>
      <NavigationController />
    </FelaProvider>
  </ReduxProvider>,
  document.getElementById('root') as HTMLElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
ServiceWorker.unregister();
