/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.6.12 上午 10:00
 * @Desc: 全局变量和对象声明
 * @Name: globalglobalConfig.js
 * @LifeCycle：https://github.com/kinshasa/react-native-qatest
 */

import {Alert, Platform, Dimensions} from "react-native";
import LocalStorage from "./LocalStorage";
import Dialog from "./Dialog";
import NativeModules from "../../src/components/native/NativeModules";
import * as Logger from '../utils/Logger';


let globalConfig = global;

//设备信息

globalConfig.getWidth = function (): String {
    return Dimensions.get('window').width;
};

/**
 * 后期可以静态化
 */
globalConfig.getHeight = function (): String {
    return Dimensions.get('window').height;
};

globalConfig.getWindows = function () {
    return Dimensions.get('window');
};

globalConfig.getOS = function () {
    return Platform.OS;

};

//存储系统

/**
 * 本地存储
 * @returns {{save: save, load: load, clear: clear}}
 */
globalConfig.getStorage = function () {

    return LocalStorage;
};

//交互系统

/**
 * 对话框
 * @returns {{show: show, getStatus: getStatus}}
 */
globalConfig.getDialog = function () {

    return Dialog;
};

/**
 * Toast提示
 * @param str
 */
globalConfig.showToast = function (str: String) {

};


//工具类

/**
 * 判断是否为JSON格式
 * @param o
 * @returns {boolean}
 */
globalConfig.isJson = function (o): boolean {
    let check = typeof(o) === "object" && Object.prototype.toString.call(o).toLowerCase() === "[object object]" && !o.length;
    return check;
};

/**
 * 日志系统
 */
// globalConfig.Logger = Logger;
globalConfig.Log = function (...args) {
    //Logger.Log(...args);
};

/**
 * 网络请求
 * @param callback
 * @param exception
 * @returns {Promise.<void>}
 * @constructor
 */
globalConfig.HttpRequest = async function (callback, exception) {

    try {
        let response = await {data: {msg: ''}};
        callback && callback(response);
    }
    catch (e) {
        exception && exception(e.message);
    }
};

globalConfig.start3rdPay = function (prePay, type, callback, excption) {
    if(NativeModules.Pay.start3rdPay){
        NativeModules.Pay.start3rdPay(prePay, type, callback, excption);
    }else{
        alert('不支持的Native方法')
    }
};


globalConfig.init = function () {
    console.log('globalConfig:init() success','GLOBAL','err');
};