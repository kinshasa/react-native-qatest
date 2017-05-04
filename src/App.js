/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.1.23 下午 4:02
 * @Desc: App入口
 * @NAME: App.js
 * @LIFECYCLE：http://www.tuicool.com/articles/nu6zInB
 */
import React, {Component} from "react";
import {AppRegistry, InteractionManager, Linking, StyleSheet, View} from "react-native";

import MainProvider from "./MainProvider";
import * as AppController from "./AppController";

import DropDownAlert from "react-native-dropdownalert";

export default class App extends Component {


    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    componentWillMount() {
        AppController.init();
    }

    componentDidMount() {
        console.log('App::componentDidMount() App:',App);
        this.showDropDownAlert('info', 'App周期信息', 'App初始化完成');
        this.addEventListener();
    }

    addEventListener() {
        Linking.addEventListener('url', (event) => {
            this.showDropDownAlert('info', '收到外部调用', JSON.stringify(event));
        });
    }

    removeListener() {
        Linking.removeEventListener('url', (event) => {
            console.log('App::rmEventListener() event:', event);
        });
    }


    showDropDownAlert(type, title, msg,timeout=500) {
        InteractionManager.runAfterInteractions(() => {
            setTimeout(() => {
                if (this.dropdown && this.dropdown.alertWithType) {
                    this.dropdown && this.dropdown.alertWithType(type, title, msg);
                } else {
                    console.log("AppController:showDropDownAlert() App.dropdown is null.");
                }
            }, timeout);
        });

    }

    closeDropDownAlert(timeout = 2000) {
        setTimeout(() => {
            this.dropdown && this.dropdown.onClose();
        }, timeout);
    }


    setRefAppDropDown(ref){
        console.log('App::setRefAppDropDown()');
        if(!this.dropdown){
            this.dropdown = ref;
        }
    }

    componentWillUnmount() {
        console.log('App::componentWillUnmount()');
        this.removeListener();
    }


    render() {
        console.log('App::render()');
        return (
            <View ref={(ref) => console.log('App::render() set refs.')} style={AppStyles.container}>
                <MainProvider />
                <DropDownAlert
                    ref={(ref) => this.setRefAppDropDown(ref)}
                    titleNumOfLines={0}
                    messageNumOfLines={0}
                    closeInterval={2000}
                    showCancel={false}
                    imageSrc={'https://facebook.github.io/react/img/logo_og.png'}
                    containerStyle={{backgroundColor: '#6441A4'}}
                    onCancel={(data) => {
                    }}
                    onClose={(data) => {
                    }}/>
            </View>
        );
    }
}
const AppStyles = StyleSheet.create({
    container: {
        flex: 1
    },
});
AppRegistry.registerComponent('QATest', () => App);
