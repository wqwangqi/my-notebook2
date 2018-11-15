import React from 'react';
import {Link} from 'react-router-dom';
// Link : 解析乘以个a标签
export default class NAV extends React.Component{
   constructor(){
      super()
   }
   render(){
      return <div className='container'>
        <div className='row'>
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">
                            人员管理系统
                        </a>     
                    </div>
                    <ul className='nav navbar-nav'>
                        <li><Link to='/'>首页</Link></li>
                        <li><Link to='/user'>用户</Link></li>
                        <li><Link to='/profile'>个人中心</Link></li>
                    </ul>  
                </div>
            </nav>
        </div>
      </div>
   }
}