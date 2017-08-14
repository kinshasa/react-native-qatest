/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.7.14 上午 11:59
 * @Desc: 公共组件 - IndexHome
 * @Name: IndexHome.js
 * @LifeCycle：https://github.com/kinshasa/react-native-qatest
 */

import React, {Component, PropTypes,} from 'react';
import {
    StyleSheet,
    View,
    Text,
    AppRegistry,
} from 'react-native';

import config from './common/config'
import HomeNewCarContainer from './src/containers/home/newcarpage/HomeNewCarContainer'

export default class IndexHome extends Component {

    componentWillMount() {
        Loggers.s('App::componentWillMount()',config.getWidth());
    }

    render() {
        
        return (
            <View style={IndexHomeStyles.container}>
                <HomeNewCarContainer/>
            </View>
        );
    }

}

const IndexHomeStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

AppRegistry.registerComponent('ReactHome', () => IndexHome);