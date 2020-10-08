import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Header from './components/header';
import Home from './components/home';


class Routes extends Component {

    render(){
        return(
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route path="/" component={Home}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Routes