/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.3.28 下午 5:06
 * @Desc: 公共组件 - LauncherController
 * @Name: LauncherController.js
 * @LifeCycle：https://github.com/kinshasa/react-native-qatest
 */
import {Alert} from "react-native";

err = "";

export function setGlobalHandler() {

    ErrorUtils.setGlobalHandler(error => {

        let msg = "全局崩溃错误 NULL";

        if (error) {
            msg = error.message;
        }

        if (msg == err)
            return;

        Alert.alert(
            '全局崩溃错误',
            msg,
            [
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
        );
    });
}