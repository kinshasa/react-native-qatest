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

import CustomListViewContainer from "./containers/test/list/CustomListViewContainer";
import InheritanceBaseContainer from "./containers/test/list/InheritanceBaseContainer";
import CustomWebViewContainer from "./containers/test/list/CustomWebViewContainer";

export default  scenes = Actions.create(
    <Scene key="root">
        <Scene role="root" key="Launcher" component={Launcher} des={"启动器"} hideNavBar/>
        <Scene role="home" key="CartAnimation" component={CartAnimationContainer} des={"购物车动画"} hideNavBar/>
        <Scene role="home" key="AnimationDemo" component={AnimationDemoContainer} des={"动画Demo"} hideNavBar/>
        <Scene role="home" key="LayoutXYDemo" component={LayoutXYDemoContainer} des={"Layout布局"} hideNavBar/>
        <Scene role="home" key="IconCollect" component={IconCollectContainer} des={"图标库"} hideNavBar={false}/>
        <Scene role="home" key="SwipeList" component={SwipeListContainer} des={"Swipe组件"}/>
        <Scene role="home" key="VerticalViewPager" component={VerticalViewPagerContainer} des={"垂直ViewPager"}/>
        <Scene role="home" key="TabView" component={TabViewContainer} des={"scrollable-tab-view"}/>
        <Scene role="home" key="NestScrollView" component={NestScrollViewContainer} des={"内嵌ViewPager"}/>
        <Scene role="home" key="GoodsDetailPage" component={GoodsDetailPageContainer} des={"商品详情页"}/>
        <Scene role="home" key="DropDownAlert" component={DropDownAlertContainer}
               des={"DropDownAlertContainer"}/>
        <Scene role="home" key="HotFixPushy" component={HotFixPushyContainer} des={"react-native-pushy"}/>

        <Scene role="QATest" key="CustomListView" component={CustomListViewContainer} des={"大数据量的ListView"}/>
        <Scene role="QATest" key="Inheritance" component={InheritanceBaseContainer} des={"继承BaseContainer"}/>
        <Scene role="QATest" key="WebView" component={CustomWebViewContainer} des={"webView"}/>
    </Scene>
);
