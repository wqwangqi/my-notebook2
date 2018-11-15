import {createStore} from 'redux';
import reducer from './reducer/Counter';
let Store = createStore(reducer)
export default Store 