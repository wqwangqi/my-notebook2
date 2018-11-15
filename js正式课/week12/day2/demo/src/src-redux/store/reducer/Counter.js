import * as Types from '../action-types'
let initStore = {num:0};

function reducer(state=initStore,action){
    switch(action.type){
        case Types.ADD_COUNT:
            return {num:state.num+1}
        case Types.MIN_COUNT:
            return {num:state.num-1}
    }
    return state
}
export default reducer