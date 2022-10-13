import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from 'redux';

import setStore from '../store';

import Routes from "../router";

const store = setStore(window.__PRELOADED_STATE__);
delete window.__PRELOADED_STATE__;

ReactDom.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
