import React, { Component } from "react";

export default class Count extends Component {
  state = {
    count: 0,
  };
  // 加
  addCount = () => {
    //   下拉列表元素的value属性值就是选中的option的值
    const { value } = this.selectNum;
    const { count } = this.state;
    // react在调用setState后1.更新状态 2.重新渲染视图（调用render方法）
    this.setState({ count: count + value * 1 });
    // console.log(this.selectNum.value);
  };
  // 减
  delCount = () => {
    const { value } = this.selectNum;
    const { count } = this.state;
    this.setState({ count: count - value * 1 });
  };
  // 奇数再加
  addCountIfOdd = () => {
    const { value } = this.selectNum;
    const { count } = this.state;
    if (count % 2 == 1) {
      this.setState({ count: count + value * 1 });
    }
  };
  // 异步加
  addCountAysnc = () => {
    const { value } = this.selectNum;
    const { count } = this.state;
    setTimeout(() => {
      this.setState({ count: count + value * 1 });
    }, 1000);
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <h2>当前求和为：{count}</h2>
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
