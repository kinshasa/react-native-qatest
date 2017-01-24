/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.1.23 下午 6:57
 * @Todo: 公共组件 - App主路由
 * @NAME: MainRoute
 * Source : https://github.com/Qwikly/react-native-router-redux
 */
import React, {Component} from 'react';
import {Actions, Scene, Router} from 'react-native-router-flux';

import Launcher from './containers/Launcher';

export default  scenes = Actions.create(
    <Scene key="root">
        <Scene key="login" component={Launcher} hideNavBar={true}/>
    </Scene>
);
