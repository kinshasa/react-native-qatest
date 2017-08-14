/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.8.14 下午 2:35
 * @Desc: 公共组件 - HomeNewCarContainer
 * @Name: HomeNewCarContainer.js
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

const icon_focus = require('./icon_focus.png');
const icon_arrows_down = require('./icon_arrows_down.png');
const icon_search = require('./icon_search.png');

const icon_4item_title = require('./icon_4item_title.png');
const icon_4item = require('./icon_4item.png');
const icon_loop_item = require('./icon_loop_item.png');
const icon_loop_title = require('./icon_loop_title.png');


import BannerReact from '../../../components/BannerReact'
export default class HomeNewCarContainer extends Component {

    static propTypes = {
    };

    static defaultProps = {
        data: {}
    };

    constructor(props, context) {
        console.log("HomeNewCarContainer constructor()");
        super(props, context);
        this.state = {};
    }

    /**
     * 当前组件渲染次数
     * @type {number}
     */
    count = 0;

    componentWillMount() {
        console.log("HomeNewCarContainer componentWillMount()", new Date());
    }

    componentDidMount() {
        console.log("HomeNewCarContainer componentDidMount()", new Date());
    }

    componentWillUnmount() {
        console.log("HomeNewCarContainer componentWillUnmount()");
    }

    renderTitleBar(){
        let props = {};
        props.label = '首页';
        props.labelStyle={backgroundColor: "transparent", color: "black"};
        props.style = {height: 45};
        return Configs.renderTitleBar(props);
    }

    onSearchPress(){
        alert(1111)
    }

    renderTitleView(){
        return(
            <View style={{backgroundColor:'#fff',}}>
                <StatusBar translucent animated backgroundColor="transparent" barStyle="dark-content"/>
                <View style={{height:getStatusBarHeight(),width:getWidth()}}>
                </View>
                <View style={{height:px2dp(170),width:getWidth(),flexDirection:'row',}}>
                    {/*标题*/}
                    <Text style={{width:getWidth(),padding:px2dp(50),color:'#666',fontSize:px2dp(46),position:'absolute',textAlign:'center',fontWeight:'bold',}}>大圣新车</Text>
                    {/*右边的选车按钮*/}
                    <TouchableHighlight
                        hitSlop={{top:50,left: 50, bottom: 50, right:50}}
                        style={{padding:px2dp(50)}}
                        underlayColor='#f0f0f0'
                        onPress={()=>this.onSearchPress()}>
                        <View style={{flexDirection:'row',alignItems:'center',}}>
                            <Image style={{width:px2dp(50),height:px2dp(50)}} source={icon_focus}/>
                            <Text style={{color:'#666',fontSize:px2dp(46)}}>选车中心</Text>
                        </View>
                    </TouchableHighlight>
                    {/*中间填充物*/}
                    <View style={{flex:1}}/>
                    {/*右边*/}
                    <View style={{flexDirection:'row',alignItems:'center',width:getWidth()/2,}}>
                        <Text style={{color:'#333',fontSize:px2dp(36),marginLeft:px2dp(100)}}>&nbsp;&nbsp;广州市</Text>
                        <Image resizeMode='contain' style={{width:px2dp(30),height:px2dp(20),marginLeft:px2dp(10)}} source={icon_arrows_down}/>
                        <View style={{flex:1}}/>
                        {/*右边的搜索按钮*/}
                        <TouchableHighlight
                            hitSlop={{top:50,left: 50, bottom: 50, right:50}}
                            style={{padding:px2dp(50)}}
                            underlayColor='#f0f0f0'
                            onPress={()=>this.onSearchPress()}>
                            <Image resizeMode='contain' style={{width:px2dp(50),height:px2dp(50)}} source={icon_search}/>
                        </TouchableHighlight>
                    </View>
                </View>


            </View>
        )
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

    render() {

        return (
            <View style={HomeNewCarContainerStyles.container}>
                {this.renderTitleView()}
                <ScrollView>
                    <BannerReact height={px2dp(700)} data={['http://img.ds.cn/none.png','http://img.ds.cn/none.png']} imgStyle={{height:px2dp(700)}}/>
                    {this.render4Item()}
                    {this.renderLoopItem()}
                </ScrollView>
            </View>
        );
    }

}

const HomeNewCarContainerStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
});