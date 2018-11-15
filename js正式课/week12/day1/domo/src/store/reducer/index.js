// 合并所有的reducer，合成一个reducer
// combineReducers  
import {combineReducers} from 'redux';
// combineReducers 是一个函数，需要传一个对象；返回了一个新的reducer
import counter from './Counter';
import todo from './Todo';
let reducer = combineReducers({
    counter,
    todo
})
export default reducer