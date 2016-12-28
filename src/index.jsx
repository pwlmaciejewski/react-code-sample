/* global document */

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './components/App';
import './styles/index.scss';

const appWrapper = document.createElement('div');
appWrapper.id = 'app-wrapper';
document.body.appendChild(appWrapper);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  appWrapper,
);
