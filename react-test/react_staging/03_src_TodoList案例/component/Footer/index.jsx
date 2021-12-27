import React, { Component } from "react";
import PropTypes from "prop-types";
import "./index.css";

export default class Footer extends Component {
  static propTypes = {
    updataAllDone:PropTypes.func.isRequired,
    clearAllDone:PropTypes.func.isRequired,
    todoList:PropTypes.array.isRequired
  };
  updataAllDone = () => {
    return (event) => {
      this.props.updataAllDone(event.target.checked);
    };
  };
  //   清理所有完成的事项
  clearAllDone = () => {
    this.props.clearAllDone();
  };
  render() {
    const { todoList } = this.props;
    const doneCount = todoList.reduce((temp, todo) => {
      return todo.done ? temp + 1 : temp;
    }, 0);
    const totalDone = todoList.length;
    return (
      <div className="todo-footer">
        <label>
          <input
            type="checkbox"
            checked={doneCount == totalDone && doneCount !== 0}
            onChange={this.updataAllDone()}
          />
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{totalDone}
        </span>
        <button className="btn btn-danger" onClick={this.clearAllDone}>
          清除已完成任务
        </button>
      </div>
    );
  }
}
