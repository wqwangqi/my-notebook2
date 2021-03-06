let http = require('http');
let fs = require('fs');
let url = require('url');

let server = http.createServer((req, res) => {
    //1.我们希望加载index.html
    //需要拿到请求的路径，顺便拿到请求的参数
    let {
        pathname,
        query
    } = url.parse(req.url, true)
    //拿到请求的路径地址和请求参数
    //想要访问首页
    if (pathname === '/') {
        //读取到index.html的数据
        let home = fs.readFileSync('./index.html', 'utf-8');
        //返回给前端
        res.end(home);
        return
    }
    //遇到这个文件直接返回空
    if (pathname === '/performance-now.js.map' || pathname === '/favicon.ico') {
        res.end()
        return
    }
    //将其他的文件进行响应  // ./css/index.css   ./ajax.js
    let reg = /\.(\w+)$/g;
    if (reg.test(pathname)) {
        let con = fs.readFileSync('.' + pathname, 'utf-8');
        res.end(con);
        return
    }

    // 第一步开始
    var dataUrl = './data.json';
    var dataSuc = {
        code: 0,
        msg: 'success',
        data: null
    }
    if (pathname === '/getlist') {
        let con = fs.readFileSync(dataUrl, 'utf-8');
        // 为了更加规范所以将数据添加到dataSuc
        dataSuc.data = con;
        res.end(JSON.stringify(dataSuc));
        return
    }
    // 增加一个新客户
    if (pathname === '/addInfo') {
        var str = '';
        // 接收前端发送的data数据
        req.on('data', function (res) {
            str += res;
        })
        // 拿到data数据之后，插入到本地的数据当中
        req.on('end', function () {
            // console.log(str);
            str = JSON.parse(str);
            console.log(str);

            // {"name":"4","age":"4","phone":"4","address":"4"}
            let data = JSON.parse(fs.readFileSync(dataUrl, 'utf-8'));
            // 不能直接用数据当中最后一项作为新增加对象的id
            str.id = data[data.length - 1]['id'] + 1;
            data.push(str);
            // 将添加后的data转成字符串写入到不让你带数据当中
            fs.writeFileSync(dataUrl, JSON.stringify(data), 'utf-8');
            // 返回给前端成功接收的标识符
            res.end(JSON.stringify(dataSuc))
        })
    }
    // 展示客户查询的信息
    if (pathname === '/getInfo') {
        let data = JSON.parse(fs.readFileSync(dataUrl, 'utf-8'));
        for (let i = 0; i < data.length; i++) {
            // 便利数据当中的每一条，然后将符合数据的那一条返回
            if (data[i]['id'] == query.id) {
                dataSuc.data = data[i];
            }
        }
        res.end(JSON.stringify(dataSuc));
    }
    // 修改客户信息数据的接口
    if (pathname === '/updateInfo') {
        var str = '';
        req.on('data', function (res) {
            str += res;
        })
        req.on('end', function () {
            let newStr = JSON.parse(str);
            let data = JSON.parse(fs.readFileSync(dataUrl, 'utf-8'));
            for (let i = 0; i < data.length; i++) {
                if (data[i]['id'] == newStr['id']) {
                    data[i] = newStr
                }
            }
            fs.writeFileSync(dataUrl, JSON.stringify(data), 'utf-8');
            res.end(JSON.stringify(dataSuc))
        })
    }
    // 删除数据的接口
    if (pathname === '/removeInfo') {
        let data = JSON.parse(fs.readFileSync(dataUrl, 'utf-8'));
        for (let i = 0; i < data.length; i++) {
            // 判断数据中的id是否和请求的id一致，然后进行删除
            if (data[i]['id'] == query['id']) {
                data.splice(i, 1);
                break;
            }
        }
        fs.writeFileSync(dataUrl, JSON.stringify(data), 'utf-8');
        dataSuc.data = data
        res.end(JSON.stringify(dataSuc));
    }
    
    if(pathname==='/findInfo'){
        let data = JSON.parse(fs.readFileSync(dataUrl,'utf-8'));
        for ( var i=0 ; i<data.length ; i++) {
            if(data[i]['name']== query.name){
                var hudr = data.splice(i,1);
                break;
            }
       }
       dataSuc.data = hudr;
       res.end(JSON.stringify(dataSuc))
    } 

})


server.listen(1234, () => {
    console.log('端口1234已启动');
})