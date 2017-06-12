/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.5.12 下午 2:08
 * @Desc: 公共组件 - Logger
 * @Name: Logger.js
 * @LifeCycle：https://github.com/kinshasa/react-native-qatest
 */

/**
 * 全局的日志打印
 * @param args
 * @constructor
 */
const Log = function (...args) {
    console.log(...args)
};


const save = function (tag, data) {

    let log = new OneLog();
    log.setTag(tag);
    log.setData(data);

    // if (!getApp().logQueue) {
    //     getApp().logQueue = [];
    // }
    // getApp().logQueue.push(log)
};

const get = function () {

    //return getApp().logQueue;
};

const clear = function () {

};

export default Logger = {Log, save, get, clear}