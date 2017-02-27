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


export default  scenes = Actions.create(
    <Scene key="root">
        <Scene key="Launcher" component={Launcher} hideNavBar={true}/>
        <Scene key="CartAnimation" component={CartAnimation} hideNavBar={false}/>
        <Scene key="AnimationDemo" component={AnimationDemo} hideNavBar={false}/>
        <Scene key="LayoutXYDemo" component={LayoutXYDemo} hideNavBar={true}/>
        <Scene key="PicStore" component={PicStore} hideNavBar={false}/>
        <Scene key="SwipeList" component={SwipeList} hideNavBar={true}/>

    </Scene>
);
