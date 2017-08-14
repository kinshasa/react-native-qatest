/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.6.12 上午 10:00
 * @Desc: 全局变量和对象声明
 * @Name: globalglobalConfig.js
 * @LifeCycle：https://github.com/kinshasa/react-native-qatest
 */

import React, {Component, PropTypes} from 'react';
import {Alert, Platform, Dimensions,StatusBar,PixelRatio} from "react-native";
import LocalStorage from "../utils/LocalStorage";
import Dialog from "../../src/components/Dialog";
import NativeModules from "../../src/components/native/NativeModules";
import Loggers from '../utils/Loggers';
import TitleBar from "./../../src/components/bar/TitleBar";

let Config = global;
const IPHONE_6PLUS_WIDTH = 1242;
class Configs {

    static getWidth(): String{
        return Dimensions.get('window').width;
    }

    static renderTitleBar(props): String{
        return <TitleBar {...props}/>;
    }
    static getStatusBarHeight(): Number{

        return StatusBar.currentHeight;
    }
}

//设备信息

Config.getWidth = function (): String {
    return Dimensions.get('window').width;
};

Config.getStatusBarHeight = function () : Number{

    return StatusBar.currentHeight;
};

Config.px2dp = function (px) : Number{

    return px/IPHONE_6PLUS_WIDTH*getWidth();
};

Config.dp2px = function (dp) : Number{

    return PixelRatio.getPixelSizeForLayoutSize(dp);
};

/**
 * 后期可以静态化
 */
Config.getHeight = function (): String {
    return Dimensions.get('window').height;
};

Config.getWindows = function () {
    return Dimensions.get('window');
};

Config.getOS = function () {
    return Platform.OS;

};

//存储系统

/**
 * 本地存储
 * @type {{save, saveById, load, loadById, getIdsForKey, getAllDataForKey, clearMapForKey, clear}}
 */
Config.LocalStorage = LocalStorage;

//交互系统

/**
 * 对话框
 * @returns {{show: show, getStatus: getStatus}}
 */
Config.getDialog = function () {

    return Dialog;
};

/**
 * Toast提示
 * @param str
 */
Config.showToast = function (str: String) {

};


//工具类

/**
 * 判断是否为JSON格式
 * @param o
 * @returns {boolean}
 */
Config.isJson = function (o): boolean {
    let check = typeof(o) === "object" && Object.prototype.toString.call(o).toLowerCase() === "[object object]" && !o.length;
    return check;
};

/**
 * 日志系统
 */
Config.Loggers = Loggers;
Config.Log = Loggers.v;
/**
 * 网络请求
 * @param callback
 * @param exception
 * @returns {Promise.<void>}
 * @constructor
 */
Config.HttpRequest = async function (callback, exception) {

    try {
        let response = await {data: {msg: ''}};
        callback && callback(response);
    }
    catch (e) {
        exception && exception(e.message);
    }
};

Config.start3rdPay = function (prePay, type, callback, excption) {
    if(NativeModules.Pay.start3rdPay){
        NativeModules.Pay.start3rdPay(prePay, type, callback, excption);
    }else{
        alert('不支持的Native方法')
    }
};


Config.init = function () {
    console.log('globalConfig:init() success','GLOBAL','err');
};

Loggers.s('globalConfig init success',1234567);

Config.Configs = Configs;
export default Configs;