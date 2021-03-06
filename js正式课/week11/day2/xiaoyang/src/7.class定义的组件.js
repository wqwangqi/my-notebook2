
import React from 'react';
// 在导入的React中是一个对象，对象中有一个Component属性，属性值是一个函数
import ReactDOM from 'react-dom';

class Fn extends React.Component{
    // 类定义组件：
    // 1.需要继承Component这个类
    // 2.需要在类的原型上添加render方法
    // 3.render函数一定要有return
    // 4.一般返回一个顶级的react元素
    constructor(){
        super();
    }
    render(){
        console.log(this);   //this==>Fn的实例
        // render是通过实例进行调用的
        // this.props.a = 100;
        // props传递过来的属性不能进行修改，react是单项数据流
        return <div>{this.props.a}</div>
    }
}

// 类声明的组件有状态、this、生命周期；

ReactDOM.render(<Fn a='12'/>,window.root);
// render:
// 1.如果判断当前是一个类组件，首先把行间属性打包成一个对象传给这个组件类
// 2.那么会立即创建这个类的实例，new Fn({a:12});constructor执行完成之后，将传进来的数据放到实例props属性上
// 3.通过实例调用原型上的render函数，让其执行
// 4.把render函数的返回值转换成真实的DOM，并且插入到根元素中