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
import CartAnimation from "./containers/home/list/CartAnimation";
import AnimationDemo from "./containers/home/list/AnimationDemo";
import LayoutXYDemo from "./containers/home/list/LayoutXYDemo";
import PicStore from "./containers/home/list/PicStore";
import SwipeList from "./containers/home/list/SwipeList";
import DropDownAlertContainer from "./containers/home/list/DropDownAlertContainer";
import VerticalViewPagerContainer from "./containers/home/list/VerticalViewPagerContainer";
import TabViewContainer from "./containers/home/list/TabViewContainer";
import DataBindingRedux from "./containers/home/list/DataBindingRedux";
import NestScrollView from "./containers/home/list/NestScrollView";
import GoodsDetailPage from "./containers/home/list/GoodsDetailPage";
import pushy from "./containers/home/list/pushy";

import CustomListView from "./containers/test/list/CustomListView";

export default  scenes = Actions.create(
    <Scene key="root">
        <Scene role="root" key="Launcher" component={Launcher} des={"启动器"} hideNavBar={true}/>
        <Scene role="home" key="CartAnimation" component={CartAnimation} des={"购物车动画"} hideNavBar={true}/>
        <Scene role="home" key="AnimationDemo" component={AnimationDemo} des={"动画Demo"} hideNavBar={true}/>
        <Scene role="home" key="LayoutXYDemo" component={LayoutXYDemo} des={"Layout布局"} hideNavBar={true}/>
        <Scene role="home" key="PicStore" component={PicStore} des={"图标库"} hideNavBar={false}/>
        <Scene role="home" key="SwipeList" component={SwipeList} des={"Swipe组件"}/>
        <Scene role="home" key="VerticalViewPagerContainer" component={VerticalViewPagerContainer} des={"VerticalViewPagerContainer"}/>
        <Scene role="home" key="TabViewContainer" component={TabViewContainer} des={"scrollable-tab-view"}/>
        <Scene role="home" key="DataBindingRedux" component={DataBindingRedux} des={"DataBindingRedux"} hideNavBar={true}/>
        <Scene role="home" key="NestScrollView" component={NestScrollView} des={"NestScrollView"} hideNavBar={true}/>
        <Scene role="home" key="GoodsDetailPage" component={GoodsDetailPage} des={"商品详情页"} hideNavBar={true}/>
        <Scene role="home" key="DropDownAlertContainer" component={DropDownAlertContainer} des={"DropDownAlertContainer"}
               hideNavBar={true}/>
        <Scene role="home" key="pushy" component={pushy} des={"react-native-pushy"} hideNavBar={true}/>
        <Scene role="QATest" key="CustomListView" component={CustomListView} des={"1万行数据的ListView"} hideNavBar={true}/>
    </Scene>
);
