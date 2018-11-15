import React from 'react';
import store from '../store/index'
import action from '../store/action/counter'
export default class Counter extends React.Component{
    constructor(){
        super()
        this.state = store.getState().counter
    }
    add=()=>{
        store.dispatch(action.add())
    }
    componentDidMount(){
        store.subscribe(()=>{
            this.setState({num:store.getState().num})
        })
    }
    render(){
        return <div>
            <p>{store.getState().counter.num}</p>
            <button onClick={this.add()}>+</button>
            <button>-</button>
        </div>
    }
}