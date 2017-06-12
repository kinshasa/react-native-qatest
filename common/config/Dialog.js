/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.6.12 上午 11:23
 * @Desc: 公共组件 - Dialog
 * @Name: Dialog.js
 * @LifeCycle：https://github.com/kinshasa/react-native-qatest
 */
import {Alert} from "react-native";

let isShow = false;

const show = function (msg = {title: '标题', text: '内容'}, onOK, onCancel) {

    isShow = true;

    Alert.alert(
        msg.title,
        msg.text,
        [
            {
                text: 'Cancel', onPress: () => {
                isShow = false;
                onCancel && onCancel();
            }, style: 'cancel'
            },
            {
                text: 'OK', onPress: () => {
                isShow = false;
                onOK && onOK();
            }
            },
        ],
    );
};

const getStatus = function () {
    return isShow;
};


export default Dialog = {show, getStatus};