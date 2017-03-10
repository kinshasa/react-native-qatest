/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.2.27 下午 3:13
 * @Desc: 公共组件 - VerticalViewPagerSimple
 * @Name: VerticalViewPagerSimple.js
 * @LifeCycle：http://www.tuicool.com/articles/nu6zInB
 */

import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    ScrollView
} from 'react-native';

import VerticalViewPager from '../../../components/viewpager/VerticalViewPager'
import Settings from '../../set/Setting'
import TabView from './TabView'

const {height, width} = Dimensions.get('window');
export default class VerticalViewPagerSimple extends Component {

    componentDidMount() {
        console.log("VerticalViewPagerSimple render() tabView:", this.tabView);
    }
    render() {
        return (
            <View style={VerticalViewPagerSimpleStyles.container}>
                <VerticalViewPager>
                    <Settings style={{backgroundColor: "red",height:height+400}} tabLabel="Settings"/>
                    <TabView contentContainerStyle={{minHeight:height+400}} ref={(ref)=>{this.tabView = ref}}/>
                </VerticalViewPager>
                {/*<DefaultTabBar />*/}
                <Text style={{position:'absolute',top:0,fontSize:28}}>TESTTESTTESTTEST</Text>
            </View>
        );
    }

}

const VerticalViewPagerSimpleStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
});