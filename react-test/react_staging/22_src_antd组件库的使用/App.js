import React, { Component } from "react";
import { Button } from "antd";
// antd的图标库是单独的一个库
import { SmileOutlined, SyncOutlined,SearchOutlined } from "@ant-design/icons";

// antd需要手动引入样式文件  如要实现antd的按需引入 则新建config-overrides.js文件修改配置
// import "antd/dist/antd.css";

export default class App extends Component {
  render() {
    return (
      <div>
        App...
        <button>点俺</button>
        {/* 按钮 */}
        <Button type="primary">Primary Button</Button>
        <Button>Default Button</Button>
        <Button type="ghost">Ghost Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <Button type="link">Link Button</Button>
        <Button type="text">Text Button</Button>
        {/* 图标 还能带动效和属性*/}
        <SmileOutlined />
        <SyncOutlined spin />
        <SmileOutlined rotate={180} />
        {/* 带图标的按钮 */}
        <Button type="primary" shape="circle" icon={<SearchOutlined />} />
      </div>
    );
  }
}
