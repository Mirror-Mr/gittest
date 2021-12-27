import React, { Component } from "react";
import PropTypes from "prop-types";
import "./index.css";

export default class Item extends Component {
  // 对接收的props进行类型、必要性的限制
  static propTypes = {
    todo: PropTypes.object.isRequired,
    changeTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
  };
  
  state = {
    //   标识鼠标移入移出
    mouse: false,
  };

  //   处理鼠标移入移出事件
  handleMouse = (flag) => {
    return () => {
      this.setState({ mouse: flag });
    };
  };
  //   更新改变事项状态
  changeTodo = (id) => {
    return (event) => {
      this.props.changeTodo(id, event.target.checked);
    };
  };
  // 删除指定事项
  deleteTodo = (id)=>{
    return ()=>{
      this.props.deleteTodo(id)
    }
  }
  render() {
    const { todo } = this.props;
    const { mouse } = this.state;
    return (
      <li
        onMouseEnter={this.handleMouse(true)}
        onMouseLeave={this.handleMouse(false)}
        style={{ backgroundColor: mouse ? "#ddd" : "#fff" }}
      >
        <label>
          <input
            type="checkbox"
            checked={todo.done}
            onChange={this.changeTodo(todo.id)}
          />
          <span>{todo.name}</span>
        </label>
        <button
          className="btn btn-danger"
          style={{ display: mouse ? "block" : "none" }}
          onClick={this.deleteTodo(todo.id)}
        >
          删除
        </button>
      </li>
    );
  }
}
