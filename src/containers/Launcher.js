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
import Setting from "./set/Setting"
import QATest from "./test/QATest"
import Icon from 'react-native-vector-icons/Ionicons';

const LAUNCHER_IMG_HOME = ()=><Icon name="ios-compass-outline" size={25} color="black"/>;
const LAUNCHER_IMG_HOME_SELECT = ()=><Icon name="ios-compass" size={25} color="#166AF6"/>;
const LAUNCHER_IMG_TEST = ()=><Icon name="ios-cloud-circle-outline" size={25} color="black"/>;
const LAUNCHER_IMG_TEST_SELECT = ()=><Icon name="ios-cloud-circle" size={25} color="#166AF6"/>;
const LAUNCHER_IMG_SETTING = ()=><Icon name="ios-contact-outline" size={25} color="black"/>;
const LAUNCHER_IMG_SETTING_SELECT = ()=><Icon name="ios-contact" size={25} color="#4F8EF7"/>;

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
    renderTabItem(tag, title, img, selectedImg, childView,badgeNum) {
        return (
            <TabNavigator.Item
                selected={this.state.selectedTab === tag}
                title={title}
                titleStyle={{color:"black"}}
                selectedTitleStyle={{color:"#166AF6"}}
                renderIcon={img}
                renderSelectedIcon={selectedImg}
                badgeText={badgeNum}
                tabStyle={LauncherStyles.tabStyle}
                allowFontScaling={false}
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
                tabBarShadowStyle={{backgroundColor:"black"}}
                sceneStyle={LauncherStyles.sceneStyle}
                tabBarStyle={LauncherStyles.tabBarStyle}
                hidesTabTouch={true}
            >
                {this.renderTabItem("T1", "组件开发", LAUNCHER_IMG_HOME, LAUNCHER_IMG_HOME_SELECT,<HomePage/>,0)}
                {this.renderTabItem("T2", "品质测试", LAUNCHER_IMG_TEST, LAUNCHER_IMG_TEST_SELECT, <QATest />,0)}
                {this.renderTabItem("T3", "其他设置", LAUNCHER_IMG_SETTING, LAUNCHER_IMG_SETTING_SELECT, <Setting />,1)}
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
    sceneStyle:{
        backgroundColor: '#fff',
    },
    tabBarStyle: {
        height: 50,
        backgroundColor: '#eee',
        alignItems: 'center',
    },
    tabStyle:{height:50, backgroundColor:"#eee"},
    tabIcon: {
        width: 30,
        height: 30,
        resizeMode: 'stretch',
        marginTop: 7
    }
});