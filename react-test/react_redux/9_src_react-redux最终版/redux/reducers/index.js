/**
 * 该文件用于汇总所有的reducer为一个总的reducer
 */

// 用于合并多个reducer为一个总的reducer
import { combineReducers} from "redux";
// 引入为Count组件服务的reducer
import count from "./count";
// 引入为Friend组件服务的reducer
import friendList from "./friend";
// 汇总所有的reducer为一个总的reducer  参数为store中存放的所有数据
export default  combineReducers({
    count,
    friendList
})