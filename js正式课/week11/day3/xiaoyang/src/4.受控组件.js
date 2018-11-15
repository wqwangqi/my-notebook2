import React from 'react';
import ReactDOM from 'react-dom';

class User extends React.Component {
    constructor() {
        super();
        this.state={number:100}
    }
    change=(m,e)=>{// 如果函数有参数的话 ,onChange后面必须是函数并且传参e
        // 受控组件，如果想更改内容必须通过更改状态来影响内容
        console.log(e.target);
        console.log(m)
        console.log(e.target.value);
        // 当时间触发的时候，那么事件对象是存在的，当方法执行完成，那么会被赋默认值null
        // onKeydown:键盘按下获取input框的值 
        // onChange
        // onKeyup: 键盘按下之后改变的值，和onChange一样  
        
        // 受控组件一般针对表单元素

        this.setState({number:e.target.value})

        console.log(e);
    }
    render() {
        // 组件的数据依赖于状态
        return <div> 
            <input type="text" value={this.state.number} onChange={(e)=>{this.change(10,e)}}/>
            {this.state.number}
        </div>
    }
}

ReactDOM.render( <User/>,window.root)