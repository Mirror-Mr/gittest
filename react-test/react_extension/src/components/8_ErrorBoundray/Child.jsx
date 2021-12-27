import React, { Component } from "react";

export default class Child extends Component {
  state = {
    // childList: [
    //   {
    //     id: 1,
    //     name: "小明",
    //   },
    //   {
    //     id: 2,
    //     name: "小红",
    //   },
    //   {
    //     id: 3,
    //     name: "小k",
    //   },
    // ],
    childList: "",
  };
  //   这里的错误不会被父组件捕获到 因为不在生命周期内
  //   test()
  render() {
    return (
      <div
        style={{ backgroundColor: "green", width: "200px", height: "100px" }}
      >
        <h2>Child</h2>
        {/* 如果Child组件除问题 会导致整个整个页面无法渲染 我们希望Child中的错误只会影响Child组件的显示 */}
        {/* 可在父组件内进行错误信息的捕获 */}
        {this.state.childList.map((child) => {
          return <span> {child.name} </span>;
        })}
      </div>
    );
  }
}
