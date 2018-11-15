// function
// function a(){
//     let b = 1;
// }
// class : 定义的组件有this、状态、生命周期
// 在项目工作中，如果当前的元素是静态的，不变的那么一般会是用function的方法定义组件
// 如果当前组件中的元素是由数据渲染出来的，那么一般会采用class的方法定义
// 只有属性或者状态可以导致视图刷新
import React from "react";
import ReactDOM from "react-dom";
class Parent extends React.Component{
    constructor(){
        super()
        // 一般情况下，在constructor中定义状态
        this.state = {a:99}
    }
    add=(count)=>{
        this.setState({a:this.state.a+count})
    }
    render(){
        return <div>
            <button onClick={()=>{this.add(2)}}>+</button>
            <button onClick={this.add.bind(this,3)}>+</button>
            <Child m={this.state.a}/>
        </div>
    }
}
// 一个组件在另一个组件进行使用，那么这个组件就是另一个组件的子组件
class Child extends React.Component{
    constructor(){
        super()
    }
    render(){
        return <div>{this.props.m}</div>
    }
}
ReactDOM.render(<Parent/>,document.querySelector("#root"));

