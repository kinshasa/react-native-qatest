/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.8.14 下午 2:35
 * @Desc: 公共组件 - JDHomePageContainer
 * @Name: JDHomePageContainer.js
 * @LifeCycle：https://github.com/kinshasa/react-native-qatest
 */

import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
    Image,
    TouchableHighlight,
    ScrollView
} from 'react-native';

//引入业务逻辑
import JDHomePageController from './JDHomePageController'

//引入第三方组件
import Swiper from 'react-native-swiper'
//引入公共组件
import BannerReact from '../../../components/BannerReact'
//引入自身组件
import JDHomeTitleBarReact from './JDHomeTitleBarReact'
import GridViewPagerReact from './GridViewPagerReact'

//引入资源文件
const icon_focus = require('./icon_scan.png');
const icon_arrows_down = require('./icon_arrows_down.png');
const icon_search = require('./icon_search.png');

const icon_4item_title = require('./icon_4item_title.png');
const icon_4item = require('./icon_4item.png');
const icon_loop_item = require('./icon_loop_item.png');
const icon_loop_title = require('./icon_loop_title.png');

export default class JDHomePageContainer extends Component {

    static propTypes = {
    };

    static defaultProps = {
        data: {}
    };

    constructor(props, context) {
        console.log("JDHomePageContainer constructor()");
        super(props, context);
        this.state = {refresh:true};
    }

    /**
     * 当前组件渲染次数
     * @type {number}
     */
    count = 0;

    componentWillMount() {
        console.log("JDHomePageContainer componentWillMount()", new Date());
    }

    componentDidMount() {
        console.log("JDHomePageContainer componentDidMount()", new Date());
        this.getData();
    }

    getData(){
        JDHomePageController.getHomeData(data=>{
            this.data = data;
            this.setState({refresh:false})
        },fail=>{})
    }

    onScroll(nativeEvent){
        console.log("JDHomePageContainer onScroll()",nativeEvent);
        this.refs['refJDHomeTitleBarReact'] && this.refs['refJDHomeTitleBarReact'].onBaseViewScrolling(nativeEvent);
    }

    componentWillUnmount() {
        console.log("JDHomePageContainer componentWillUnmount()");
    }

    renderTitleBar(){
        let props = {};
        props.label = '首页';
        props.labelStyle={backgroundColor: "transparent", color: "black"};
        props.style = {height: 45};
        return Configs.renderTitleBar(props);
    }

    render4Item(){
        return (
            <View style={{}}>
                <Image style={{height:px2dp(100),width:getWidth()}} source={icon_4item_title}/>
                <View style={{flexDirection:'row'}}>
                    <Image resizeMode='contain' style={{height:px2dp(270),width:px2dp(320),flex:1}} source={icon_4item}/>
                    <Image resizeMode='contain' style={{height:px2dp(270),width:px2dp(320),flex:1}} source={icon_4item}/>
                    <Image resizeMode='contain' style={{height:px2dp(270),width:px2dp(320),flex:1}} source={icon_4item}/>
                    <Image resizeMode='contain' style={{height:px2dp(270),width:px2dp(320),flex:1}} source={icon_4item}/>
                </View>
            </View>
        );
    }

    renderLoopItem(){
        return (
            <View style={{}}>
                <Image style={{height:px2dp(100),width:getWidth()}} source={icon_loop_title}/>
                <BannerReact height={px2dp(700)} data={['http://img.ds.cn/none.png','http://img.ds.cn/none.png']} imgStyle={{height:px2dp(700)}}/>
            </View>
        );
    }

    renderItem(){
        return(
            <View style={{padding:px2dp(20)}}>

            </View>
        )
    }
    renderAppCenter(){
        return(
            <Swiper
                height={px2dp(500)}
                loop autoplay
                {...this.props}
            >
                <View style={{padding:px2dp(20)}}>
                    {this.renderItem()}
                </View>
            </Swiper>
        )
    }

    render() {

        return (
            <View style={JDHomePageContainerStyles.container}>
                <ScrollView
                    onScroll={(e)=>{this.onScroll(e.nativeEvent)}}
                >
                    <BannerReact
                        height={px2dp(700)}
                        data={JDHomePageController.getBannerData()}
                        imgStyle={{height:px2dp(700)}}
                        onPress={index=>{alert(index)}}
                    />
                    <GridViewPagerReact data={JDHomePageController.getAppCenterData()}/>
                    {this.render4Item()}
                    {this.renderLoopItem()}
                    {this.renderLoopItem()}
                    {this.renderLoopItem()}
                    {this.renderLoopItem()}
                </ScrollView>
                <JDHomeTitleBarReact ref="refJDHomeTitleBarReact"/>
            </View>
        );
    }

}

const JDHomePageContainerStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
});