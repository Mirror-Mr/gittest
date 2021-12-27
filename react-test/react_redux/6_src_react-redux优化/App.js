import React, { Component } from "react";
// 引入Count容器组件
import Count from "./containers/Count";
// import store from "./redux/store"
export default class App extends Component {
  render() {
    return (
      <div>
        {/* 优化前 count容器组件内的store要通过外层传入 */}
        {/* <Count store={store}/> */}
        {/* 优化后 无需给容器组件一个一个传入store 可在index.js中使用Provider组件 */}
        <Count/>
      </div>
    );
  }
}
