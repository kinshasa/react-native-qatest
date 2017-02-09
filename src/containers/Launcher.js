/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.2.9 下午 4:33
 * @Desc: 公共组件 - 渲染的入口
 * @NAME: Launcher.js
 * @LIFECYCLE：http://www.tuicool.com/articles/nu6zInB
 */

import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';

import ScrollableTabView, {ScrollableTabBar,} from 'react-native-scrollable-tab-view';
import TabNavigator from 'react-native-tab-navigator';

import HomePage from "../containers/home/HomePage"
import UserCenter from "../containers/user/UserCenter"

const LAUNCHER_IMG_HOME = require("../assets/home.png");
const LAUNCHER_IMG_USER = require("../assets/home.png");

export default class Launcher extends Component {

    /**
     * 父组件传入的属性值
     * @type {{style: *, account: *, name: *, isTrue: *, callback: *}}
     */
    static propTypes = {
        style: View.propTypes.style,
        account: PropTypes.number,
        name: PropTypes.string,
        isTrue: PropTypes.bool,
        callback: PropTypes.func,
    };

    /**
     * 父组件传入的数据
     * @type {{data: {}}}
     */
    static defaultProps = {
        data: {}
    };

    /**
     * 构造函数
     * @param props
     * @param context
     */
    constructor(props, context) {
        console.log("Launcher", "constructor()");
        super(props, context);
        this.state = {
            selectedTab: "T1"
        };
    }

    /**
     * 当前组件渲染次数
     * @type {number}
     */
    renderCount = 0;

    /**
     * 组件加载前
     * 生命周期中仅被调用1次，可以使用SetState
     */
    componentWillMount() {
        console.log("Launcher", "componentWillMount()");
    }

    /**
     * 组件加载后
     * 生命周期中仅被调用1次，可以使用SetState
     * 用于网络请求和页面渲染
     */
    componentDidMount() {
        console.log("Launcher", "componentDidMount()");
    }

    /**
     * 父组件属性值变更监听
     * 可以使用SetState
     * @param newProps
     */
    componentWillReceiveProps(newProps) {
        console.log("Launcher", "componentWillReceiveProps():" + newProps);
    }

    /**
     * 属性值/状态值变更后，是否需要刷新页面
     * @param nextProps 是即将被设置的属性，旧的属性还是可以通过 this.props 来获取。
     * @param nextState 表示组件即将更新的状态值。
     * @returns {boolean} 默认true, 返回值决定是否需要更新组件，如果 true 表示需要更新，继续走后面的更新流程。
     */
    shouldComponentUpdate(nextProps, nextState) {
        let isUpdate = (this.props != nextProps) || (this.state != nextState);
        console.log("Launcher", "shouldComponentUpdate():" + isUpdate);
        return isUpdate;
    }

    /**
     * 如果组件状态或者属性改变，并且shouldComponentUpdate返回为 true
     * @param nextProps 更新之后的属性
     * @param nextState 更新之后的状态
     */
    componentWillUpdate(nextProps, nextState) {
        console.log("Launcher", "componentWillUpdate()");
    }

    /**
     * 更新完成界面之后通知
     * @param prevProps 更新之前的属性
     * @param prevState 更新之前的状态
     * @returns {boolean}
     */
    componentDidUpdate(prevProps, prevState) {
        console.log("Launcher", "componentDidUpdate()");
    }

    /**
     * 组件即将卸载前调用
     * 在这个函数中，可以做一些组件相关的清理工作，例如取消计时器、网络请求等。
     */
    componentDidUnMount() {
        console.log("Launcher", "componentDidUnMount()");

    }

    /**
     * 组件更新
     * @returns {XML}
     */
    render() {
        this.renderCount++;
        console.log("Launcher", "render():" + this.renderCount);
        return (
            <View style={LauncherStyles.container}>
                {this.renderTable()}
            </View>
        );
    }

    /**
     * 返回TableItem组件
     * @param tag 标记
     * @param title 标题
     * @param img 默认的图标
     * @param selectedImg 选中的图标
     * @param childView TableItem中的View
     * @returns {XML}
     */
    renderTabItem(tag, title, img, selectedImg, childView) {
        return (
            <TabNavigator.Item
                selected={this.state.selectedTab === tag}
                title={title}
                renderIcon={() => <Image style={LauncherStyles.tabIcon} source={img} />}
                renderSelectedIcon={() => <Image style={LauncherStyles.tabIcon} source={selectedImg} />}
                badgeText="1"
                onPress={() => this.setState({ selectedTab: tag})}>
                {childView}
            </TabNavigator.Item>
        );
    }

    /**
     * 返回TableView组件
     * @returns {XML}
     */
    renderTable() {
        return (
            <TabNavigator
                tabBarStyle={LauncherStyles.tab}
                hidesTabTouch={true}
            >
                {this.renderTabItem("T1", "首页", LAUNCHER_IMG_HOME, LAUNCHER_IMG_HOME, <HomePage />)}
                {this.renderTabItem("T2", "用户中心", LAUNCHER_IMG_USER, LAUNCHER_IMG_USER, <UserCenter />)}
            </TabNavigator>
        );
    }

    /**
     * 返回旧的组件
     * @returns {XML}
     */
    renderBody() {
        return (
            <ScrollableTabView
                scrollWithoutAnimation={true}
                style={LauncherStyles.container}
                contentProps={{}}
                initialPage={0}
                renderTabBar={() =>  <ScrollableTabBar/>}
            >
                <View tabLabel="12354"><Text >123</Text></View>
                <View tabLabel="12354"><Text >123</Text></View>
                <View tabLabel="12354"><Text >123</Text></View>
            </ScrollableTabView>
        );
    }

}

const LauncherStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tab: {
        height: 49,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    tabIcon: {
        width: 30,
        height: 35,
        resizeMode: 'stretch',
        marginTop: 7
    }
});