/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.3.9 下午 3:35
 * @Desc: 配置文件
 * @Name: index.js
 * @LifeCycle：https://github.com/kinshasa/react-native-qatest
 */


import {Dimensions, Platform} from 'react-native';
const window = Dimensions.get('window');

global.config={
    log:false,
    OS:Platform.OS,
    window
};

//disable console.log
if (!__DEV__) {
    global.console = {
        info: () => {},
        log: () => {},
        warn: () => {},
        error: () => {},
    };
}

export default global.config;