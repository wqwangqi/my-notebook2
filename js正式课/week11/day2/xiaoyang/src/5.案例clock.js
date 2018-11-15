import React from 'react';    
import ReactDOM from 'react-dom';

function tick(){
    // 返回一个虚拟的DOM元素

    let a = new Date().toLocaleString()
    ReactDOM.render(<div>{a}</div>,document.querySelector('#root'))
}
// ReactDOM.render : 可以让视图重新渲染
tick();
setInterval(tick,1000)

// DOM-diff ：先比较虚拟的DOM对象，如果发现有差异，那么浏览器会根据DOM-diff只改变发生变化的那部分