/*
 * @Author: your name
 * @Date: 2021-03-19 11:33:45
 * @LastEditTime: 2021-03-19 11:51:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \web-masterc:\Users\leishan\Desktop\react-test\react_staging\src\App.js
 */
import logo from './logo.svg';
// 引入该组件样式文件
import './App.css';
// 函数式组件
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
