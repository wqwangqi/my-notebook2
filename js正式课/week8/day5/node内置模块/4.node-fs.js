

let fs = require('fs');

/* 
    fs :文件系统  【同步异步之分】
    fs.mkdir(路径,回调函数)  //创建文件夹
    fs.readdir(路径,回调函数)  //读取文件的目录
    fs.readFile(路径,读取格式,回调函数)  //读取文件的内容 【fs.readFileSync()  //同步写入】
    fs.writeFile(路径,写入的内容,写入的格式,回调函数)  //有文件的话覆盖，没有文件就创建文件【fs.writeFileSync()  //同步写入】
    fs.appendFile(路径,追加的内容,写入的格式,回调函数)  //在当前文件内容后追加的内容 【fs.appendFileSync()  //同步写入】
    fs.copyFile(路径1,路径2【目的路径】,回调函数)  //拷贝文件
    fs.unlink(路径,回调函数)   //删除文件
*/

// fs.mkdir('./testDir',err=>{
//     if(err){
//         console.log(err);
//         return
//     }
//     console.log('ok');
// })

// 参数1的路径相对于当前文件
// 回调函数可以忽略不写
// 同步创建，如果没有创建完成，下面代码不会走
fs.writeFileSync('./testDir/1.js','var a = {name:"zf",age:9}','utf-8')

let fs1 = fs.readFileSync('./testDir/1.js','utf-8')
console.log(fs1);
eval(fs1);
a.sex = 'zhufeng';
// 写入的对象自动会执行toString方法【必须得是一个字符串格式】
let ary = `[${JSON.stringify(a)}]`
fs.writeFileSync('./testDir/1.js',ary,'utf-8');










