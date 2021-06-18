/*
 * @Author: your name
 * @Date: 2021-03-19 17:28:44
 * @LastEditTime: 2021-03-19 18:28:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \web-masterc:\Users\leishan\Desktop\react-test\react_staging\src\Hello.js
 */
import React,{Component} from 'react';
import hello from './index.module.css';
export default class Hello extends Component{
    render(){
        return(
            <div className = {hello.title}>hello</div>
        )
    }
}