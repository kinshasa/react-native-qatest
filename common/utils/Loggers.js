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

let globalLogger = global;
let config = require('../config');
const KEY = 'logger';


if (!config._APP_LOG_ || !globalLogger.__DEV__) {
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

const v = function (...args) {
    console.log(...args)
};

const s = function (...args) {
    v('Logger.s():',...args);
    let msg = '';
    let id = new Date().getTime();
    msg += args.map((item,i)=>{return item});
    LocalStorage.saveById(KEY,args,id);
};


const g = async function () {
    return await LocalStorage.getAllDataForKey(KEY);
};

const c = function () {
    LocalStorage.clearMapForKey(KEY);
};

export default {v,s,g,c};