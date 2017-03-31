/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.2.27 下午 3:13
 * @Desc: 公共组件 - GoodsDetailReact
 * @Name: GoodsDetailReact.js
 * @LifeCycle：http://www.tuicool.com/articles/nu6zInB
 */
import React, {Component, PropTypes} from "react";
import {StyleSheet, View, Text, Dimensions, ScrollView} from "react-native";
import VerticalViewPager from "./VerticalViewPager";

const {height, width} = Dimensions.get('window');
export default class GoodsDetailReact extends Component {


    static defaultProps = {
        //返回TopView的Layout高度
        topViewLayout:null,
        //返回BottomView的TabBar
        renderTabBar:null,
    };

    constructor(props, context){
        super(props, context);
        this.state = {
            refresh: false
        };
    }


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
            // release 会报错 undefined is not an object (evaluating 'this.tabBar.props.style')
            // console.log("GoodsDetailReact onScrollDownComplete",this.tabBar.props.style);
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
            //console.log("GoodsDetailReact onScrollTopComplete",this.tabBar.props.style);
            this.tabBar.setNativeProps({style:{opacity:0/*,maxHeight:0*/}})
        }
    }

    /**
     * 懒加载成功后回调
     */
    onLazyViewLoadComplete(){

        console.log("GoodsDetailReact onLazyViewLoadComplete()");
        this.setState({
            refresh:true
        })

    }

    onScroll(offset){
        if(!this.props.topViewLayout){
            return;
        }
        try{
            let tabBarY = this.tabBarLayout.height||50;
            let verticalY = this.props.topViewLayout().y||0;
            let verticalH = this.props.topViewLayout().height||0;
            if(offset.y <= (tabBarY+verticalH+verticalY)){
                this.onScrollTopComplete();
            } else{
                this.onScrollDownComplete();
            }
        }catch (e){
            console.log("GoodsDetailReact onScroll()");
        }

    }

    onTabBarLayout(layout){
        if(layout.height>10){
            this.tabBarLayout =layout;
        }
        console.log("GoodsDetailReact onTabBarLayout():",layout);
    }

    renderTabBar() {
        let tabBar = null;
        if(this.props.renderTabBar){
            tabBar = this.props.renderTabBar();
            console.log("GoodsDetailReact renderTabBar():");
        }
        return (
            <View
                onLayout={(e)=>{this.onTabBarLayout(e.nativeEvent.layout)}}
                ref={(ref)=>{this.tabBar = ref}}
                style={{width,backgroundColor:"yellow",position:'absolute',zIndex:2,top:0,left:0/*0.29需要加入top,left*/}}>
                {/*取ScrollableTabView的顶部栏布局引用*/}
                {this.state.refresh && tabBar}
            </View>
        )
    }

    render() {

        console.log("GoodsDetailReact render()");
        return (
            <View style={GoodsDetailReactStyles.container}>
                <VerticalViewPager
                    ref="verticalView"
                    onScroll={(offset)=>{this.onScroll(offset)}}
                    onScrollDownComplete={()=>{this.onScrollDownComplete()}}
                    onScrollTopComplete={()=>{this.onScrollTopComplete()}}
                    onLazyViewLoadComplete={()=>{this.onLazyViewLoadComplete()}}>
                    {this.props.children}
                </VerticalViewPager>
                {this.renderTabBar()}

            </View>
        );
    }
}

const GoodsDetailReactStyles = StyleSheet.create({
    container: {
        flex:1,
    },
});