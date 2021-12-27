import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class index extends Component {
  render() {
    //   props中的children属性即为该组件标签体内要显示的内容
    // console.log(this.props.children);
    return (
      <NavLink
        activeClassName="click"
        className="list-group-item "
        {...this.props}
      ></NavLink>
    );
  }
}
