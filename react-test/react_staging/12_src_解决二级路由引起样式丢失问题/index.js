// 入口文件
// 引入react核心库
import React from "react";
// 引入ReactDOM
import ReactDOM from "react-dom";
import { BrowserRouter,HashRouter } from "react-router-dom";
// 引入App组件 .js可省略
import App from "./App";

// 渲染App组件到页面
// 整个应用应该用一个路由器去管理 <BrowserRouter></BrowserRouter>标签只能存在一次
ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
);
