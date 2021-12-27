/**
 * CountUI组件的容器组件
 * 在容器组件中和redux进行交互
 */
import React, { Component } from "react";
// 引入connect用于连接UI组件和redux
import { connect } from "react-redux";
// 引入action
import {
  createAddCountAction,
  createDelCountAction,
  createAddCountAsyncAction,
} from "../../redux/action_creators/count";

/**
 * 优化后 -- Count的UI组件直接在这里声明
 * 在UI组件中不能直接和redux进行交互 而是通过容器组件的props获取数据 间接和redux进行交互
 */
class Count extends Component {
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
      addCount(value * 1);
    }
  };
  // 异步加
  addCountAysnc = () => {
    const { value } = this.selectNum;
    this.props.addAsyncCount(value * 1, 1000);
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

// 使用connect()()创建并暴露一个Count的容器组件
// connect在调用时 需要往里面传递两个参数
// 优化前--- export default connect(mapStateToProps, mapDispatchToProps)(CountUI);

/**
 * 优化后--- 简写mapStateToProps 可以是一个方法 也可以是一个对象
 */
export default connect(
  (state) => ({ count: state }), // 映射状态

  //   mapDispatchToProps的一般写法 传个方法
  //   (dispatch) => ({
  //     addCount: (value) => {dispatch(createAddCountAction(value))},
  //     delCount: (value) => {dispatch(createDelCountAction(value))},
  //     addAsyncCount: (value, time) => {dispatch(createAddCountAsyncAction(value, time))}
  //   })

  //   mapDispatchToProps的简写 传个对象 redux收到action会自动调用dispatch
  {
    addCount: createAddCountAction,
    delCount: createDelCountAction,
    addAsyncCount: createAddCountAsyncAction,
  } // 映射操作状态的方法
)(Count); //Count - UI组件
