import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/APP';
import {Provider} from 'react-redux';
import store from './store/index';
import 'bootstrap/dist/css/bootstrap.css';  //引入样式
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
window.root)