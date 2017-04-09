/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.3.9 下午 3:35
 * @Desc: 配置文件
 * @Name: index.js
 * @LifeCycle：https://github.com/kinshasa/react-native-qatest
 */


import {Dimensions, Platform} from 'react-native';
const {width,height} = Dimensions.get('window');
import Http from "../../common/utils/Http";
import infoLog from 'infoLog';

const log = false;
global.config = {
//Tool工具类声明
    Http,
    infoLog,
    //配置信息声明
    log,
    OS: Platform.OS,
    width,
    height,
};

//Tool工具类声明
//global.Http = Http;
/*global.infoLog = infoLog;

//配置信息声明
global.log = false;
global.OS = Platform.OS;
global.width = window.width;
global.height = window.height;*/

//disable console.log
if (!__DEV__) {
    global.console = {
        info: () => {},
        log: () => {},
        warn: () => {},
        error: () => {},
    };
}


global = Object.assign(global, global.config);

//export default global.config;