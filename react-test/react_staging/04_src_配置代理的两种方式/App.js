import React, { Component } from "react";
import axios from "axios";

export default class App extends Component {
  getStudentInfo = () => {
    axios.get("http://localhost:3000/api0/students").then(
      (res) => {console.log(res.data)},
      (err) => {console.log(err)}
    );
  };
  getCarInfo = () => {
    axios.get("http://localhost:3000/api1/cars").then(
      (res) => {console.log(res.data)},
      (err) => {console.log(err)}
    );
  };
  render() {
    return (
      <div>
        <button onClick={this.getStudentInfo}>点我获取学生信息</button>
        <button onClick={this.getCarInfo}>点我获取车车信息</button>
      </div>
    );
  }
}
