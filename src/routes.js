import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Header from './components/header';
import Home from './components/home';
import Login from './components/user/auth';


class Routes extends Component {

    render(){
        return(
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route path="/login" component={Login}/>
                    <Route path="/" component={Home}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Routes