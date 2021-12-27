import React, { Component } from "react";
import { withRouter } from "react-router-dom";
class index extends Component {
  goto = (flag) => {
    if (flag == "forward") {
      // 前进一步   在一般组件中除了自己传递的props参数 没有history/match/location等参数对象 这些事路由组件所特有的
      this.props.history.goForward();
    } else if (flag == "back") {
      // 后退一步
      this.props.history.goBack();
    } else {
      // 参数为正数则是前进n步 参数为负数则是后退n步
      this.props.history.go(-2);
    }
  };
  render() {
    // console.log("Header接收到的props",this.props)
    return (
      <div className="page-header">
        <h2>React Router Demo</h2>
        <button
          onClick={() => {
            this.goto("forward");
          }}
        >
          前进
        </button>
        <button
          onClick={() => {
            this.goto("back");
          }}
        >
          后退
        </button>
        <button
          onClick={() => {
            this.goto("goto");
          }}
        >
          goto
        </button>
      </div>
    );
  }
}
export default withRouter(index);
// withRouter可以加工一般组件，让一般组件具备路由组件所特有的API
// withRouter的返回值是一个新组件