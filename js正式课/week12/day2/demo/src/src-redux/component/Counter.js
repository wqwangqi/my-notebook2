import React from 'react';
import store from '../store/index';
import actions from '../store/action/Counter';
import {connect} from 'react-redux';
// connect  连接    react-redux 需要返回一个连接后的组件
class Counter extends React.Component{
    /* constructor(){
        super()
        this.state=store.getState()//把store中的状态获取到赋值给当前私有状态；
    }
    componentDidMount(){
        store.subscribe(()=>{
            // 每派发一次动作，这是一下当前的最新的状态，从而刷新视图跟store中数据保持一致
            this.setState({num:store.getState().num})
        })
    } */
    add=()=>{
        store.dispatch(actions.add())
    }
    min=()=>{
        store.dispatch(actions.min())
    }
    render(){
        return <div>
            <p>{this.props.num}</p>
            <button onClick={this.add}>+</button>
            <button onClick={this.min}>-</button>
        </div>
    }
}
// connect 是一个高阶函数
// 函数的返回值是一个函数，函数需要传当前的组件
// connect，传两个函数 ：   mapStateToProps      mapDispatchToProps
// 第一个函数的参数state指的是store.getState()
export default connect((state)=>({...state}))(Counter)