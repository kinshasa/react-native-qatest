/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.1.23 下午 4:02
 * @Desc: App入口
 * @NAME: App.js
 * @LIFECYCLE：http://www.tuicool.com/articles/nu6zInB
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import MainProvider from "./MainProvider"

export default class App extends Component {


    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <MainProvider />

        );
    }
}

AppRegistry.registerComponent('QATest', () => App);
