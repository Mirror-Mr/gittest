import React, { Component, PureComponent } from "react";

/**
 * 可通过改变组件的继承类(Component->PureComponent)来实现 根据state和props值是否更新来选择是否更新组件
 * 但是PureComponent也存在问题 它底层是浅比较 如果只是改变了同一个对象里的值 则不会更新组件 要产生新数据才会引起组件的更新
 *  */ 
export default class Parent extends PureComponent {
  state = {
    idol: "殷鸡丸",
  };
  changeHome = () => {
    this.setState({ idol: "林俊杰" });
  };
  /**
   * 通过重写shouldComponentUpdate阻止组件的更新太麻烦了
   * 可通过更改组件继承类为PureComponent来实现
   */
  // 可通过生命周期钩子函数来阻止组件更新 返回true=更新 false=不更新
  //   该钩子函数会接收到两个参数 nextProps（更新后的props）和nextState（更新后的state）
  //   shouldComponentUpdate(nextProps, nextState) {
  //     console.log(nextProps, nextState);
  //     console.log(this.props, this.state);
  //     // 死办法 可通过将更新前后的props和state的值进行比较 来选择是否要更新组件
  //     // if(nextState.idol == this.state.idol) return false
  //     // return true;
  //     // 优化写法
  //     return nextState.idol != this.state.idol;
  //   }

  render() {
    console.log("parent--render");
    const { idol } = this.state;
    return (
      <div
        style={{ backgroundColor: "skyblue", width: "400px", height: "300px" }}
      >
        <h2>我是爹组件</h2>
        <h3>我要去{idol}家吃饭</h3>
        <button onClick={this.changeHome}>点我换人</button>
        <Son idol={idol} />
      </div>
    );
  }
}
class Son extends PureComponent {
  /**
   * 通过重写shouldComponentUpdate阻止组件的更新太麻烦了
   * 可通过更改组件继承类为PureComponent来实现
   */
  // 可通过生命周期钩子函数来阻止组件更新 返回true=更新 false=不更新
  //   该钩子函数会接收到两个参数 nextProps（更新后的props）和nextState（更新后的state）
  //   shouldComponentUpdate(nextProps, nextState) {
  //     console.log(nextProps, nextState);
  //     console.log(this.props, this.state);
  //     // 死办法 可通过将更新前后的props和state的值进行比较 来选择是否要更新组件
  //     // if(nextState.idol == this.state.idol) return false
  //     // return true;
  //     // 优化写法
  //     return nextProps.idol != this.props.idol;
  //   }
  render() {
    //  继承Component类时 只要父组件视图更新（render） 子组件无论是否使用到父组件传来的值都会重新更新视图（render） 效率低下
    console.log("son--render");
    const { idol } = this.props;
    return (
      <div style={{ backgroundColor: "pink", width: "300px", height: "100px" }}>
        <h2>我是儿子组件</h2>
        <h3>我爹要去{idol}家吃饭</h3>
      </div>
    );
  }
}
