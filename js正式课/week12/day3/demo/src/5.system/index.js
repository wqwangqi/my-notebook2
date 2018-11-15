import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import {HashRouter as Router,Route,Switch,Reairect} from 'react-router-dom';
import Home from './container/Home';
import User from './container/User';
import Profile from './container/Profile';
import Redirect from 'react-router-dom/Redirect';
import App from './container/App';
ReactDOM.render(<Router>
    <App>
        <Switch>
            <Route path='/' exact={true} component={Home}/>
            <Route path='/Profile' component={Profile}/>
            <Route path='/User' component={User}/>
            <Redirect to='/'/>
        </Switch>
    </App>
</Router>,window.root)