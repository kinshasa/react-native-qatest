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
    Dimensions
} from 'react-native';

import VerticalViewPager from '../../../components/viewpager/VerticalViewPager'
import QATest from '../../test/QATest'
import Settings from '../../set/Setting'

const {height, width} = Dimensions.get('window');
export default class RCTComponents extends Component {

    render() {
        return (
            <View style={RCTComponentsStyles.container}>
                <VerticalViewPager>
                    <Settings style={{backgroundColor: "red",height:height+400}} tabLabel="Settings"/>
                    <QATest style={{height:height+400}} tabLabel="QATest"/>
                </VerticalViewPager>
            </View>
        );
    }

}

const RCTComponentsStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
});