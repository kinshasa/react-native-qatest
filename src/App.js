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
import Http from "../common/utils/Http";
import config from "../common/config";
import DropdownAlert from "react-native-dropdownalert";


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
        InteractionManager.runAfterInteractions(() => {
            // ...耗时较长的同步的任务...
            this.addEventListener();
            this.showDropDownAlert('info','App周期信息','App初始化完成');
        });


    }

    addEventListener = () => {
        Linking.addEventListener('url', (event) => {
            this.showDropDownAlert('info','收到外部调用',JSON.stringify(event));
        });
    };


    componentWillUnmount() {
        console.log('App componentWillUnmount()');
        this.rmEventListener();
    }

    rmEventListener = () => {
        Linking.removeEventListener('url', (event) => {
            console.log('App rmEventListener() event:', event);
        });
    };


    showDropDownAlert = (type,title,msg) => {
        console.log('App showDropDownAlert() event:', msg);
        setTimeout(() => {
            this.dropdown && this.dropdown.alertWithType(type, title, msg);
        }, 500);

    };

    closeDropDownAlert(data) {
        console.log('App closeDropDownAlert() data:', data);
        setTimeout(() => {
            this.dropdown && this.dropdown.onClose();
        }, 2000);
    }

    render() {
        return (
            <View style={AppStyles.container}>
                <MainProvider />
                <DropdownAlert
                    ref={(ref) => this.dropdown = ref}
                    titleNumOfLines={0}
                    messageNumOfLines={0}
                    closeInterval={4000}
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
