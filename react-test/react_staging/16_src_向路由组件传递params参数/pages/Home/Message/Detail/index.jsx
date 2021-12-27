import React, { Component } from "react";

export default class index extends Component {
  state = {
    messageList: [
      {
        id: 1,
        content: "小酒窝",
      },
      {
        id: 2,
        content: "爱笑的眼睛",
      },
      { id: 3, content: "裂缝中的阳光" },
    ],
  };
  render() {
    // --接收params参数 在props.match.params内存储着传给路由组件的参数对象
    console.log(this.props);
    const { id, title } = this.props.match.params;
    const message = this.state.messageList.find(msg=>{
        return msg.id == id;
    })
    return (
      <ul>
        <li>ID:{id}</li>
        <li>TITLE:{title}</li>
        <li>CONTENT:{message.content}</li>
      </ul>
    );
  }
}
