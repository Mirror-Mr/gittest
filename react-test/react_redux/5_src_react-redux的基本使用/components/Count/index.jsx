/**
 * Count的UI组件
 * 在UI组件中不能直接和redux进行交互 而是通过容器组件的props获取数据 间接和redux进行交互
 */
import React, { Component } from "react";

export default class Count extends Component {
  // 加
  addCount = () => {
    //   下拉列表元素的value属性值就是选中的option的值
    const { value } = this.selectNum;
    this.props.addCount(value * 1);
  };
  // 减
  delCount = () => {
    const { value } = this.selectNum;
    this.props.delCount(value * 1);
  };
  // 奇数再加
  addCountIfOdd = () => {
    const { value } = this.selectNum;
    const { count, addCount } = this.props;
    if (count % 2 == 1) {
      addCount(value*1)
    }
  };
  // 异步加
  addCountAysnc = () => {
    const { value } = this.selectNum;
    this.props.addAsyncCount(value*1,1000)
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <h2>当前求和为：{this.props.count}</h2>
        &nbsp;
        <select
          ref={(c) => {
            // c为单选下拉列表选项
            this.selectNum = c;
          }}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        &nbsp;
        <button onClick={this.addCount}>+</button>
        &nbsp;
        <button onClick={this.delCount}>-</button>
        &nbsp;
        <button onClick={this.addCountIfOdd}>当前求和为奇数再加</button>
        &nbsp;
        <button onClick={this.addCountAysnc}>异步加</button>
      </div>
    );
  }
}
