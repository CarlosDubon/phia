import {SET_APP} from "../actions/app";

const defaultState = 0

const reducer =(state = defaultState,{type,payload})=>{
    switch (type) {
        case SET_APP:
            return payload
        default:
            return state
    }
}
export default reducer