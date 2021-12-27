// {}不是解构赋值 而是表示'react'里有多种导出方法:export、export default
import React from "react";
import Hello from "./components/Hello";
import Welcome from "./components/Welcome";
// 创建并导出外壳组件App
export default class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome />
      </div>
    );
  }
}
