// 下拉刷新的方法
export function downFresh(ele,callback){
    // ele:当前的元素
    // callback：回调函数
    ele.addEventListener('scroll',function(){
        let scrollT = ele.scrollTop;
        let winH = document.body.clientHeight-112;
        let eleH = ele.offsetHeight;
        // 当滚动条距离底部10px时，触发一个新的请求
        setTimeout(()=>{
            if(scrollT+winH+1>eleH){
                callback()   
            }    
        },1000)
    },false)
}