/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.1.23 下午 6:58
 * @Todo: 公共组件 - 渲染的入口
 * @NAME: MainScreen
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

const LANCHER_IMG_HOME = require("../assets/home.png");
const LANCHER_IMG_USERCENTER = require("../assets/home.png");
export default class Launcher extends Component {

    static propTypes = {};

    static defaultProps = {};

    constructor(props, context) {
        super(props, context);
        this.state = {
            selectedTab: "T1"
        };
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(newProps) {

    }

    componentDidUpdate(prevProps, prevState) {
    }

    componentDidUnMount() {

    }

    render() {
        return (
            <View style={{flex: 1}}>
                <TabNavigator
                    tabBarStyle={LauncherStyles.tab}
                    hidesTabTouch={true}
                >
                    {this.renderTabItem("T1", "首页", LANCHER_IMG_HOME, LANCHER_IMG_HOME, <HomePage />)}
                    {this.renderTabItem("T2", "用户中心", LANCHER_IMG_HOME, LANCHER_IMG_HOME, <UserCenter />)}
                </TabNavigator>
            </View>
            /*{this.renderBody()}*/
        );
    }

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

    renderBody() {
        return (
            <ScrollableTabView
                scrollWithoutAnimation={true}
                style={LauncherStyles.container}
                /*隐藏下划线，显示小三角图标*/
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