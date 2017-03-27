/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.1.23 下午 4:02
 * @Desc: App入口
 * @NAME: App.js
 * @LIFECYCLE：http://www.tuicool.com/articles/nu6zInB
 */
import React, {Component} from "react";
import {AppRegistry, Linking} from "react-native";

import MainProvider from "./MainProvider";
import Http from "../common/utils/Http";
import config from "../common/config";


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
        console.log('App componentDidMount() config:',config);

        Linking.getInitialURL().then((url) => {
            if (url) {
                console.log('Initial url is: ' + url);
                alert(url)
            }
        }).catch(err => console.error('An error occurred', err));
        Linking.addEventListener('url', (event)=>{console.log('event:',event.url);});

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
