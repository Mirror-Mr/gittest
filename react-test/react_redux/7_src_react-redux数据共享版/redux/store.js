/*
 *该文件专门用于暴露一个store对象，整个应用只有一个store对象
 */
// 引入createStore，专门用于创建redux中最为核心的store对象
// applyMiddleware中间件 本质是个方法 需要传参
// combineReducers合并所有的reducer 
import { createStore,applyMiddleware ,combineReducers} from "redux";
// 引入为Count组件服务的reducer
import countReducer from "./reducers/count";
import friendReducer from "./reducers/friend";
// 引入redux-thunk 用于支持异步action
import thunk from "redux-thunk";

// 汇总所有的reducer为一个总的reducer（是个对象）  参数为包含store中存放的所有数据的对象
const sumReducer = combineReducers({
    count:countReducer,
    friendList:friendReducer
})

// 创建store对象需要reducer
export default createStore(sumReducer,applyMiddleware(thunk));
