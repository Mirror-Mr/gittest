/**
 * 该文件专门为Count组件生成的action对象们
 */
import { ADDCOUNT, DELCOUNT } from "../constant";
// import store from "../redux/store"
// 当箭头函数的返回值为对象时 要用()包裹 因为对象的{}会被当作函数体
// 同步action 即action的值为Object类型的一般对象
export const createDelCountAction = (data) => ({ type: DELCOUNT, data });
export const createAddCountAction = (data) => ({ type: ADDCOUNT, data });

// 异步action 即action的值为函数 异步action中一般都会调用同步action 异步action不是一定要用的
export const createAddCountAsyncAction = (data, time) => {
  return (dispatch) => {
    setTimeout(() => {
      //   store.dispatch(createAddCountAction(data));
    //   dispatch为参数 可不使用store对象调用
      dispatch(createAddCountAction(data));
    }, time);
  };
};
