/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.8.14 下午 5:59
 * @Desc: 公共组件 - JDHomeTitleBarReact
 * @Name: JDHomeTitleBarReact.js
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

const bg_bar_ccc = require('./bg_bar_ccc.png');
const bg_bar_fff = require('./bg_bar_fff.png');

export default class JDHomeTitleBarReact extends Component {

    static propTypes = {
        style: View.propTypes.style,
        account: PropTypes.number,
        name: PropTypes.string,
        isTrue: PropTypes.bool,
        callback: PropTypes.func,
    };

    static defaultProps = {
        data: {}
    };

    constructor(props, context) {
        console.log("JDHomeTitleBarReact constructor()");
        super(props, context);
        this.state = {};
    }

    /**
     * 当前组件渲染次数
     * @type {number}
     */
    count = 0;

    componentWillMount() {
        console.log("JDHomeTitleBarReact componentWillMount()", new Date());
    }

    componentDidMount() {
        console.log("JDHomeTitleBarReact componentDidMount()", new Date());
    }

    onSearchPress(){
        alert(1111)
    }


    /**
     * 组件即将卸载前调用
     * 在这个函数中，可以做一些组件相关的清理工作，例如取消计时器、网络请求等。
     */
    componentWillUnmount() {
        console.log("JDHomeTitleBarReact componentWillUnmount()");

    }

    render(){
        return(
            <View style={{backgroundColor:'#fff',}}>
                <StatusBar translucent animated backgroundColor="transparent" barStyle="dark-content"/>
                <View style={{height:getStatusBarHeight(),width:getWidth()}}>
                </View>
                <View style={{height:px2dp(170),width:getWidth(),flexDirection:'row',}}>
                    {/*标题*/}
                    <Text style={{width:getWidth(),padding:px2dp(50),color:'#666',fontSize:px2dp(46),position:'absolute',textAlign:'center',fontWeight:'bold',}}>京东首页</Text>
                    {/*右边的选车按钮*/}
                    <TouchableHighlight
                        hitSlop={{top:50,left: 50, bottom: 50, right:50}}
                        style={{padding:px2dp(50)}}
                        underlayColor='#f0f0f0'
                        onPress={()=>this.onSearchPress()}>
                        <View style={{flexDirection:'row',alignItems:'center',}}>
                            <Image style={{width:px2dp(50),height:px2dp(50),marginRight:px2dp(20)}} source={icon_focus}/>
                            <Text style={{color:'#666',fontSize:px2dp(46)}}>扫一扫</Text>
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

}

const JDHomeTitleBarReactStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
});