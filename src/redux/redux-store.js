import { applyMiddleware, combineReducers, createStore } from "redux";
import loginReducer from "./login-reducer";
import thunkMiddleWare from "redux-thunk"


const reducers = combineReducers({
    login: loginReducer
})


const store = createStore(reducers, applyMiddleware(thunkMiddleWare))

window.store = store
export default store