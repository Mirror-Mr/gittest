import React, { Component } from "react";
import axios from "axios";
import PubSub from "pubsub-js";
import "./index.css";

export default class index extends Component {
  search = () => {
    // 获取输入的字符串
    const {
      keyWordEle: { value: keyWord },
    } = this;
    // 发送消息给订阅的组件
    PubSub.publish("updateState",{isLoading:true,isFirst:false})
    // 发送请求去查找 如果发送请求的域名就是当前的域名则前面的可以省略
    axios.get(`/api/search/users?q=${keyWord.trim()}`).then(
    // axios.get(`http://localhost:3000/api/search/users?q=${keyWord}`).then(
      (res) => {
        PubSub.publish("updateState",{users:res.data.items,isLoading:false})
      },
      (err) => {
        PubSub.publish("updateState",{err:err.message,isLoading:false})
      }
    );
  };
  handleKeyDown=(event)=>{
    const {keyCode} = event;
    if(keyCode !== 13) return;
    this.search()
  }
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">搜索Github用户</h3>
        <div>
          <input
            ref={(c) => (this.keyWordEle = c)}
            type="text"
            placeholder="输入你想要查询的用户名"
            onKeyDown={this.handleKeyDown}
          />
          &nbsp;<button onClick={this.search}>搜索</button>
        </div>
      </section>
    );
  }
}
