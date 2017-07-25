/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.7.14 上午 11:59
 * @Desc: 公共组件 - HomeIndex
 * @Name: HomeIndex.js
 * @LifeCycle：https://github.com/kinshasa/react-native-qatest
 */

import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

export default class HomeIndex extends Component {


    render() {
        
        return (
            <View style={HomeIndexStyles.container}>
                <Text>sssss</Text>
            </View>
        );
    }

}

const HomeIndexStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

