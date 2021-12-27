import { ADDFRIEND } from "../constant";
// 创建增加一个朋友的action对象
export const createAddFriendAction = (friend) => ({type: ADDFRIEND,data:friend});
