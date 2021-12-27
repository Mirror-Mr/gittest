import { ADDFRIEND } from "../constant";

// 初始化
const initState = [{ id: 1, name: "ng", age: 20 }];
export default function friendReducer(preState = initState, action) {
  const { type, data } = action;
  switch (type) {
    case ADDFRIEND://添加一个朋友
      return [data, ...preState];
    default:
      return preState;
  }
}
