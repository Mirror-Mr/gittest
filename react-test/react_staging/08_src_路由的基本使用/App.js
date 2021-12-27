import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header">
              <h2>React Router Demo</h2>
            </div>
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

              <Link className="list-group-item " to="/about">
                About
              </Link>
              <Link className="list-group-item " to="/home">
                Home
              </Link>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}
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
