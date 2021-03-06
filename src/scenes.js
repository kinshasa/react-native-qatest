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
import RCTViewsContainer from "./containers/home/list/RCTViewsContainer";
import tab_navigator from "./containers/home/list/tab_navigator";
import stack_navigator from "./containers/home/list/stack_navigator";
import drawer_navigator from "./containers/home/list/drawer_navigator";
import FlatListContainer from "./containers/home/list/FlatListContainer";
import LoggerContainer from "./containers/home/list/LoggerContainer";
import TextInputScrollViewContainer from "./containers/home/list/TextInputScrollViewContainer";

import CustomListViewContainer from "./containers/test/list/CustomListViewContainer";
import InheritanceBaseContainer from "./containers/test/list/InheritanceBaseContainer";
import CustomWebViewContainer from "./containers/test/list/CustomWebViewContainer";
import InjectWebViewContainer from "./containers/test/list/InjectWebViewContainer";
import WebViewExample from "./containers/test/list/WebViewExample";

export default  scenes = Actions.create(
    <Scene key="root">
        <Scene role="root" key="Launcher" component={Launcher} des="启动器" hideNavBar/>
        <Scene role="home" key="CartAnimationContainer" component={CartAnimationContainer} des="购物车动画" hideNavBar/>
        <Scene role="home" key="AnimationDemoContainer" component={AnimationDemoContainer} des="动画Demo" hideNavBar/>
        <Scene role="home" key="LayoutXYDemo" component={LayoutXYDemoContainer} des="Layout布局" hideNavBar/>
        <Scene role="home" key="IconCollect" component={IconCollectContainer} des="图标库" hideNavBar={false}/>
        <Scene role="home" key="SwipeList" component={SwipeListContainer} des={"Swipe组件"}/>
        <Scene role="home" key="VerticalViewPager" component={VerticalViewPagerContainer} des="垂直ViewPager"/>
        <Scene role="home" key="TabView" component={TabViewContainer} des="scrollable-tab-view"/>
        <Scene role="home" key="NestScrollView" component={NestScrollViewContainer} des="内嵌ViewPager"/>
        <Scene role="home" key="GoodsDetailPage" component={GoodsDetailPageContainer} des="商品详情页"/>
        <Scene role="home" key="DropDownAlert" component={DropDownAlertContainer} des="DropDownAlert"/>
        <Scene role="home" key="HotFixPushy" component={HotFixPushyContainer} des="HotFixPushy"/>
        <Scene role="home" key="RCTViewsContainer" component={RCTViewsContainer} des="RCTViewsContainer"/>
        <Scene role="home" key="tab_navigator" component={tab_navigator} des="tab_navigator" hideNavBar/>
        <Scene role="home" key="stack_navigator" component={stack_navigator} des="stack_navigator" hideNavBar/>
        <Scene role="home" key="drawer_navigator" component={drawer_navigator} des="drawer_navigator" hideNavBar/>
        <Scene role="home" key="FlatListContainer" component={FlatListContainer} des="FlatListContainer"/>
        <Scene role="home" key="LoggerContainer" component={LoggerContainer} des="LoggerContainer"/>
        <Scene role="home" key="TextInputContainer" component={TextInputScrollViewContainer} des="TextInputContainer"/>


        <Scene role="QATest" key="CustomListView" component={CustomListViewContainer} des="大数据量的ListView"/>
        <Scene role="QATest" key="Inheritance" component={InheritanceBaseContainer} des="继承BaseContainer"/>
        <Scene role="QATest" key="WebView" component={CustomWebViewContainer} des="webView"/>
        <Scene role="QATest" key="InjectWebView" component={InjectWebViewContainer} des={'InjectWebViewContainer'}/>
        <Scene role="QATest" key="WebViewExample" component={WebViewExample} des={'WebViewExample'}/>
    </Scene>
);
