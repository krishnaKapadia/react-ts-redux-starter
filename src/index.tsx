import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import 'react-app-polyfill/ie11';

require('typeface-josefin-sans');
require('typeface-open-sans');

import './Styles/_global.css';
import * as ServiceWorker from './Services/serviceWorker';
import 'rsuite/dist/styles/rsuite.min.css';

// Styling
import 'bootstrap/dist/css/bootstrap.min.css';

import './Utils/Theme/global.css';
import './Utils/Theme/colors.css';
import './Utils/Theme/utilities.css';

// Redux
import { createStore } from './Utils/Redux';
import NavigationController from './Sections/Navigation';
import Modal from './Sections/App/Components/Modals/index';

const Redux = createStore();
// Redux.persistor.purge();

ReactDOM.render(
  <ReduxProvider store={Redux.store}>
    {/* <PersistGate loading={null} persistor={Redux.persistor}> */}
      <div style={{ overflow: 'hidden' }}>
        <Modal />
        <NavigationController />
      </div>
    {/* </PersistGate> */}
  </ReduxProvider>
  , document.getElementById('root') as HTMLElement,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
ServiceWorker.unregister();
