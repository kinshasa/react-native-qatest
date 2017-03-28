/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.1.23 下午 6:57
 * @Desc: 公共组件 - App主路由
 * @NAME: scenes.js
 * Source : https://github.com/Qwikly/react-native-router-redux
 */
import React from "react";
import {Actions, Scene} from "react-native-router-flux";
import Launcher from "./containers/Launcher";
import CartAnimationContainer from "./containers/home/list/CartAnimationContainer";
import AnimationDemoContainer from "./containers/home/list/AnimationDemoContainer";
import LayoutXYDemoContainer from "./containers/home/list/LayoutXYDemoContainer";
import IconCollectContainer from "./containers/home/list/IconCollectContainer";
import SwipeListContainer from "./containers/home/list/SwipeListContainer";
import DropDownAlertContainer from "./containers/home/list/DropDownAlertContainer";
import VerticalViewPagerContainer from "./containers/home/list/VerticalViewPagerContainer";
import TabViewContainer from "./containers/home/list/TabViewContainer";
import NestScrollViewContainer from "./containers/home/list/NestScrollViewContainer";
import GoodsDetailPageContainer from "./containers/home/list/GoodsDetailPageContainer";
import HotFixPushyContainer from "./containers/home/list/HotFixPushyContainer";

import CustomListView from "./containers/test/list/CustomListView";

export default  scenes = Actions.create(
    <Scene key="root">
        <Scene role="root" key="Launcher" component={Launcher} des={"启动器"} hideNavBar={true}/>
        <Scene role="home" key="CartAnimationContainer" component={CartAnimationContainer} des={"购物车动画"} hideNavBar={true}/>
        <Scene role="home" key="AnimationDemoContainer" component={AnimationDemoContainer} des={"动画Demo"} hideNavBar={true}/>
        <Scene role="home" key="LayoutXYDemoContainer" component={LayoutXYDemoContainer} des={"Layout布局"} hideNavBar={true}/>
        <Scene role="home" key="IconCollectContainer" component={IconCollectContainer} des={"图标库"} hideNavBar={false}/>
        <Scene role="home" key="SwipeListContainer" component={SwipeListContainer} des={"Swipe组件"}/>
        <Scene role="home" key="VerticalViewPagerContainer" component={VerticalViewPagerContainer} des={"VerticalViewPagerContainer"}/>
        <Scene role="home" key="TabViewContainer" component={TabViewContainer} des={"scrollable-tab-view"}/>
        <Scene role="home" key="NestScrollViewContainer" component={NestScrollViewContainer} des={"NestScrollViewContainer"} hideNavBar={true}/>
        <Scene role="home" key="GoodsDetailPageContainer" component={GoodsDetailPageContainer} des={"商品详情页"} hideNavBar={true}/>
        <Scene role="home" key="DropDownAlertContainer" component={DropDownAlertContainer} des={"DropDownAlertContainer"}
               hideNavBar={true}/>
        <Scene role="home" key="HotFixPushyContainer" component={HotFixPushyContainer} des={"react-native-HotFixPushyContainer"} hideNavBar={true}/>
        <Scene role="QATest" key="CustomListView" component={CustomListView} des={"1万行数据的ListView"} hideNavBar={true}/>
    </Scene>
);
