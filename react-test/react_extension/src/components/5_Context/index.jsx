import React, { Component, createContext } from "react";
// 创建Context对象
const MyContext = createContext();
const { Provider } = MyContext;
export default class A extends Component {
  state = {
    gfName: "大爷",
    gfAge: 90,
  };
  render() {
    console.log(MyContext);
    const { gfName, gfAge } = this.state;
    return (
      <div style={{ width: "500px", height: "300px", backgroundColor: "gold" }}>
        <h2>我是爷爷，我叫{gfName}</h2>
        {/* Provider的value属性表示要传给后代的数据 */}
        {/* <MyContext.Provider value={gfName}> */}
        {/* 当要传递多个值时 需要传递一个对象 */}
        <MyContext.Provider value={{ gfName, gfAge }}>
          <B gfName={gfName} />
        </MyContext.Provider>
      </div>
    );
  }
}

class B extends Component {
  render() {
    // 通过context传递的数据 子组件也能接收到 但是一般父子组件间传值不需要这么麻烦 用props就行
    // context多用于祖组件和后代组件间传值
    const { gfName } = this.props;
    return (
      <div style={{ width: "400px", height: "200px", backgroundColor: "pink" }}>
        <h2>我是爸爸，我爸叫{gfName}</h2>
        <C />
      </div>
    );
  }
}
// class C extends Component {
//   //   想要接收通过context对象传递过来的数据 必须要声明才能接收到
//   //   contextType是固定写法
//   static contextType = MyContext;
//   render() {
//     console.log(this.context);
//     return (
//       <div
//         style={{ width: "300px", height: "100px", backgroundColor: "skyblue" }}
//       >
//         <h2>我是孙子，我爷叫{this.context}</h2>
//       </div>
//     );
//   }
// }
function C() {
  // 在函数式组件中接收祖组件传递的数据 不能使用
  //   static contextType = MyContext
  //   在函数式组件中接收祖组件传递的数据 要用Context对象上的Consumer组件
  return (
    <div
      style={{ width: "300px", height: "100px", backgroundColor: "skyblue" }}
    >
      <MyContext.Consumer>
        {/* 只传递了一个值时 参数value就为传递过来的那个值 */}
        {/* {(value) => <h2>我是孙子，我爷叫{value}</h2>} */}
        {/* 当传递了一个对象时 参数value就为传递来的那个对象 */}
        {(value) => (
          <h2>
            我是孙子，我爷叫{value.gfName},今年{value.gfAge}
          </h2>
        )}
      </MyContext.Consumer>
    </div>
  );
}
