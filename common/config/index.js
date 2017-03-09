/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.3.9 下午 3:35
 * @Desc: 配置文件
 * @Name: index.js
 * @LifeCycle：https://github.com/kinshasa/react-native-qatest
 */
if (!__DEV__) {
    global.console = {
        info: () => {},
        log: () => {},
        warn: () => {},
        error: () => {},
    };
}

global.config={
    log:false
};