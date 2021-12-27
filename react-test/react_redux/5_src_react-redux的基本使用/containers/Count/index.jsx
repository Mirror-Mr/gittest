/**
 * CountUI组件的容器组件
 * 在容器组件中和redux进行交互
 */
// 在容器组件内引入store会报错  store应通过外层传进来
// import store from "../../redux/store";
// 引入connect用于连接UI组件和redux
import { connect } from "react-redux";
// 引入action
import {
  createAddCountAction,
  createDelCountAction,
  createAddCountAsyncAction,
} from "../../redux/count_action_creator";

/**
 * 1.mapStateToProps函数返回的是一个对象
 * 2.返回的对象中的key就作为传递给UI组件的props的key，value就作为传递给UI组件的props的key所对应的value
 * 3.mapStateToProps用于传递状态
 *  */
// map映射 state状态 to到 props
function mapStateToProps(state) {
  return {
    count: state,
  };
}

/**
 * 1.mapDispatchToProps函数返回的是一个对象
 * 2.返回的对象中的key就作为传递给UI组件的props的key，value就作为传递给UI组件的props的key所对应的value
 * 3.mapDispatchToProps用于传递操作状态的方法
 *  */
// map映射 dispatch to到 props
function mapDispatchToProps(dispatch) {
  return {
    addCount: (value) => {
      dispatch(createAddCountAction(value));
    },
    delCount: (value) => {
      dispatch(createDelCountAction(value));
    },
    addAsyncCount: (value, time) => {
      dispatch(createAddCountAsyncAction(value, time));
    },
  };
}
// 使用connect()()创建并暴露一个Count的容器组件
// connect在调用时 需要往里面传递两个参数
export default connect(mapStateToProps, mapDispatchToProps)(CountUI);
