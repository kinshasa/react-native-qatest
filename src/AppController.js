/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.3.28 下午 5:06
 * @Desc: 公共组件 - LauncherController
 * @Name: LauncherController.js
 * @LifeCycle：https://github.com/kinshasa/react-native-qatest
 */
import {Alert, InteractionManager} from "react-native";

// init App.
if (!global.App) {
    global.App = {};
    global.getApp = getApp;
}
//init Crash.
initGlobalHandler();

//init platform.
initPlatform();


export function init() {
    Log("AppController:init()");

    //init Http.
    if (!App.Http) {
        App.Http = require('../common/utils/Http');
    }

    //init infoLog.
    if (!App.infoLog) {
        App.infoLog = require('infoLog');
    }

    //init logs.
    initLog();


    Log('AppController:init() App', App);
}

function getApp(){
    return global.App;
}


/**
 * 设置全局崩溃采集
 */
function initGlobalHandler() {
    Log("AppController:initGlobalHandler()");

    ErrorUtils.setGlobalHandler(error => {

        let msg = error && error.message || 'undefined';
        Log('AppController:setGlobalHandler()', msg);
        if (App.msg === msg) {
            return;
        }
        App.msg = msg;

        Alert.alert(
            '捕捉异常信息',
            msg,
            [
                {text: 'Cancel', onPress: () => Log('Cancel Pressed'), style: 'cancel'},
                {text: 'OK', onPress: () => Log('OK Pressed')},
            ],
        );
    });
}

function Log(...args) {
    console.log(...args)
}

function initLog() {
    Log("AppController:initLog()");
    //init logUtils.
    global.Log = Log;
    let config = require('../common/config');
    if (!config._APP_LOG_ || !__DEV__) {
        console = {
            info: () => {
            },
            log: () => {
            },
            warn: () => {
            },
            error: () => {
            },
        };
    }
    Log("AppController:initLog() test Log() enable.");
}

function initPlatform() {
    Log("AppController:initPlatform()");
    let reactNative = require('react-native');
    if (!App.Platform) {
        App.Platform = reactNative.Platform;
    }
    if (!App.Window) {
        App.Window = reactNative.Dimensions.get('window');
    }
}

/**
 * 全局数据保存
 * @param key
 * @param value
 */
export function setAppConstant(key, value) {


}

/**
 * 返回全局数据
 * @param key
 * @param value
 * @returns {string}
 */
export function getAppConstant(key, value) {


    return "";
}

export function showDropDownAlert(type, title, msg) {
    InteractionManager.runAfterInteractions(() => {
        setTimeout(() => {
            if (App.dropdown && App.dropdown.alertWithType) {
                App.dropdown && App.dropdown.alertWithType(type, title, msg);
            } else {
                Log("AppController:showDropDownAlert() App.dropdown is null.");
            }
        }, 500);
    });

}

export function closeDropDownAlert(timeout = 2000) {
    setTimeout(() => {
        App.dropdown && App.dropdown.onClose();
    }, timeout);
}