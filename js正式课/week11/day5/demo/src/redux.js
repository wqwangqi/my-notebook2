// redux: 统一数据管理，将所有的数据放在一个公用的容器中，所有的组件可以获取到当前容器中的数据，如果组件想要更改容器中的状态，需要派发信息，通知reducer，更改状态
function createStore(reducer) {
    // 1. state  2. getState   3. subscribe  4.dispatch
    let  state;
    // 获取状态的方法；
    let getState =()=>JSON.parse(JSON.stringify(state));
    // 订阅的函数；
    let  listeners = [];
    let subscribe=(fn)=>{
        listeners.push(fn);
        return ()=>{
            listeners = listeners.filter((item)=>item!==fn);
        }
    }
    function dispatch(action) {
        state=reducer(state,action);
        // 发布订阅好的方法；
        listeners.forEach((item)=>{item()})
    }
    dispatch({});
    return {
        getState,
        subscribe,
        dispatch
    }
}
