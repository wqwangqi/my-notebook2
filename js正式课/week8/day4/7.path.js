/* 
path
*/

let path = require('path');
console.log(path.resolve());  //输出的当前文件夹所在的绝对路径

console.log(__dirname);  //所在文件夹的路径【相对c盘的】
console.log(__filename);  //当前文件所在的路径【相对c盘的】

console.log(path.resolve(__dirname,'./8.js'));
