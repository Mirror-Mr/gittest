// 自己编写需要和store进行数据交互的Count容器组件（包含CountUI组件）
import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addCount,
  delCount,
  addAsyncCount
} from "../../redux/action_creators/count";

// 定义UI组件
class CountUI extends Component {
  addCount = () => {
    this.props.addCount(this.selectNum.value * 1);
  };
  delCount = () => {
    this.props.delCount(this.selectNum.value * 1);
  };
  addCountIfOdd = () => {
    const value = this.selectNum.value * 1;
    const sum = this.props.num;
    if (sum % 2 == 1) {
      this.props.addCount(value);
    }
  };
  addAsyncCount = () => {
    this.props.addAsyncCount(this.selectNum.value * 1, 1000);
  };
  render() {
    return (
      <div>
        <h2>我是Count组件，楼下组件的朋友数：{this.props.friendNum}</h2>
        <h3>求和为：{this.props.num}</h3>
        <select
          ref={(c) => {
            this.selectNum = c;
          }}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        &nbsp;
        <button onClick={this.addCount}>+</button>&nbsp;
        <button onClick={this.delCount}>-</button>&nbsp;
        <button onClick={this.addCountIfOdd}>奇数+</button>&nbsp;
        <button onClick={this.addAsyncCount}>异步+</button>
      </div>
    );
  }
}

// 容器组件连接UI组件和store
export default connect(
  // 映射状态
  (state) => ({
    num: state.count,
    friendNum:state.friendList.length
  }),
  // 映射操作状态的方法 对象的简写 
  {
    addCount,
    delCount,
    addAsyncCount,
  }
)(CountUI);
