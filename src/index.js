import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './routes'; // where we are going to specify our routes
import App from './components/app/app';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import homeReducer from './reducers/homeReducer';
import createSagaMiddleware from "redux-saga";
import { watchAgeUp } from "./saga/saga";
import "style.scss";
const sagaMiddleware = createSagaMiddleware();
const store = createStore(homeReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchAgeUp);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

