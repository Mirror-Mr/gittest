import React, { Component, Fragment } from "react";

export default class index extends Component {
  render() {
    return (
      // 不想多加实质性的标签可以用空标签 但空标签上不允许写任何属性（和Fragment的区别）
      // <>
      <Fragment>
        <button>1</button>
        <button>1</button>
        <button>1</button>
        <button>1</button>
      </Fragment>
      // </>
    );
  }
}
