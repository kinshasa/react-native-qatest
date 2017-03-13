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

    constructor(props, context){
        super(props, context);
        this.state = {
            refresh: false
        }
    }
    refView = {};

    componentDidMount() {
    }

    onScrollDownComplete(){
        this.tabBar && this.tabBar.setNativeProps({style:{opacity:1,maxHeight:200}})

    }
    onScrollTopComplete(){
        this.tabBar && this.tabBar.setNativeProps({style:{opacity:0,maxHeight:0}})
    }

    onLazyViewLoadComplete(){
        //console.log("VerticalViewPagerSimple onLazyViewLoadComplete this.tabView2.getRef()._children()",this.tabView2.refs['scrollView'].refs['scrollableTabView']);

        let ref = this.tabView.refs['scrollView'].refs['scrollableTabView'].props.children;
        this.refView = ref.map((child,index)=>{
            if (React.isValidElement(child)) {
                console.log("VerticalViewPagerSimple child right! :", index);
                return child;
            }else{
                console.log("VerticalViewPagerSimple not child! :", index);
            }
        });

        console.log("VerticalViewPagerSimple onLazyViewLoadComplete",this.refView.length);

        if(this.refView && this.refView.length > 0){
            this.setState({
                refresh:true
            })
        }
    }

    renderTabBar() {
        return (
            <View onLayout={(e)=>{console.log("VerticalViewPagerSimple renderTabBar layout",e.nativeEvent.layout.y)}}
                  ref={(ref)=>{this.tabBar = ref}}
                  style={{width,backgroundColor:"yellow",position:'absolute',zIndex:2}}>
                {this.state.refresh && this.refView[0]}
            </View>
        )
    }
    render() {
        return (
            <View style={VerticalViewPagerSimpleStyles.container}>

                <VerticalViewPager
                    onScroll={(offset)=>{console.log("VerticalViewPagerSimple render offset",offset.y)}}
                    onScrollDownComplete={()=>{this.onScrollDownComplete()}}
                    onScrollTopComplete={()=>{this.onScrollTopComplete()}}
                    onLazyViewLoadComplete={()=>{this.onLazyViewLoadComplete()}}>
                    <Settings style={{backgroundColor: "red",height:height+400}} tabLabel="Settings"/>
                    <TabView ref={(ref)=>{this.tabView = ref}} contentContainerStyle={{minHeight:height+400}}/>
                </VerticalViewPager>
                {this.renderTabBar()}
            </View>
        );
    }
}

const VerticalViewPagerSimpleStyles = StyleSheet.create({
    container: {
        flex:1,
    },
});