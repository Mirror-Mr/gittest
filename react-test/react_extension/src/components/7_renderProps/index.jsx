/**
 * 向组件内内部动态传入其他内容 类似于vue中的slot插槽
 * 1.childrenProps -- 通过this.props.children获取
 * 2.renderProps -- 通过this.props.render()获取
 */
import React, { Component } from "react";
import C from "../1_setState"
export default class Person extends Component {
  render() {
    return (
      <div>
          {/* renderProps -- 给A组件传递一个函数 这个函数会返回要动态展示的内容 */}
        {/* <A render={() => <B />}> */}
        {/* 若A组件在调用传递过去的函数时传递了参数 则在这里要声明接收 B组件才会接收到 */}
        {/* <A render={(data) => <B name={data}/>}> */}
        {/* 这里返回的组件可以随意更改 就相当于A组件内预留了一个位置 类似Vue的slot插槽 */}
        <A render={(data) => <C name={data}/>}>
          {/* childrenProps -- B组件作为A组件的标签体内容 在页面上不会显示 但会被存在A组件接收到的props的children参数中 */}
          {/* <B /> */}
        </A>
      </div>
    );
  }
}
class A extends Component {
    state ={
        name:"林俊杰"
    }
  render() {
    return (
      <div style={{ backgroundColor: "gold", width: "400px", height: "200px" }}>
        <h2>我是A组件</h2>
        {/* childrenProps -- B组件在A组件标签体中的展示方式 如果B组件需要A组件内的数据 没办法传递*/}
        {/* {this.props.children} */}
        {/* renderProps -- A组件调用传递过来的函数 返回的内容即是要展示的内容*/}
        {/* {this.props.render()} */}
        {/* A组件调用传递过来的函数时传递的参数就可以传递给B组件 */}
        {this.props.render(this.state.name)}
      </div>
    );
  }
}

class B extends Component {
  render() {
    return (
      <div
        style={{ backgroundColor: "green", width: "300px", height: "100px" }}
      >
        <h2>我是B组件,我的名字是{this.props.name}</h2>
      </div>
    );
  }
}
