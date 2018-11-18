import React from 'react';
import { Home } from './components/home/home';
import { NavBar } from './components/navigation/nav';
import { Route, Switch, Redirect } from 'react-router-dom';

export const Routes = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/Home" component={Home} />       
      </Switch>
    </div>
  );
};