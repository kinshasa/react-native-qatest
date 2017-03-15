/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.1.23 下午 6:57
 * @Desc: 公共组件 - App主路由
 * @NAME: scenes.js
 * Source : https://github.com/Qwikly/react-native-router-redux
 */
import React, {Component} from "react";
import {Actions, Scene} from "react-native-router-flux";
/**
 * 启动页
 */
import Launcher from "./containers/Launcher";
/**
 * HomeList
 */
import CartAnimation from "./containers/home/list/CartAnimation";
import AnimationDemo from "./containers/home/list/AnimationDemo";
import LayoutXYDemo from "./containers/home/list/LayoutXYDemo";
import PicStore from "./containers/home/list/PicStore";
import SwipeList from "./containers/home/list/SwipeList";
import VerticalViewPagerSimple from "./containers/home/list/VerticalViewPagerSimple";
import TabView from "./containers/home/list/TabView";
import DataBindingRedux from "./containers/home/list/DataBindingRedux";
import NestScrollView from "./containers/home/list/NestScrollView";
import GoodsDetailPage from "./containers/home/list/GoodsDetailPage";
import pushy from "./containers/home/list/pushy";

export default  scenes = Actions.create(
    <Scene key="root">
        <Scene key="Launcher" component={Launcher} des={"启动器"} hideNavBar={true}/>
        <Scene key="CartAnimation" component={CartAnimation} des={"购物车动画"} hideNavBar={true}/>
        <Scene key="AnimationDemo" component={AnimationDemo} des={"动画Demo"} hideNavBar={true}/>
        <Scene key="LayoutXYDemo" component={LayoutXYDemo} des={"Layout布局"} hideNavBar={true}/>
        <Scene key="PicStore" component={PicStore} des={"图标库"} hideNavBar={false}/>
        <Scene key="SwipeList" component={SwipeList} des={"Swipe组件"} hideNavBar={true}/>
        <Scene key="VerticalViewPagerSimple" component={VerticalViewPagerSimple} des={"VerticalViewPagerSimple"} hideNavBar={true}/>
        <Scene key="TabView" component={TabView} des={"scrollable-tab-view"} hideNavBar={true}/>
        <Scene key="DataBindingRedux" component={DataBindingRedux} des={"DataBindingRedux"} hideNavBar={true}/>
        <Scene key="NestScrollView" component={NestScrollView} des={"NestScrollView"} hideNavBar={true}/>
        <Scene key="GoodsDetailPage" component={GoodsDetailPage} des={"商品详情页"} hideNavBar={true}/>
        <Scene key="pushy" component={pushy} des={"react-native-pushy"} hideNavBar={true}/>
    </Scene>
);
