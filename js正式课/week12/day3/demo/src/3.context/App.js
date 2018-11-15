import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import PropTypes from 'prop-types'
class App extends React.Component{
    constructor(){
        super()
        this.state={color:'red'}
    }
    // 定义上下文类型
    static childContextTypes = {
        color:PropTypes.string,
        setColor:PropTypes.func
    }
    // 获取上下文类型，返回的是对象
    getChildContext(){
        return {color:this.state.color,setColor:this.setColor}
    }
    setColor=()=>{
        this.setState({
            color:'green'
        })
    }
    render(){
        return <div>
            <Header/>
        </div>
    }
}
ReactDOM.render(<App/>,window.root)