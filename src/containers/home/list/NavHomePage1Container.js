/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.4.6 下午 12:02
 * @Desc: 公共组件 - NavHomePage1Container
 * @Name: NavHomePage1Container.js
 * @LifeCycle：https://github.com/kinshasa/react-native-qatest
 */

import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

export default class NavHomePage1Container extends Component {

    static navigationOptions = {
        title: 'Chat with Lucy',
    };

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
        console.log("NavHomePage1Container constructor()");
        super(props, context);
        this.state = {};
    }

    /**
     * 当前组件渲染次数
     * @type {number}
     */
    count = 0;

    componentWillMount() {
        console.log("NavHomePage1Container componentWillMount()", new Date());
    }

    componentDidMount() {
        console.log("NavHomePage1Container componentDidMount()", new Date());
    }

    /**
     * 组件即将卸载前调用
     * 在这个函数中，可以做一些组件相关的清理工作，例如取消计时器、网络请求等。
     */
    componentWillUnmount() {
        console.log("NavHomePage1Container componentWillUnmount()");

    }

    render() {
        this.count++;
        console.log("NavHomePage1Container render() count:", this.count);
        return (
            <View style={NavHomePage1ContainerStyles.container}>
                <Text>Chat with Lucy</Text>
            </View>
        );
    }

}

const NavHomePage1ContainerStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
});