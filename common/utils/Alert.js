/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.5.12 下午 2:11
 * @Desc: 公共组件 - Alert
 * @Name: Alert.js
 * @LifeCycle：https://github.com/kinshasa/react-native-qatest
 */

import {Alert} from "react-native";


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