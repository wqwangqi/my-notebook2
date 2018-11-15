// 组件：声明方式有两种
// react 元素是组件的基本组成单位
// 第一种：函数声明
// 1.组件的名字首字母必须大写，为了和JSX元素进行区分
// 2.组件中必须返回一个顶级的react元素；多个不行
// 3.组件定义之后可以像react元素一样使用
import React from 'react';
import ReactDOM from 'react-dom';
function Build(props){
    // console.log(props);
    
    // props :接收到组件的行间属性
    return <div>{props.a}{props.v}{props.b}</div>
}
let obj1 = {a:1}
let obj2 = {a:456789,b:4546}
let obj3 = {a:3}
// 在组件传递数据时，可以是属性的方式，也可以采用对象展开的方式进行传递
ReactDOM.render(<div>
    <Build a='1'/>
    <Build {...obj2}/>
    <Build {...obj2} v='hhe'/>
</div>,window.root)
// ReactDOM.render :
// 1.在render执行时，会首先判断当前元素是否是一个组件
// 2.如果是一个组件的话，它会把组件的行间属性打包成一个对象传给当前组件的函数，并且让函数执行
// 3.函数执行会产生一个返回值，把返回值转换成真实的DOM并且插入到根元素中