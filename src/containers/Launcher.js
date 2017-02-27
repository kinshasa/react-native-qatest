/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.2.9 下午 4:33
 * @Desc: 启动器
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
import Icon from 'react-native-vector-icons/Ionicons';

const LAUNCHER_IMG_HOME = ()=><Icon name="ios-home-outline" size={30} color="#4F8EF7"/>;
const LAUNCHER_IMG_HOME_SELECT = ()=><Icon name="ios-home" size={30} color="#4F8EF7"/>;
const LAUNCHER_IMG_USER = ()=><Icon name="ios-people-outline" size={30} color="#4F8EF7"/>;
const LAUNCHER_IMG_USER_SELECT = ()=><Icon name="ios-people" size={30} color="#4F8EF7"/>;

var time1 = new Date();
export default class Launcher extends Component {

    /**
     * 父组件传入的属性值
     * @type {{style: *, account: *, name: *, isTrue: *, callback: *}}
     */
    static propTypes = {};

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
        console.log("Launcher", "constructor() :" + time1);
        time1 = new Date();
        console.log("Launcher", "constructor() :" + time1);
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
        time1 = new Date();
        console.log("Launcher", "componentWillMount()" + time1);
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
        let isUpdate = (this.state != nextState);
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
    componentWillUnmount() {
        time1 = new Date();
        console.log("Launcher", "componentWillUnmount()" + time1);

    }

    /**
     * 组件更新
     * @returns {XML}
     */
    render() {
        this.renderCount++;
        console.log("Launcher", "render() renderCount:" + this.renderCount);
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
                renderIcon={
                        img
                        /*<Image style={LauncherStyles.tabIcon} source={selectedImg} />*/
                    }
                renderSelectedIcon={
                        selectedImg
                        /*<Image style={LauncherStyles.tabIcon} source={selectedImg} />*/
                    }
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
                {this.renderTabItem("T1", "首页", LAUNCHER_IMG_HOME, LAUNCHER_IMG_HOME_SELECT,
                    <HomePage style={{backgroundColor:"#fff"}}/>)}
                {this.renderTabItem("T2", "用户中心", LAUNCHER_IMG_USER, LAUNCHER_IMG_USER_SELECT, <UserCenter />)}
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
        height: 55,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    tabIcon: {
        width: 30,
        height: 30,
        resizeMode: 'stretch',
        marginTop: 7
    }
});