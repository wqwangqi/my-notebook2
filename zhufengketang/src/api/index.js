// get post

const HOST = 'http://localhost:3001';
export function get(url){
    // fetch  用来发请求，是window下新增的api，在ie8下不兼容  fetch请求返回一个promise实例
    console.log(fetch(HOST + url));
    return fetch(HOST+url).then(res=>res.json())
}