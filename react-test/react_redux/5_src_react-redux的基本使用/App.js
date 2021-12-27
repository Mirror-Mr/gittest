import React, { Component } from "react";
// 引入Count容器组件
import Count from "./containers/Count";
import store from "./redux/store"
export default class App extends Component {
  render() {
    return (
      <div>
        {/* count容器组件内的store要通过外层传入 */}
        <Count store={store}/>
      </div>
    );
  }
}
