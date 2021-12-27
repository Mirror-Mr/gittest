import React, { Component } from "react";
// querystring 将 {xx:xxx,yy:yyy}对象 和 xx=xxx&yy=yyy(urlencoded编码) 进行转换
import qs from "querystring";
// qs.stringify()  将对象转为urlencoded编码格式
// qs.parse()      将urlencoded编码格式转为对象
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
    //在HashRouter模式下 获取不到state
    console.log(this.props.location.state);
    // --接收params参数 在props.match.params内存储着传给路由组件的params参数对象
    // const { id, title } = this.props.match.params;

    // --接收search参数 在props.location.search中存储着传给路由组件的search参数字符串 ?xx=xxx&xx=xxx【urlencoded编码格式】
    // 需要手动将字符串转为参数对象，也可引入并使用querystring插件
    // const {id,title} = qs.parse(this.props.location.search.slice(1))

    // --接收state参数 在props.location.state中存储着传给路由组件的state参数对象
    // const {id,title} = this.props.location.state?this.props.location.state:{};
    const { id, title } = this.props.location.state || {};
    // ||的妙用 如果find方法返回的是undefined 则将message设为{}
    const message =
      this.state.messageList.find((msg) => {
        return msg.id === id;
      }) || {};
    return (
      <ul>
        <li>ID:{id}</li>
        {/* <li>ID:1</li> */}
        <li>TITLE:{title}</li>
        {/* <li>TITLE:1</li> */}
        <li>CONTENT:{message.id}</li>
        {/* <li>CONTENT:1</li> */}
      </ul>
    );
  }
}
