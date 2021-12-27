import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {
    // static getDerivedStateFromProps(){}
    state={
        // 用于标识该组件的子组件是否出错
        hasError:""
    }
    /**
     * 要讲Child的错误设置一个影响边界 要在会出错的组件的父组件内进行捕获
     * 当前组建的子组件出错时，会触发getDerivedStateFromError函数，并携带错误信息参数
     * 只能捕获 1.子组件 2.生命周期 里产生的错误
     * 
     *  */ 
    static getDerivedStateFromError(error){
        console.log(error)
        // 返回一个state对象 改变标识错误的状态
        return {
            hasError:error
        }
    }
    // 生命周期钩子
    componentDidCatch(){
        console.log("统计错误次数，反馈给服务器，通知编码人员改bug")
    }
    render() {
        return (
            <div style={{backgroundColor:"gold",width:"300px",height:"200px"}}>
                <h2>Parent</h2>
                { this.state.hasError?<h2>出问题了</h2>:<Child/>}
            </div>
        )
    }
}
