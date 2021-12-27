import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Detail from "./Detail";

export default class index extends Component {
  state = {
    messageList: [
      {
        id: 1,
        title: "message01",
      },
      {
        id: 2,
        title: "message02",
      },
      {
        id: 3,
        title: "message03",
      },
    ],
  };
  render() {
    return (
      <div>
        <ul>
          {this.state.messageList.map((message) => {
            return (
              <li key={message.id}>
                  {/* 向路由组件传递params参数 */}
                <Link to={`/home/message/detail/${message.id}/${message.title}`}>{message.title}</Link>
              </li>
            );
          })}
        </ul>
        {/* 注册路由 在path内声明接收params参数*/}
        <Route path="/home/message/detail/:id/:title" component={Detail} />
      </div>
    );
  }
}
