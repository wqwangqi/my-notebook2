import React from 'react';
import {NavLink} from 'react-router-dom';
import './NAV.less';
export default class NAV extends React.Component{
    constructor(){
        super()
    }
    render(){
        return <div className='nav-footer'>
           <NavLink to='/'><i className='iconfont icon-E'></i><span>外卖</span></NavLink>
           <NavLink to='/Find'><i className='iconfont icon-faxian'></i><span>发现</span></NavLink>
           <NavLink to='/Order'><i className='iconfont icon-dingdan'></i><span>订单</span></NavLink>
           <NavLink to='/My'><i className='iconfont icon-My'></i><span>我的</span></NavLink>
        </div>
    }
}