import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Route,Redirect,Switch} from 'react-router-dom';
// 定义三个静态组件
// 切换路由显示不同的组件
let Home = ()=>(<div>Home</div>)
let User = ()=>(<div>User</div>)
let Personal = ()=>(<div>Personal</div>)

// HashRouter,route 这都是一个组件，HashRouter组件是包裹了所有的路由组件
// HashRouter 只能有一个子组件
// Route 代表的是一条路由   ,两个属性：path：代表当前的路径   component：代表此路由对应的组件
// Redirect :重定向组件  ,如果你输入的哈希值不对的话，自动跳转回home页面
// Switch: 只要匹配合适的路径，就不在向下匹配 ，作用：当通过Redirect返回到home页面的话路径相同了，所以在外面包一个Switch
ReactDOM.render(<HashRouter>
    <div>
        {/* 浏览器路由中包含此路径那么就会把其显示出来 */}
        {/* exact: 精确匹配 */}
        <Switch>
            <Route path='/' exact={true} component={Home}/>
            <Route path='/user' exact={true} component={User}/>
            <Route path='/user/personal' component={Personal}/>
            <Redirect to='/'/>
        </Switch>
    </div>
</HashRouter>,window.root)