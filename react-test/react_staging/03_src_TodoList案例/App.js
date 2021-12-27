// 创建外壳组件App
// 暴露形式分为分别暴露和默认暴露
// { Component }不是解构赋值 而是获取分别暴露出来的Component React是默认暴露
import React, { Component } from "react";
// const {Component} = React;
import Header from "./component/Header";
import List from "./component/List";
import Footer from "./component/Footer";
import Demo from "./component/Demo";
import "./App.css";

// 创建App组件
class App extends Component {
  // 状态在哪里 操作状态的方法就在哪里 !!!!
  // 初始化状态
  state = {
    todoList: [
      {
        id: "001",
        name: "吃饭",
        done: false,
      },
      {
        id: "002",
        name: "睡觉",
        done: true,
      },
      {
        id: "003",
        name: "打球",
        done: true,
      },
      {
        id: "004",
        name: "逛gai",
        done: false,
      },
    ],
  };
  // 添加新事项方法 用于传递给子组件来改变父组件的state
  addTodo = (todoObj) => {
    const newTodoList = [todoObj, ...this.state.todoList];
    this.setState({ todoList: newTodoList });
  };
  //   改变事项状态方法
  changeTodo = (id, done) => {
    const { todoList } = this.state;
    // 数组的map方法 返回一个新数组 匹配处理数据
    const newTodoList = todoList.map((todo) => {
      if (todo.id === id) return { ...todo, done };
      else return todo;
    });
    this.setState({ todoList: newTodoList });
  };
  // 删除指定事项
  deleteTodo = (id) => {
    if (window.confirm("确定删除？")) {
      const { todoList } = this.state;
      const newTodoList = todoList.filter((todo) => {
        if (todo.id !== id) return todo;
      });
      console.log(newTodoList);
      this.setState({ todoList: newTodoList });
    }
  };
  // 更新所有事项状态
  updataAllDone = (done) => {
    const { todoList } = this.state;
    const newTodoList = todoList.map((todo) => {
      return { ...todo, done };
    });
    this.setState({ todoList: newTodoList });
  };
  // 清理所有完成的事项
  clearAllDone = () => {
    const { todoList } = this.state;
    const newTodoList = todoList.filter((todo) => {
      return !todo.done;
    });
    this.setState({ todoList: newTodoList });
  };
  render() {
    const { todoList } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Demo/>
          <Header addTodo={this.addTodo} />
          <List
            todoList={todoList}
            changeTodo={this.changeTodo}
            deleteTodo={this.deleteTodo}
          />
          <Footer
            todoList={todoList}
            updataAllDone={this.updataAllDone}
            clearAllDone={this.clearAllDone}
          />
        </div>
      </div>
    );
  }
}
// 暴露App组件
export default App;
