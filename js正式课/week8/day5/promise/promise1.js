class Promise {
    constructor(excutor) {
        // Promise构造函数当中的内容
        this.status = 'pending';
        this.value = undefined;
        // 创建两个容器成功和失败
        this.fulfilledAry = [];
        this.rejectedAry = [];
        // 成功之后执行的方法
        let resolve = result => {
            let timer = setTimeout(() => {
                clearTimeout(timer);
                if (this.status == 'pending') {
                    this.status = 'fulfilled';
                    this.value = result;
                    this.fulfilledAry.forEach(item => item())
                    // item =>每一个匿名函数【匿名函数执行=>成功的回调函数执行】
                }
            }, 0)
        }
        // 失败以后执行的方法
        let reject = reason => {
            // 添加异步代码，进行异步操作
            let timer = setTimeout(() => {
                clearTimeout(timer);
                if (this.stauts = 'pending') {
                    this.status = 'rejected';
                    this.value = reason;
                    this.rejectedAry.forEach(item => item());
                }
            }, 0)
        }
        // 需要对构造器【回调函数】
        excutor(resolve, reject)
    }
    // promise原型上的方法
    then(fulfilledCB, rejectedCB) {
        this.fulfilledAry.push(() => {
            fulfilledCB(this.value)
        });
        this.rejectedAry.push(() => {
            rejectedCB(this.value)
        });
    }
}
module.exports = Promise