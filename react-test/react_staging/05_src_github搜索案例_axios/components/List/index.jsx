import React, { Component } from "react";
import "./index.css";

export default class index extends Component {
  render() {
    const { users, isLoading, isFirst, err } = this.props;
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
