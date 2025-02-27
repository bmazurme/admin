/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import ErrorBoundaryWrapper from './components/error-boundary';

import App from './app';
import { store } from './store';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ErrorBoundaryWrapper>
        <App />
      </ErrorBoundaryWrapper>
    </BrowserRouter>
  </Provider>,
);
