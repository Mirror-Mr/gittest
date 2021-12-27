import React, { Component,Fragment } from 'react'
// import Demo from "./components/1_setState"
import Demo from "./components/8_ErrorBoundray/Parent"

export default class App extends Component {
    render() {
        return (
            // Fragment标签上最多写key一个属性值作为唯一标识 写多余属性会报错
            <Fragment key={1}>
                <Demo />
            </Fragment>
        )
    }
}
