import React from 'react';
import ReactDOM from 'react-dom';
import Slider from './component/slider';
import './index.css';
// 在react中，.js或.json可以省略；如果是同级路径，同样./是不可以省略的
// webpack打包的图片路径不支持相对路径，支持绝对路径
let image = [require('./img/1.jpg'),require('./img/2.jpg'),require('./img/3.jpg'),require('./img/1.jpg')]
ReactDOM.render(<Slider img={image}/>,window.root)
