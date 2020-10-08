import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Header from './components/header';
import Home from './components/home';
import Login from './components/user/auth';

import { connect } from 'react-redux';
import { autoSignIn } from './store/actions';

class Routes extends Component {

    state = {
        loading:true
    }

    componentDidMount(){
        this.props.dispatch(autoSignIn()).then(()=>{
            this.setState({loading:false})
        })
    }


    app = auth => (
        <BrowserRouter>
            <Header
                auth={auth}
            />
            <Switch>
                <Route path="/login" component={Login}/>
                <Route path="/" component={Home}/>
            </Switch>
        </BrowserRouter>
    )

    render(){
        const {auth} = this.props;
        return !this.state.loading ? this.app(auth):'...loading';
    }
}

const mapStateToProps = state => ({ auth: state.auth });
export default connect(mapStateToProps)(Routes)