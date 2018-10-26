
// node
/* let name = require('./a.js')

console.log(name);   //exports 输出，接收是一个对象

// 如果是module.exports导出，那么导出是什么接收的就是什么 */


// es6
//import {a} from './a.js'

//import * as b from './a.js'   //这个输出出来是一个对象
// export 导出的，我们接收必须用解构赋值的方式{a}
//console.log(a);  //对象

import c from './a.js'
console.log(c());  //函数

