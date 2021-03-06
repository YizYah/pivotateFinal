import React from 'react';
import ReactDOM from 'react-dom';
import { NoStackProvider } from '@nostack/no-stack';

import { PLATFORM_ID } from './config';
import App from './App';
import * as serviceWorker from './serviceWorker';

import client from './client';

import TagManager from 'react-gtm-module';

import { Provider } from 'react-redux';
import { Provider as AuthContext } from './context/AuthContext';
import store from './redux/store';
const tagManagerArgs = {
  gtmId: 'GTM-TS3Q48S',
  js: new Date(),
};

TagManager.initialize(tagManagerArgs);

ReactDOM.render(
  <Provider store={store}>
    <AuthContext>
      <NoStackProvider client={client} platformId={PLATFORM_ID}>
        <App />
      </NoStackProvider>
    </AuthContext>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
