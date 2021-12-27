import React, { Component } from "react";
// import axios from "axios";
import PubSub from "pubsub-js";
import "./index.css";

export default class index extends Component {
  search = async () => {
    // 获取输入的字符串
    const {
      keyWordEle: { value: keyWord },
    } = this;
    // 发送消息给订阅的组件
    PubSub.publish("updateState", { isLoading: true, isFirst: false });
    //#region ----使用axios发送请求 如果发送请求的域名就是当前的域名则前面的可以省略
    // axios.get(`/api/search/users?q=${keyWord.trim()}`).then(
    // // axios.get(`http://localhost:3000/api/search/users?q=${keyWord}`).then(
    //   (res) => {
    //     PubSub.publish("updateState",{users:res.data.items,isLoading:false})
    //   },
    //   (err) => {
    //     PubSub.publish("updateState",{err:err.message,isLoading:false})
    //   }
    // );
    // #endregion

    // ----（未优化）使用fetch发送网络请求 关注分离原则 先联系服务器 成功后再获取数据
    // fetch(`/api/search/users2?q=${keyWord.trim()}`)
    //   .then(
    //     (res) => {
    //       // 输出的res对象中 看不到所需返回的值 服务器是否响应和是否联系服务器是两件事
    //       // console.log("联系服务器成功", res);
    //       // res.json()返回一个promise实例对象
    //       // 1.如果联系服务器和获取数据都成功了，返回的promise就是成功的状态，并且其中保存着所需的数据
    //       // 2.如果联系服务器成功，获取数据失败，返回的promise就是失败的状态，并且其中保存着失败的原因
    //       console.log("联系服务器成功");
    //       // 返回一个promise对象
    //       return res.json()
    //     },
    //     (err) => {
    //       // 返回undefined 是个非promise对象 则返回成功状态的promise
    //       console.log("联系服务器失败", err);
    //       // 返回初始化状态的promise 就不会再往下执行
    //       return new Promise(()=>{})
    //     }
    //   )
    //   .then(
    //     (res) => {
    //       console.log("获取数据成功",res)
    //     },
    //     (err) => {
    //       console.log("获取数据失败",err)
    //     }
    //   );

    // ----（优化后--统一处理错误）使用fetch发送网络请求 关注分离原则 先联系服务器 成功后再获取数据
    // fetch(`/api/search/users2?q=${keyWord.trim()}`)
    //   .then(
    //     // 如果then里面不指定失败的回调 可以使用async await
    //     (res) => {
    //       // 输出的res对象中 看不到所需返回的值 服务器是否响应和是否联系服务器是两件事
    //       // console.log("联系服务器成功", res);
    //       // res.json()返回一个promise实例对象
    //       // 1.如果联系服务器和获取数据都成功了，返回的promise就是成功的状态，并且其中保存着所需的数据
    //       // 2.如果联系服务器成功，获取数据失败，返回的promise就是失败的状态，并且其中保存着失败的原因
    //       console.log("联系服务器成功");
    //       // 返回一个promise对象
    //       return res.json();
    //     }
    //   )
    //   .then(
    //     (res) => {
    //       console.log("获取数据成功", res);
    //     }
    //   ).catch(err=>{
    //     // 对错误进行统一处理
    //     console.log("请求出错",err)
    //   })

    // ----（优化后--改用async await）使用fetch发送网络请求 关注分离原则 先联系服务器 成功后再获取数据
    // const response = await fetch(`/api/search/users2?q=${keyWord.trim()}`);
    // const data = await response.json()
    // // 只用await只能等到成功的结果 要和try catch一起用
    // console.log(data)



    // ----（优化后--改用async await + try/catch）使用fetch发送网络请求 关注分离原则 先联系服务器 成功后再获取数据
    try{
      const response = await fetch(`/api/search/users2?q=${keyWord.trim()}`)
      const data = await response.json()
      PubSub.publish("updateState",{users:data.items,isLoading:false})
    }catch(err){
      console.log("请求错误",err)
      PubSub.publish("updateState",{err:err,isLoading:false})
    }
      
  };

  handleKeyDown = (event) => {
    const { keyCode } = event;
    if (keyCode !== 13) return;
    this.search();
  };
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">搜索Github用户</h3>
        <div>
          <input
            ref={(c) => (this.keyWordEle = c)}
            type="text"
            placeholder="输入你想要查询的用户名"
            onKeyDown={this.handleKeyDown}
          />
          &nbsp;<button onClick={this.search}>搜索</button>
        </div>
      </section>
    );
  }
}
