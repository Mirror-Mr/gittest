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
  show = (flag, id, title) => {
    const url = `/home/message/detail`;
    if (flag == "push") {
      // 编程式路由导航 编写js代码进行跳转路由

      // push跳转 传递params参数
      // this.props.history.push(url+`/${id}/${title}`)
      // push跳转 传递search参数
      // this.props.history.push(url+`?id=${id}&title=${title}`)
      // push跳转 传递state参数 push方法可以传递两个参数【路径，state参数】
      this.props.history.push(url, { id, title });
    } else {
      // replace跳转 传递params参数
      // this.props.history.replace(url+`/${id}/${title}`)
      // replace跳转 传递search参数
      // this.props.history.replace(url+`?id=${id}&title=${title}`)
      // replace跳转 传递state参数 replace方法可以传递两个参数【路径，state参数】
      this.props.history.replace(url, { id, title });
    }
  };
  
  render() {
    return (
      <div>
        <ul>
          {this.state.messageList.map((message) => {
            return (
              <li key={message.id}>
                {/* 向路由组件传递params参数 */}
                {/* <Link to={`/home/message/detail/${message.id}/${message.title}`}>{message.title}</Link> */}

                {/* 向路由组件传递search参数 */}
                <Link
                  to={`/home/message/detail/?id=${message.id}&title=${message.title}`}
                >
                  {message.title}
                </Link>

                {/* 向路由组件传递state参数 对象的形式 */}
                {/* <Link  to={{pathname:'/home/message/detail',state:{...message}}}>{message.title}</Link> */}

                <button
                  onClick={() => {
                    this.show("push", message.id, message.title);
                  }}
                >
                  push前进
                </button>
                <button
                  onClick={() => {
                    this.show("replace", message.id, message.title);
                  }}
                >
                  replace前进
                </button>
              </li>
            );
          })}
        </ul>
        {/* 注册路由 在path内声明接收params参数*/}
        {/* <Route path="/home/message/detail/:id/:title" component={Detail} /> */}

        {/* 注册路由 search参数无需声明接收 */}
        <Route path="/home/message/detail" component={Detail} />
        
        {/* 注册路由 state参数无需声明接收 */}
        {/* <Route  path='/home/message/detail' component={Detail} /> */}
      </div>
    );
  }
}
