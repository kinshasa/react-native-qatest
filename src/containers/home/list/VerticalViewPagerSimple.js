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
        };

    }

    //scrollableTabView的子组件数组
    scrollTabViewChildren = {};
    //verticalVP的Layout数据
    verticalLayout = {};

    //tabBar的Layout数据
    tabBarLayout={};

    //tabBar是否显示
    tabBarDisplay=false;

    componentDidMount() {
    }

    /**
     * 滚动到底部栏成功后回调
     */
    onScrollDownComplete(){
        //如果tabBar没有显示显示，则显示
        if(this.tabBar && !this.tabBarDisplay){
            this.tabBarDisplay =true;
            console.log("VerticalViewPagerSimple onScrollDownComplete",this.tabBar.props.style);
            this.tabBar.setNativeProps({style:{opacity:1/*,maxHeight:200*/}})
        }

    }

    /**
     * 滚动到顶部栏成功后回调
     */
    onScrollTopComplete(){
        //如果tabBar有显示显示，则隐藏
        if(this.tabBar && this.tabBarDisplay){
            this.tabBarDisplay =false;
            console.log("VerticalViewPagerSimple onScrollTopComplete",this.tabBar.props.style);
            this.tabBar.setNativeProps({style:{opacity:0/*,maxHeight:0*/}})
        }
    }

    /**
     * 懒加载成功后回调
     */
    onLazyViewLoadComplete(){

        console.log('VerticalViewPagerSimple onLazyViewLoadComplete verticalView',this.refs['verticalView'].props.children.length);

        let topView = this.refs['verticalView'].props.children[0];
        let BottomView = this.refs['verticalView'].props.children[1];
        if(!React.isValidElement(topView) && !React.isValidElement(BottomView)){
            return;
        }

        console.log("VerticalViewPagerSimple onLazyViewLoadComplete topView:", topView);

        if (!this.refs['tabView'].refs['scrollView'].refs['scrollableTabView']) {
            return;
        }
        //需要使用自定义scrollableTabView，且设置了ref为scrollableTabView前提下。
        let ref = this.refs['tabView'].refs['scrollView'].refs['scrollableTabView'].props.children;

        /*if (React.isValidElement(ref[0])) {
            this.scrollTabViewChildren[0] = ref[0];
        }*/
        this.scrollTabViewChildren = ref.map((child, index)=>{
            if (React.isValidElement(child)) {
                console.log("VerticalViewPagerSimple child right! :", index);
                return child;
            }else{
                console.log("VerticalViewPagerSimple not child! :", index);
            }
        });

        console.log("VerticalViewPagerSimple onLazyViewLoadComplete",this.scrollTabViewChildren.length);

        if(this.scrollTabViewChildren && this.scrollTabViewChildren.length > 0){
            this.setState({
                refresh:true
            })
        }
    }

    onScroll(offset){
        let tabBarY = this.tabBarLayout.height||50;
        let verticalY = this.verticalLayout.y||0;
        let verticalH = this.verticalLayout.height||0;
        if(offset.y <= (tabBarY+verticalH+verticalY)){
            this.onScrollTopComplete();
        } else{
            this.onScrollDownComplete();
        }

    }

    onTabBarLayout(layout){
        if(layout.height>10){
            this.tabBarLayout =layout;
        }
        console.log("VerticalViewPagerSimple onTabBarLayout():",layout);
    }

    renderTabBar() {
        return (
            <View
                onLayout={(e)=>{this.onTabBarLayout(e.nativeEvent.layout)}}
                ref={(ref)=>{this.tabBar = ref}}
                style={{width,backgroundColor:"#999",position:'absolute',zIndex:2}}>
                {/*取ScrollableTabView的顶部栏布局引用 scrolltabViewChildren[0]*/}
                {this.state.refresh && this.scrollTabViewChildren[0]}
            </View>
        )
    }

    render() {
        return (
            <View style={VerticalViewPagerSimpleStyles.container}>

                <VerticalViewPager
                    ref="verticalView"
                    onScroll={(offset)=>{this.onScroll(offset)}}
                    onScrollDownComplete={()=>{this.onScrollDownComplete()}}
                    onScrollTopComplete={()=>{this.onScrollTopComplete()}}
                    onLazyViewLoadComplete={()=>{this.onLazyViewLoadComplete()}}>
                    <Settings onLayout={(e)=>{this.verticalLayout =e.nativeEvent.layout}}/>
                    <TabView ref='tabView'/>
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