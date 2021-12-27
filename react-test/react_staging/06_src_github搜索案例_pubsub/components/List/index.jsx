import React, { Component } from "react";
import PubSub from "pubsub-js";
import "./index.css";

export default class index extends Component {
  state = {
    users: [], //user初始化为空数组
    isFirst: true, //是否首次进入 要展示初始欢迎语
    isLoading: false, //是否还在请求
    err: "", //是否请求失败
  };
  //   进入组件 初始化 多用于创建监听
  componentDidMount() {
    //   订阅指定消息
    this.token = PubSub.subscribe("updateState", (msg, data) => {
      this.setState(data);
    });
  }
  //   组件从 DOM 中移除前调用
  componentWillUnmount() {
    //   取消订阅
      PubSub.unsubscribe(this.token);
  }
  render() {
    const { users, isLoading, isFirst, err } = this.state;
    return (
      <div className="row">
        {
          // 只能写js表达式 不能写js语句 所以不能用if/else 可用三元表达式
          isFirst
            ? "欢迎您，输入名字即可查询对应用户哦~"
            : isLoading
            ? "正在玩命查询中~"
            : err
            ? err
            : users.map((user) => {
                return (
                  <div key={user.id} className="card">
                    <a rel="noreferrer" href={user.html_url} target="_blank">
                      <img
                        alt="head"
                        src={user.avatar_url}
                        style={{ width: "100px" }}
                      />
                    </a>
                    <p className="card-text">{user.login}</p>
                  </div>
                );
              })
        }
      </div>
    );
  }
}
