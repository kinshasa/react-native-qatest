/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.3.15 下午 4:41
 * @Desc: 公共组件 - HotFixPushyContainer
 * @Name: HotFixPushyContainer.js
 * @LifeCycle：https://github.com/kinshasa/react-native-qatest
 */

import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Platform,
    TouchableOpacity,
    Alert
} from 'react-native';
import {
    isFirstTime,
    isRolledBack,
    packageVersion,
    currentVersion,
    checkUpdate,
    downloadUpdate,
    switchVersion,
    switchVersionLater,
    markSuccess,
} from 'react-native-update';

import _updateConfig from '../../../../update.json';
const {appKey} = _updateConfig[Platform.OS];


export default class HotFixPushyContainer extends Component {

    static propTypes = {
        style: View.propTypes.style,
        account: PropTypes.number,
        name: PropTypes.string,
        isTrue: PropTypes.bool,
        callback: PropTypes.func,
    };

    static defaultProps = {
        data: {}
    };

    constructor(props, context) {
        console.log("HotFixPushyContainer", `constructor()`);
        super(props, context);
        this.state = {};
    }

    /**
     * 当前组件渲染次数
     * @type {number}
     */
    count = 0;

    componentWillMount() {
        console.log("HotFixPushyContainer componentWillMount()", ``);
        if (isFirstTime) {
            Alert.alert('提示', '这是当前版本第一次启动,是否要模拟启动失败?失败将回滚到上一版本', [
                {text: '是', onPress: ()=>{throw new Error('模拟启动失败,请重启应用')}},
                {text: '否', onPress: ()=>{markSuccess()}},
            ]);
        } else if (isRolledBack) {
            Alert.alert('提示', '刚刚更新失败了,版本被回滚.');
        }
    }

    doUpdate = info => {
        downloadUpdate(info).then(hash => {
            Alert.alert('提示', '下载完毕,是否重启应用?', [
                {text: '是', onPress: ()=>{switchVersion(hash);}},
                {text: '否',},
                {text: '下次启动时', onPress: ()=>{switchVersionLater(hash);}},
            ]);
        }).catch(err => {
            Alert.alert('提示', '更新失败.');
        });
    };

    checkUpdate = () => {
        checkUpdate(appKey).then(info => {
            if (info.expired) {
                Alert.alert('提示', '您的应用版本已更新,请前往应用商店下载新的版本', [
                    {text: '确定', onPress: ()=>{info.downloadUrl && Linking.openURL(info.downloadUrl)}},
                ]);
            } else if (info.upToDate) {
                Alert.alert('提示', '您的应用版本已是最新.');
            } else {
                Alert.alert('提示', '检查到新的版本'+info.name+',是否下载?\n'+ info.description, [
                    {text: '是', onPress: ()=>{this.doUpdate(info)}},
                    {text: '否',},
                ]);
            }
        }).catch(err => {
            Alert.alert('提示', '更新失败.');
        });
    };

    componentDidMount() {
        console.log("HotFixPushyContainer componentDidMount()", ``);
    }

    /**
     * 父组件属性值变更监听
     * 可以使用SetState
     * @param newProps
     */
    componentWillReceiveProps(newProps) {
        console.log("HotFixPushyContainer componentWillReceiveProps()", newProps);
    }

    /**
     * 属性值/状态值变更后，是否需要刷新页面
     * @param nextProps 是即将被设置的属性，旧的属性还是可以通过 this.props 来获取。
     * @param nextState 表示组件即将更新的状态值。
     * @returns {boolean} 默认true, 返回值决定是否需要更新组件，如果 true 表示需要更新，继续走后面的更新流程。
     */
    shouldComponentUpdate(nextProps, nextState) {
        let isUpdate = (this.props != nextProps) || (this.state != nextState);
        console.log("HotFixPushyContainer shouldComponentUpdate()", ``);
        return isUpdate;
    }

    /**
     * 如果组件状态或者属性改变，并且shouldComponentUpdate返回为 true
     * @param nextProps 更新之后的属性
     * @param nextState 更新之后的状态
     */
    componentWillUpdate(nextProps, nextState) {
        console.log("HotFixPushyContainer componentWillUpdate()", ``);
    }

    /**
     * 更新完成界面之后通知
     * @param prevProps 更新之前的属性
     * @param prevState 更新之前的状态
     * @returns {boolean}
     */
    componentDidUpdate(prevProps, prevState) {
        console.log("HotFixPushyContainer componentDidUpdate()", ``);
    }

    /**
     * 组件即将卸载前调用
     * 在这个函数中，可以做一些组件相关的清理工作，例如取消计时器、网络请求等。
     */
    componentWillUnmount() {
        console.log("HotFixPushyContainer componentWillUnmount()", ``);

    }

    render() {
        this.count++;
        console.log("HotFixPushyContainer render() count:", `${this.count}`);
        return (
            <View style={HotFixPushyContainerStyles.container}>
                <Text style={HotFixPushyContainerStyles.welcome}>
                    欢迎使用热更新服务(使用react-native-HotFixPushyContainer更新完成)
                    欢迎使用热更新服务(使用react-native-HotFixPushyContainer更新完成)
                    欢迎使用热更新服务(使用react-native-HotFixPushyContainer更新完成)
                </Text>
                <Text style={HotFixPushyContainerStyles.instructions}>
                    这是版本一 {'\n'}
                    当前包版本号: {packageVersion}{'\n'}
                    当前版本Hash: {currentVersion||'(空)'}{'\n'}
                </Text>
                <TouchableOpacity onPress={this.checkUpdate}>
                    <Text style={HotFixPushyContainerStyles.instructions}>
                        点击这里检查更新
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }

}

const HotFixPushyContainerStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});