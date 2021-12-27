import React from "react";
import ReactDom from "react-dom";

// 类式组件
// export default class index extends React.Component {
//   state = {
//     age: 0,
//   };
//   inputValue = React.createRef()
//   add = () => {
//     this.setState((state) => ({
//       age: state.age + 1,
//     }));
//   };
//   destory = () => {
//     //   注销 注销后定时器未关闭会报错 需要在组件注销前关闭定时器
//     ReactDom.unmountComponentAtNode(document.getElementById("root"));
//   };
//   show=()=>{
//     console.log(this.inputValue)
//     alert(this.inputValue.current.value)
//   }
//   //   生命周期钩子函数 destory
//   componentWillUnmount() {
//     clearInterval(this.timer);
//   }
//   //   生命周期钩子函数 mounted
//   componentDidMount() {
//     this.timer = setInterval(() => {
//       this.add();
//     }, 1000);
//   }
//   render() {
//     const { age } = this.state;
//     return (
//       <div>
//         <input type="text" ref={this.inputValue}/>
//         <h2>我今年{age}岁</h2>
//         <button onClick={this.add}>点我加一岁</button>
//         <button onClick={this.destory}>注销组件</button>
//         <button onClick={this.show}>展示输入框输入</button>
//       </div>
//     );
//   }
// }

// 函数式组件 执行1+n次  1是初始化 n是状态更新次数
export default function Index() {
  //   StateHook
  //useState返回一个数组 第一位为状态改变量 第二位是改变状态的方法 useState(状态初始值)
  //虽然函数式组件执行了1+n次 但是react底层不会每次都用状态初始值覆盖改变后的状态值
  const [age, addAge] = React.useState(0);
  const [name, setName] = React.useState("大哥");
  const inputValue = React.useRef();
  function add() {
    // addAge(age + 1); //第一种写法
    addAge((age) => age + 1); //第二种写法 函数式可以接收到对应的state参数
  }
  function changeName(val) {
    // setName(val);
    setName((name) => name + "h");
  }
  //   卸载组件
  function destory() {
    //   不关闭定时器就卸载组件还是会报错
    ReactDom.unmountComponentAtNode(document.getElementById("root"));
  }
  function show(){
      console.log(inputValue)
      alert(inputValue.current.value)
  }
  //   EffectHook
  //   useEffect可传两个参数
  //   第一个参数可相当于DidMount和DidUpdata生命周期钩子函数 这个参数可以返回一个函数 这个被返回的函数就相当于WillUnmount
  //   第二个参数表示监听的对象是谁 不传表示全部监听=DidUpdate 传空数组表示谁都不监听，只在第一次render后执行=DidMount 传非空数组则数组元素指定被监听的对象
  React.useEffect(() => {
    const timer = setInterval(() => {
      add();
    }, 1000);
    // 此处返回的函数就相当于WillUnmount
    return()=>{
        clearInterval(timer)
    }
  }, []);
  return (
    <div>
      <input type="text" ref={inputValue}/>
      <h2>
        我叫{name},今年{age}岁
      </h2>
      <button onClick={add}>点我加一岁</button>
      <button onClick={() => changeName("二弟")}>点我改名</button>
      <button onClick={destory}>卸载组件</button>
      <button onClick={show}>展示输入框输入</button>
    </div>
  );
}
