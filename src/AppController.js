/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.3.28 下午 5:06
 * @Desc: 公共组件 - LauncherController
 * @Name: LauncherController.js
 * @LifeCycle：https://github.com/kinshasa/react-native-qatest
 */
import {Alert,Platform,Dimensions,AsyncStorage} from "react-native";
import * as Logger from '../common/utils/Logger';
import Storage from 'react-native-storage';
import { NativeModules } from 'react-native';

let AppConfig = global;

AppConfig.Pay = NativeModules.Pay;

AppConfig.isJson = function (o) {
    let isJson = typeof(o) === "object" && Object.prototype.toString.call(o).toLowerCase() === "[object object]" && !o.length;
    return isJson;
};


preInit();

/**
 * 1. 预加载，Application生命周期内，只调用一次
 */
function preInit() {
    console.log('AppController::preInit()');
    // init App.
    if (!global.getApp)
        global.getApp = getApp;

    //init Crash.
    initGlobalHandler();

    //init platform.
    initPlatform();

}

/**
 * 2. 初始化，启动App就会初始化一次
 */
export function init() {
    Logger.Log("AppController:init()");

    //init Http.
    if (!getApp().Http) {
        getApp().Http = require('../common/utils/Http');
    }

    //init infoLog.
    if (!getApp().infoLog) {
        getApp().infoLog = require('infoLog');
    }

    //init logs.
    initLog();

    //init Storage
    initStorage();

    Logger.Log('AppController:init() App', getApp());
}

/**
 * 3. 获取APP单例
 * @returns {{}|*}
 */
function getApp() {
    if (!global.App) {
        global.App = {};
    }
    return global.App;
}


/**
 * 设置全局崩溃采集
 */
function initGlobalHandler() {
    Logger.Log("AppController:initGlobalHandler()");

    ErrorUtils.setGlobalHandler(error => {

        let msg = error && error.message || 'undefined';
        Logger.Log('AppController:setGlobalHandler()', msg);
        errAlert(msg);
        /*if (getApp().msg === msg) {
         return;
         }
         getApp().msg = msg;

         Alert.alert(
         '捕捉异常信息',
         msg,
         [
         {text: 'Cancel', onPress: () => Log('Cancel Pressed'), style: 'cancel'},
         {text: 'OK', onPress: () => Log('OK Pressed')},
         ],
         );*/
    });
}

function initLog() {
    Logger.Log("AppController:initLog()");
    //init logUtils.

    if (!global.Log)
        global.Log = Logger.Log;

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

    if (!getApp().Logger) {
        getApp().Logger = Logger;
    }

    if (!getApp().logQueue) {
        getApp().logQueue = [];
    }
    Logger.Log("AppController:initLog() test Log() enable.");
}

function initPlatform() {
    Logger.Log("AppController:initPlatform()");
    if (!getApp().Platform) {
        Logger.Log("AppController:initPlatform() init Platform");
        getApp().Platform = Platform;
    }
    if (!getApp().Window) {
        Logger.Log("AppController:initPlatform() init Window");
        getApp().Window = Dimensions.get('window');
    }
}

function initStorage() {
    if (!getApp().storage) {
        getApp().storage = new Storage({
            size: 1000,
            storageBackend: AsyncStorage,
            defaultExpires: null,
            enableCache: true
        });
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

var isShowAlert = false;

export function errAlert(value) {
    getApp().msg = value;

    if (isShowAlert)
        return;

    Alert.alert(
        '捕捉异常信息',
        getApp().msg,
        [
            {text: 'Cancel', onPress: () => isShowAlert = true, style: 'cancel'},
            {text: 'OK', onPress: () => isShowAlert = false},
        ],
    );
    isShowAlert = false;
}

export function alert(value, cancel, ok) {
    Alert.alert(
        'Info',
        value,
        [
            {text: 'Cancel', onPress: () => cancel && cancel(), style: 'cancel'},
            {text: 'OK', onPress: () => ok && ok()},
        ],
    );
}

export function Toast(key, value) {


}

/**
 * 初始化日志系统
 * @returns {Array}
 */
export function initLogger() {

    if (!getApp().logger) {
        getApp().logger = [];
    }
    return getApp().logger;
}

