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

export default class IndexHome extends Component {


    render() {
        
        return (
            <View style={IndexHomeStyles.container}>
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

