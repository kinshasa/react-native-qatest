/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.3.28 下午 5:26
 * @Desc: 公共组件 - InheritanceBaseContainer
 * @Name: InheritanceBaseContainer.js
 * @LifeCycle：https://github.com/kinshasa/react-native-qatest
 */

import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import BaseContainer from '../../BaseContainer';

export default class InheritanceBaseContainer extends BaseContainer {

    componentDidMount() {
        console.log("BaseContainer1 componentDidMount()", new Date());
        setTimeout(()=>{
            this.setState({lazyLoad:true});
        },2000);
    }
    renderView = () => {
        console.log("BaseContainer1 renderView()", new Date());
        return (
            <View style={InheritanceBaseContainerStyles.container}>
                <Text style={InheritanceBaseContainerStyles.container}>2秒后加载成功，显示数据</Text>
            </View>
        );
    };


    render() {
        return super.render();
    }
}

const InheritanceBaseContainerStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
});