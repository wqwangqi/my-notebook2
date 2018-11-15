let express = require('express');
let app = express();
app.use(express.static(__dirname))
// app.use：express的一个中间件
// 中间件：会在所有的返回数据之前，对当前的请求进行处理
/* app.use(function(req,res,next){
    // 设置允许的访问的url
    // 设置响应头
    res.setHeader('Access-Control-Allow-Origin','http://localhost:63342')
    next()
}) */
app.listen(3000);