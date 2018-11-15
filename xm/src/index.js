import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router,Route,Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import Find from './container/Find/Find';
import My from './container/My/My';
import Order from './container/Order/Order';
import OutFood from './container/OutFood/OutFood';
import App from './container/App';



ReactDOM.render(
    <Router>
        {/* <Provider store={store}> */}
            <App>
                <Switch>
                    <Route path='/' exact={true} component={OutFood}/>
                    <Route path='/find' component={Find}/>
                    <Route path='/order' component={Order}/>
                    <Route path='/my' component={My}/>
                </Switch>
            </App>
        {/* </Provider> */}
    </Router>
,window.root) 