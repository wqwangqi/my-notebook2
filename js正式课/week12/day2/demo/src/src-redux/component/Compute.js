import React from 'react';
import store from '../store/index';
export default class Counter extends React.Component{
    /* constructor(){
        super();
        this.state = store.getState()
    }
    componentDidMount(){
        store.subscribe(()=>{
            this.setState({num:store.getState().num})
        })
    } */
    render(){
        return <div>
            {this.state.num%2?'基数':'偶数'}
        </div>
    }
}