import React from 'react';
import reducer from '../store/index'
import store from '../store/index';
export default class Todo extends React.Component{
    constructor(){
        super()
    }
    render(){
        return <div>
            <input type="text"/>
            {store.getState().todo.todo.map((item,index)=>{
                return <li key={index}>{item}</li>
            })}
        </div>
    }
}
