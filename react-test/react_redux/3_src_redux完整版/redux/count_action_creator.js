/**
 * 该文件专门为Count组件生成的action对象们
 */
import { ADDCOUNT, DELCOUNT } from "./constant";
// 当箭头函数的返回值为对象时 要用()包裹 因为对象的{}会被当作函数体
export const createDelCountAction = (data) => ({ type: DELCOUNT, data });
export const createAddCountAction = (data) => ({ type: ADDCOUNT, data });
