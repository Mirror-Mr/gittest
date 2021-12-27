import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/store";
// 优化 -- 使用react-redux提供的Provider组件 可自动给所有的容器组件传递store对象
import { Provider } from "react-redux";

ReactDOM.render(
  // 此处用Provider包裹App，可以让App后代组件中所有的容器组件都能接收到store
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
// 优化 -- 使用react-redux就不需要手动监听redux中状态的改变 容器组件通过connect方法会自动监听
// 检测redux中状态的变化，只要变化，就调用render重新渲染页面
// 有dom的diff算法 不会引起页面大面积的重绘重排
// store.subscribe(() => {
//   ReactDOM.render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>,
//     document.getElementById("root")
//   );
// });
