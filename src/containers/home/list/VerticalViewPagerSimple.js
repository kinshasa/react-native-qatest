/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.2.27 下午 3:13
 * @Desc: 公共组件 - VerticalViewPagerSimple
 * @Name: VerticalViewPagerSimple.js
 * @LifeCycle：http://www.tuicool.com/articles/nu6zInB
 */

import React, {Component} from "react";
import {Dimensions, StyleSheet, View} from "react-native";

import GoodsDetailReact from "../../../components/viewpager/GoodsDetailReact";

const {height, width} = Dimensions.get('window');
export default class VerticalViewPagerSimple extends Component {

    render() {
        return (
            <View style={VerticalViewPagerSimpleStyles.container}>
                <GoodsDetailReact/>
            </View>
        );
    }
}

const VerticalViewPagerSimpleStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
});