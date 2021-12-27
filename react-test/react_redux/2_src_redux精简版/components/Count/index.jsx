import React, { Component } from "react";
// 引入store，用于获取redux中保存的状态
import store from "../../redux/store";

export default class Count extends Component {
  state = {
    //  已经交给redux管理了
    // count: 0,
  };
  //   componentDidMount() {
  //     // 检测redux中状态的变化，只要变化，就调用render
  //     store.subscribe(() => {
  //       // 没改变状态  但是会更新视图
  //       this.setState({});
  //     });
  //   }
  // 加
  addCount = () => {
    //   下拉列表元素的value属性值就是选中的option的值
    const { value } = this.selectNum;
    /**
     * react在调用setState后1.更新状态 2.重新渲染视图（调用render方法）
     * redux只负责管理状态 不会引起页面更新 需要手动调用render方法更新视图
     *  */
    store.dispatch({ type: "addCount", data: value * 1 });
  };
  // 减
  delCount = () => {
    const { value } = this.selectNum;
    store.dispatch({ type: "delCount", data: value * 1 });
  };
  // 奇数再加
  addCountIfOdd = () => {
    const { value } = this.selectNum;
    const count = store.getState();
    if (count % 2 == 1) {
      store.dispatch({ type: "addCount", data: value * 1 });
    }
  };
  // 异步加
  addCountAysnc = () => {
    const { value } = this.selectNum;
    setTimeout(() => {
      store.dispatch({ type: "addCount", data: value * 1 });
    }, 1000);
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <h2>当前求和为：{store.getState()}</h2>
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
