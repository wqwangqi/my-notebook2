import React from 'react';
export default class Add extends React.Component{
    constructor(){
      super()
    }
    addUser=()=>{
        let userList = JSON.parse(localStorage.getItem("userList"))||[];
        userList.push({id:Math.random(),user:this.val.value});
        localStorage.setItem('userList',JSON.stringify(userList));
        this.val.value='';

        // push  直接改变当前组件的路由
        // go()   去上一级或者下一级y   1向前  -1向后
        // forword  向前
        // goback  向后  
        // 点击的时候跳到list列表
        this.props.history.push('/user/list')
    }
    render(){
      return <div>
          {/* form-control: 让当前input宽度百分百 */}
         <input type="text" className='form-control' ref={(x)=>{this.val=x}}/>
         <button className='btn' onClick={this.addUser}>添加用户</button>
      </div>
    }
}