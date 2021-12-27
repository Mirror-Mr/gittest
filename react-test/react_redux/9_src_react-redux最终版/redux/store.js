/*
 *该文件专门用于暴露一个store对象，整个应用只有一个store对象
 */
// 引入createStore，专门用于创建redux中最为核心的store对象
// applyMiddleware中间件 本质是个方法 需要传参
import { createStore,applyMiddleware } from "redux";
// 引入合并后的总reducer
import  reducer from "./reducers"
// 引入redux-thunk 用于支持异步action
import thunk from "redux-thunk";
// 要使用redux-devtools开发工具 需要安装redux-devtools-extension插件 并且引入
import {composeWithDevTools} from "redux-devtools-extension"

// 创建store对象需要reducer   使用redux-devtools开发工具 第二个参数需要composeWithDevTools()方法包裹
export default createStore(reducer,composeWithDevTools(applyMiddleware(thunk)));
