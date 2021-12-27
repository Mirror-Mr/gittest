// 引入实现组件懒加载需要的lazy方法 除此之外还需要Suspense组件
import React, { Component, lazy, Suspense } from "react";
import { NavLink, Route } from "react-router-dom";
// import Home from "./Home";
// import About from "./About";
import Loading from "./Loading"
// lazy是一个方法 参数也是一个方法  这样引入的组件是一个对象
const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));
export default class index extends Component {
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
              <NavLink
                activeClassName="active"
                className="list-group-item "
                to="/about"
              >
                About
              </NavLink>
              <NavLink
                activeClassName="active"
                className="list-group-item "
                to="/home"
              >
                Home
              </NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 实现路由的懒加载 要使用Suspense组件包裹需要懒加载的组件 fallback内指定组件未加载出来时要显示的内容*/}
                {/* <Suspense fallback={<h2>Loading...</h2>}> */}
                <Suspense fallback={<Loading/>}>
                  {/* 注册路由 */}
                  <Route path="/about" component={About} />
                  <Route path="/home" component={Home} />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
