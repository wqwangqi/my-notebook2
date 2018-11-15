// createStore  

function createStore (reducer){
    let state;
    let getState=()=>JSON.parse(JSON.stringify(state));
    let listeners=[];
    let subscribe=(fn)=>{
        listeners.push(fn);
        return ()=>{
            listeners = listeners.filter((item)=>item!==fn)
        }
    }
    function dispatch(action){
        state=reducer(state,action);
        listeners.forEach((item)=>item())
    }
    dispatch({})
    return {
        getState,
        subscribe,
        dispatch
    }
}

// combineReducer

function combineReducer(reducers){
    return (state={},action)=>{
        let obj = {};
        for(let key in reducers){
            obj[key] = reducers[key](state[key],action)
        }
        return obj
    }
    
}
export {
    createStore,
    combineReducer
}