/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.7.14 上午 11:59
 * @Desc: 公共组件 - IndexHome
 * @Name: IndexHome.js
 * @LifeCycle：https://github.com/kinshasa/react-native-qatest
 */

import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

import globalConfig from './common/config/globalConfig'
import TitleBar from "./src/components/bar/TitleBar";

export default class IndexHome extends Component {
    componentWillMount() {
        Loggers.s('App::componentWillMount()',globalConfig.getWidth());
        //AppController.init();
    }

    render() {
        
        return (
            <View style={IndexHomeStyles.container}>
                <TitleBar
                    label="首页"
                    labelStyle={{backgroundColor: "transparent", color: "black"}}
                    style={{height: 45}}/>
                <Text>IndexHome</Text>
            </View>
        );
    }

}

const IndexHomeStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

