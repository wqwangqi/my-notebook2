import React from 'react';
import ReactDOM from 'react-dom';
import Slider from './component/slider';
import './index.css';
let img = [require('./img/1.jpg'),require('./img/2.jpg'),require('./img/3.jpg'),require('./img/1.jpg')]
ReactDOM.render(<Slider imgs={img}/>,window.root)