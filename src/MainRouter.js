/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.1.23 下午 4:02
 * @Desc: 路由
 * @NAME: MainRouter.js
 * @LIFECYCLE：http://www.tuicool.com/articles/nu6zInB
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import {Actions, Scene, Router} from 'react-native-router-flux';
import scenes from './scenes';

export default class MainRouter extends Component {


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
                <Router scenes={scenes}/>

        );
    }
}