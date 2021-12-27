import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <Header />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 原生html中 靠a标签跳转不同页面 */}
              {/* <a className="list-group-item active" href="./about.html">
                About
              </a>
              <a className="list-group-item" href="./home.html">
                Home
              </a> */}

              {/* 在react中 靠路由链接切换组件 -- 编写路由链接 */}
              {/* 路由器分为两种 BrowserRouter 和 HashRouter  如果使用HashRouter 则链接中#后的字符串都不会作为资源发送给服务器*/}
              {/* 1.点击路由链接 改变浏览器历史记录/改变当前路径 */}

              {/* <Link className="list-group-item " to="/about">
                About
              </Link>
              <Link className="list-group-item " to="/home">
                Home
              </Link> */}
              {/* 如果想让被点击的Link标签 被点击后有一个标识 可使用NavLink标签 */}
              {/* activeClassName属性为被点击的NavLink属性会追加一个自定义类名 默认是"active" */}
              <NavLink activeClassName="click" className="list-group-item " to="/about">
                About
              </NavLink>
              <NavLink activeClassName="click" className="list-group-item " to="/home">
                Home
              </NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}
                {/* 一般组件 */}
                {/* <Home /> */}
                {/* 路由组件 经路由匹配后展示 */}
                <Route path="/about" component={About} />
                <Route path="/home" component={Home} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
