import React, { Component } from "react";

export default class index extends Component {
  state = {
    count: 0,
  };
  addCount = () => {
    //////
    // this.setState({count:this.state.count+1})
    // 想在这里输出状态改变后的count不行，因为setState本身虽然是个同步的方法，但是需要react去执行改变状态的操作这个过程是异步的
    // console.log(this.state.count)
    //////

    // 1.对象式的setState 指的是第一个参数为对象
    // setState第一个参数是一个对象（状态改变对象） 可以传递第二个参数 第二个参数是一个回调函数 会在react改变状态的操作执行完后回调
    // this.setState({count:this.state.count+1},()=>{
    //     console.log(this.state.count)
    // })

    // 2.函数式的setState 指的是第一个参数为函数
    // setState第一个参数为一个返回对象（状态改变对象）的函数 第二个参数同上
    // setState第一个参数可以接收到两个参数 state即总的状态对象 props为父元素传递给本元素的值
    this.setState(
      (state, props) => {
        console.log(state, props);
        return { count: state.count + 1 };
      },
      () => {
        console.log(this.state.count);
      }
    );
    // 对象式的setState是函数式的setState的简写方法/语法糖
  };
  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>1.setState扩展</h1>
        <h3>当前求和为:{count}</h3>
        <button onClick={this.addCount}>加1</button>
      </div>
    );
  }
}
