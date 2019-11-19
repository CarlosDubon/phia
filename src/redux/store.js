import {combineReducers, createStore} from "redux";
import app from "./reducers/app"

const reducer = combineReducers({
    app
})

export const store = createStore(reducer)