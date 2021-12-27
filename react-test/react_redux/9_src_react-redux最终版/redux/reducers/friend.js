import { ADDFRIEND } from "../constant";

// 初始化
const initState = [{ id: 1, name: "ng", age: 20 }];
export default function friendReducer(preState = initState, action) {
  const { type, data } = action;
  switch (type) {
    case ADDFRIEND: //添加一个朋友
      // preState.unshift(data) //此处不能这么写，会导致preState被改写 reducer必须是个纯函数
      return [...preState, data];
    default:
      return preState;
  }
}
