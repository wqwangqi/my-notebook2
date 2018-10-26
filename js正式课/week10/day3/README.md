###webpack

新建文件夹
npm init -y   //生成package.json文件【模块清单】

安装webpack
开发环境 --save-dev
生产环境 --save
```
 npm install webpack  --save-dev
```


es6的导入导出
```
    导出：
    export let a = 1
    export let fn = function(){}
    默认导出：export defalut xxx[对象、变量]  

    导入：
    //export
    import {a,fn} from '文件名.js' 
    import * as b from '文件名.js'   //b一个对象
    // export defalut
    import xxx from '文件名.js'
```

node的导入导出
```
    导出：
    exports.a = 1
    exports.fn = function(){}
    默认导出：module.exports = xxx[对象、变量]

    导入：
    // export
    let 变量名 = require(文件的路径)  //对象
    // module.export
    let 变量名 = require(文件的路径)   //默认导出是什么就是什么

    【注意】：require当中，如果有路径，默认导入的自定义模块，如果没有路径，先导入的是第三方模块，其次是内置模块
```


通过npm run build 执行webpack里面的脚本 script=>属性值


为了让更多浏览器识别es6、es7语法，我们需要添加模块让它进行编译
```
babel-core //babel的核心模式
babel-loader//主要的翻译模块
//
css-loader   //解析css文件
less
less-loader   //解析less
style-loader
url-loader
file-loader
 //es6
 babel-preset-es2015
 //es7
 babel-preset-stage-0
 //热加载
 webpack-dev-server
```