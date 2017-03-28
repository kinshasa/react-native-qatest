/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.1.23 下午 4:02
 * @Desc: App入口
 * @NAME: App.js
 * @LIFECYCLE：http://www.tuicool.com/articles/nu6zInB
 */
import React, {Component} from "react";
import {View, AppRegistry, Linking} from "react-native";

import MainProvider from "./MainProvider";
import Http from "../common/utils/Http";
import config from "../common/config";
import DropdownAlert from 'react-native-dropdownalert'


export default class App extends Component {


    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
        global.Http = Http;
    }

    componentWillMount() {

    }

    componentDidMount() {
        console.log('App componentDidMount() config:', config);

        Linking.getInitialURL().then((url) => {
            if (url) {
                console.log('Initial url is: ' + url);
            }
        }).catch(err => console.error('An error occurred', err));

        Linking.addEventListener('url', (event) => {
            console.log('event:', event);
        });

    }

    componentWillUnmount() {
        console.log('App componentWillUnmount()');
        Linking.removeEventListener('url', (event) => {
            console.log('event2:', event);
        });
    }

    render() {
        return (
            <MainProvider />
        );
    }
}

AppRegistry.registerComponent('QATest', () => App);
