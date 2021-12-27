import React, { Component } from "react";

export default class List extends Component {
  state = {
    num: 0,
  };
  addCount = () => {
    this.setState({
      num: this.state.num + 3,
    });
    console.log(this.state.num);

    this.setState({
      num: this.state.num + 2,
    });
    console.log(this.state.num);

    this.setState({
      num: this.state.num + 1,
    });
    console.log(this.state.num);
  };
  render() {
    return (
      <div onClick={this.addCount}>
        点我{this.state.num}
      </div>
    );
  }
}
