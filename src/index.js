import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './routes'; // where we are going to specify our routes
import App from './components/app/app';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import homeReducer from './reducers/homeReducer';
import "style.scss";

const logAction = store => {
  return next => {
    return action => {
      const result = next(action);
      console.log(
        `caught in the middleware ${JSON.stringify(store.getState())}`
      );
      return result;
    };
  };
};
const store = createStore(homeReducer, applyMiddleware(logAction));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

