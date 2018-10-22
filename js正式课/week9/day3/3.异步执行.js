
setTimeout(() => {
    console.log(200);
}, 0)
new Promise((res, rej) => {
    // setTimeout(() => {
         res(100)
    // }, 0)
}).then(res=>{
    console.log(res);
})
// 先执行微任务，再执行宏任务

async function fn() {
    await function(){
        console.log(300);
    }
}
// fn().then(res=>{
//     console.log(res);
// })


//  100 300 200

