/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.1.23 下午 6:57
 * @Desc: 公共组件 - App主路由
 * @NAME: scenes.js
 * Source : https://github.com/Qwikly/react-native-router-redux
 */
import React, {Component} from 'react';
import {Actions, Scene, Router} from 'react-native-router-flux';

/**
 * 启动页
 */
import Launcher from './containers/Launcher';
/**
 * HomeList
 */
import CartAnimation from './containers/home/list/CartAnimation';
import AnimationDemo from './containers/home/list/AnimationDemo';
import LayoutXYDemo from './containers/home/list/LayoutXYDemo';
import PicStore from './containers/home/list/PicStore';
import SwipeList from './containers/home/list/SwipeList';
import RCTComponents from './containers/home/list/RCTComponents';
import VerticalViewPager from './containers/home/list/VerticalViewPager';


export default  scenes = Actions.create(
    <Scene key="root">
        <Scene key="Launcher" component={Launcher} des={"启动器"} hideNavBar={true}/>
        <Scene key="CartAnimation" component={CartAnimation} des={"购物车动画"} hideNavBar={true}/>
        <Scene key="AnimationDemo" component={AnimationDemo} des={"动画Demo"} hideNavBar={true}/>
        <Scene key="LayoutXYDemo" component={LayoutXYDemo} des={"Layout布局"} hideNavBar={true}/>
        <Scene key="PicStore" component={PicStore} des={"图标库"} hideNavBar={false}/>
        <Scene key="SwipeList" component={SwipeList} des={"Swipe组件"} hideNavBar={true}/>
        <Scene key="RCTComponents" component={RCTComponents} des={"原生组件"} hideNavBar={true}/>
        <Scene key="VerticalViewPager" component={VerticalViewPager} des={"竖向轮播"} hideNavBar={true}/>
    </Scene>
);
