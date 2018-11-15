
// 将数组中的每一项循环到每一个li中
// 在react中，经常使用数组的map方法来遍历数据，创建出新的DOM来

import React from 'react';
import ReactDOM from 'react-dom';
let ary = [1,2,3,4,5];
let ul = <ul>
    {ary.map((item,index)=>{
        // item:代表数组的每一项   index：代表每一项对应的索引
        return <li key={index}>{item}</li>
    })}
</ul>
ReactDOM.render(ul,window.root)