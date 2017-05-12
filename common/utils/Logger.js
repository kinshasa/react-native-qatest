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
export function Log(...args) {
    console.log(...args)
}


export function saveLog(tag, data) {

    let log = new OneLog();
    log.setTag(tag);
    log.setData(data);

    if(!getApp().logQueue){
        getApp().logQueue = [];
    }
    getApp().logQueue.push(log)
}

export function getLog() {

    return getApp().logQueue;
}

class OneLog {

    tag;
    data;

    setTag(t){
        this.tag = t;
    }

    getTag(){
        return this.tag;
    }

    setData(d){
        this.data = d;
    }

    getData(){
        return this.data;
    }

}