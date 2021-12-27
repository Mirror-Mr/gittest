/*
 * 1.该文件是用于创建一个为Count组件服务的reducer，reducer的本质就是一个函数
 * 2.reducer函数会接收到两个参数，分别为：之前的状态（preState），动作对象（action）
 */
import { ADDCOUNT, DELCOUNT } from "./constant";

// 初始化preState
const initState = 0;
export default function countReducer(preState = initState, action) {
  console.log(preState, action);
  // 初始化时 preState为undefined action中type为@@redux/INITxxxx,data没得
  // 从动作对象action中获取类型type和数据data
  const { type, data } = action;
  // 根据type决定如何加工数据
  switch (type) {
    case ADDCOUNT: //加
      return preState + data;
    case DELCOUNT: //减
      return preState - data;
    default:
      //初始化
      return preState;
  }
}
