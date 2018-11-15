import React from 'react';
import img from '../../images/profile.png';
import './index.less';
import {Link} from 'react-router-dom';
export default class Register extends React.Component{
    constructor(){
        super()
    }
    render(){
        return <div className='login'>
           <div className='login-header'>
                <i className='iconfont icon-fanhui'></i>
                注册
           </div>
           <div className='login-photo'>
               <img src={img} alt=""/>
           </div>
           <ul className='form'>
                <li><input type="text" placeholder='请输入新用户名'/></li>
                <li><input type="password" placeholder='请输入新密码'/></li>
                <li><input type="password" placeholder='请确认新密码'/></li>
                <li className='gogogo'><Link to='/login'>前往登录</Link></li>
                <li><button>注册</button></li>
           </ul>
        </div>
    }
}