/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.2.27 下午 3:13
 * @Desc: 公共组件 - RCTComponents
 * @Name: RCTComponents.js
 * @LifeCycle：http://www.tuicool.com/articles/nu6zInB
 */

import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';


export default class RCTComponents extends Component {

    render() {
        return (
            <View style={RCTComponentsStyles.container}>
            </View>
        );
    }

}

const RCTComponentsStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
});