/*
 * @Author: your name
 * @Date: 2021-03-19 11:33:45
 * @LastEditTime: 2021-03-19 15:36:50
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \web-masterc:\Users\leishan\Desktop\react-test\react_staging\src\index.js
 */

// 入口文件
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  // React.StrictMode检测内部不合理代码
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
