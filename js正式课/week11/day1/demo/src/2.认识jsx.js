// jsx =>  js 和XML的组合，可以在js中编写html元素

import React from "react";
import ReactDOM from "react-dom";
import "./3.index.css"
// render : 是ReactDOM 中的一个函数
// 将<div>123</div>这个元素，放进全局下id名是root 的元素中
// 1.JSX元素不是一个真实的DOM；JSX元素是一个虚拟的DOM元素；是一个对象数据类型
// 2.JSX元素必须被一个闭合的标签包裹起来
// 3.JSX元素中采用{} 进行获取值的操作
// 4.jsx 元素取值时，{}中不能放对象；但是可以放数组，如果放的是数组的话，会把数组每一项转换成字符串进行连接，一起放到元素中
// 5.如果小括号中的值是true\false\null\undefined，那么这些值将不再显示
// 6.JSX中的{}  支持三元表达式；同时支持函数的执行结果
// 7.style 不支持字符串的类型，需要转化成{{}}
// 8.如果是class===>className    for===>htmlfor



let zfpx = 201808;
// let a = <div>123<div>{zfpx}</div></div>
let obj = {a:'大家好'}
// let a = <div>123<div>{obj}</div></div>    //报错
//let a = <div>123<div>{obj.a}</div></div>
let ary = [1,2,3,4,'aaa']
//let a = <div>123<div>{ary}</div></div>

//let a = <div>123<div>{false}</div></div>
function b (){
    return <div>123456789</div>
}
//let a = <div style={{width:"100px",color:'green'}} className="container">123<div>{b()}</div></div>
let a = <div className="container">123<div>{b()}</div></div>
console.log(a);   //是一个对象

// render 方法
// 1. 参数一是一个虚拟的DOM元素；参数二是一个将要挂载的元素
// 2. render方法是将虚拟的DOM元素先转换成真实的DOM元素
// 3. 然后将真实的DOM元素注入到root根元素中
ReactDOM.render(a,document.getElementById('root'))