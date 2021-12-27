import React, { Component } from "react";
import PropTypes from "prop-types";
import "./index.css";
import { nanoid } from "nanoid";

export default class Header extends Component {
  // 对接收的props进行类型、必要性的限制
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
  };
  addTodo = (e) => {
    const { keyCode, target } = e;
    // 不是按空格就不管他
    if (keyCode !== 13) return;
    // trim()去除空格之后的输入框的值
    if (!target.value.trim()) return;
    // 添加到App的todoList中
    const todoObj = { id: nanoid(), name: target.value, done: false };
    // 通过父组件传递给子组件的方法来实现子组件向父组件传值
    // console.log(this)
    this.props.addTodo(todoObj);
  };
  render() {
    return (
      <div className="todo-header">
        <input
          onKeyDown={this.addTodo}
          type="text"
          placeholder="请输入你的任务名称，按回车键确认"
        />
      </div>
    );
  }
}
