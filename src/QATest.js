/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.1.23 下午 4:02
 * @Todo: App入口
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import MainRoute from "./MainRoute"
import {Actions, Scene, Router} from 'react-native-router-flux';

export default class QATest extends Component {


    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentDidUnMount() {

    }

    render() {
        return (
            <Router
                scenes={MainRoute}

            />
        );
    }
}

AppRegistry.registerComponent('QATest', () => QATest);
