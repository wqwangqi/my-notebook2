import React from 'react';
import {NavLink} from 'react-router-dom';
// NavLink
import './index.less'
export default class NAV extends React.Component{
    constructor(){
       super()
    }
    render(){
       return <div className='nav-footer'>
           <NavLink to='/' exact={true}><i className='iconfont icon-xingqiu'></i><span>首页</span></NavLink>
           <NavLink to='/lesson'><i className='iconfont icon-wode_kecheng'></i><span>我的课程</span></NavLink>
           <NavLink to='/profile'><i className='iconfont icon-xiaolian'></i><span>个人中心</span></NavLink>
        </div>
    }
}