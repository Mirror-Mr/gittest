import React, { Component } from "react";
import Search from "./components/Search";
import List from "./components/List";

export default class App extends Component {
  state = {
    users: [], //user初始化为空数组
    isFirst: true, //是否首次进入 要展示初始欢迎语
    isLoading: false, //是否还在请求
    err: "", //是否请求失败
  };
  // state在哪 操作state的方法就在哪儿
  saveUsers = (users) => {
    this.setState({ users });
  };
  // 更新state
  updateState = (state) => {
    this.setState(state);
  };
  render() {
    return (
      <div className="container">
        <Search updateState={this.updateState} />
        <List {...this.state} />
      </div>
    );
  }
}
