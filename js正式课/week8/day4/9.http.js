/* 
    我只要修改了服务端，就需要断开连接【ctrl+c】，重新启动  
*/
let http = require('http');
let a = 1
let server = http.createServer((req,res)=>{ //开启一个web服务
    //当前端请求我的时候，执行这个回调函数
    console.log('当前端请求我的时候，执行这个回调函数'+(a++));
    res.setHeader('Content-Type','text/plain;utf-8')
    res.end('你好，我是王琪')
})

// 0-65535   建议在3000以上        
// 浏览器搜 localhost:8080  或者  127.0.0.1:8080   ，如果端口号是80，不需要输入端口号，直接localhost
server.listen(8080,()=>{  //监听一个端口，并且启动服务器
    console.log('服务器8080开启');
})