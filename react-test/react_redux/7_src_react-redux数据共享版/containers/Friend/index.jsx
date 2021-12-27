import React, { Component } from "react";
import { connect } from "react-redux";
import { createAddFriendAction } from "../../redux/action_creators/friend";
import {nanoid} from "nanoid";
class FriendUI extends Component {
  addMyFriend = () => {
    const name = this.nameNode.value;
    const age = this.ageNode.value;
    this.props.addFriend({id:nanoid(),name,age})
    this.nameNode.value = "";
    this.ageNode.value = "";
  };
  render() {
    console.log(this.props.friendList)
    return (
      <div>
        <h2>我是Friend组件，楼上组件的和为：{this.props.count}</h2>
        <input type="text" ref={(c) => (this.nameNode = c)} />
        &nbsp;
        <input type="text" ref={(c) => (this.ageNode = c)} />
        &nbsp;
        <button onClick={this.addMyFriend}>添加朋友</button>
        <ul>
          {
            this.props.friendList.map(friend=>{
              return <li key={friend.id}>{friend.name} -- {friend.age}</li>
            })
          }
        </ul>
      </div>
    );
  }
}

// 汇总reducer后 传来的state为 包含store中存放的所有数据 的对象
export default connect((state) => ({ friendList: state.friendList,count:state.count }), {
  addFriend: createAddFriendAction,
})(FriendUI);
