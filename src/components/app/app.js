import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import Home from '../home/home';


export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={Home} />                  
                </div>
            </BrowserRouter>
        );
    }
}


