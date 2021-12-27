import React, { Component } from "react";
import PropTypes from "prop-types";
import Item from "../Item";
import "./index.css";

export default class List extends Component {
  // 对接收的props进行类型、必要性的限制
  static propTypes = {
    todoList: PropTypes.array.isRequired,
    changeTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
  };
  render() {
    const { todoList, changeTodo,deleteTodo } = this.props;
    return (
      <ul className="todo-main">
        {todoList.map((todo) => {
          return <Item todo={todo} key={todo.id} changeTodo={changeTodo} deleteTodo={deleteTodo}/>;
        })}
      </ul>
    );
  }
}
