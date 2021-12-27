// 设置代理文件 采用CJS写法

// 引入内置模块
const proxy = require("http-proxy-middleware");
// 写对象兼容性有问题 写函数通用
module.exports = function (app) {
  app.use(
    //'api'是需要转发的请求前缀
    proxy("/api", {
      target: "http://localhost:5000", //要转发的目标地址
      changeOrigin: true, //默认false 让接收服务器知道请求是从哪里发来的 控制服务器收到的请求头中Host字段（标识这个请求是从哪里发出的）的值
      pathRewrite: {"^/api": ""},//请求路径重写  把api0替换成空字符串 '记得加/'
    }),
  );
};
