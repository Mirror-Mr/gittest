// 配置具体的修改规则
const { override, fixBabelImports, addLessLoader } = require("customize-cra");
// module.exports = function override(config, env) {
//   // do stuff with the webpack config...
//   return config;
// };
module.exports = override(
  fixBabelImports("import", {
    //import按需引入
    libraryName: "antd", //antd的按需引入
    libraryDirectory: "es", //es的模块化规范
    // style: "css",//要按需引入的是css
    style: true,
  }),
  addLessLoader({
    // 允许用js修改antd底层的less文件
    javascriptEnabled: true,
    // 要修改的变量
    // modifyVars: { "@primary-color": "#1DA57A" },
    modifyVars: { "@primary-color": "orange" },
  })
);
