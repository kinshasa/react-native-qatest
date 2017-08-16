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
    TouchableWithoutFeedback,
    ScrollView
} from 'react-native';

const icon_scan = require('./icon_scan.png');
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
        this.state = {refresh:true};
    }

    /**
     * 当前组件渲染次数
     * @type {number}
     */
    count = 0;

    opacity = 1;

    componentWillMount() {
        console.log("JDHomeTitleBarReact componentWillMount()", new Date());
    }

    componentDidMount() {
        console.log("JDHomeTitleBarReact componentDidMount()", new Date());
    }

    onSearchPress(){
        alert(1111)
    }

    setTitleBarBackgroundImage(transparent) {
        if (this.state.refresh === transparent)
            return;
        console.log("JDHomeTitleBarReact setTitleBarBackgroundImage()", transparent);
        this.setState({refresh: transparent});
    }

    onBaseViewScrolling(nativeEvent){
        let transparent  = (nativeEvent.contentOffset.y < px2dp(170));
        this.setTitleBarBackgroundImage(transparent);
    }

    /**
     * 组件即将卸载前调用
     * 在这个函数中，可以做一些组件相关的清理工作，例如取消计时器、网络请求等。
     */
    componentWillUnmount() {
        console.log("JDHomeTitleBarReact componentWillUnmount()");

    }

    render(){
        let source = this.state.refresh ? bg_bar_ccc:bg_bar_fff;
        let color  = this.state.refresh ? '#fff':'#666';
        return(
            <View style={{position:'absolute',borderBottomWidth:StyleSheet.hairlineWidth,borderColor:'#ccc', }}>
                <StatusBar translucent animated backgroundColor="transparent" barStyle="default"/>
                <Image
                    style={{position: 'absolute', height: px2dp(170) + getStatusBarHeight(),width:getWidth(),opacity:0.7}}
                    source={source}/>
                <View  style={{height:px2dp(170),width:getWidth(),marginTop:getStatusBarHeight(),flexDirection:'row',}}>
                    {/*右边的选车按钮*/}
                    <TouchableWithoutFeedback
                        hitSlop={{top:50,left: 50, bottom: 50, right:50}}
                        onPress={()=>this.onSearchPress()}>
                        <View style={{height:px2dp(170),width:px2dp(150),alignItems:'center',justifyContent:'center',paddingLeft:px2dp(20),paddingRight:px2dp(20)}}>
                            <Image style={{width:px2dp(60),height:px2dp(60)}} source={{uri:LOGO_URI}}/>
                            <Text style={{color,fontSize:px2dp(36)}}>扫啊扫</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback
                        hitSlop={{top:50,left: 50, bottom: 50, right:50}}
                        onPress={()=>this.onSearchPress()}>
                            <View style={{flex:1,flexDirection:'row',alignItems:'center',backgroundColor:'#eee',height:px2dp(100),borderRadius:px2dp(50),shadowColor:'red',alignSelf:'center',}}>
                                <Image style={{width:px2dp(48),height:px2dp(48),marginLeft:px2dp(40),marginRight:px2dp(20)}} source={icon_search}/>
                                <Text style={{color:'#666',fontSize:px2dp(38)}}>海豚运动，816全场好物</Text>
                            </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback
                        hitSlop={{top:50,left: 50, bottom: 50, right:50}}
                        style={{backgroundColor:'#fff'}}
                        underlayColor='#f0f0f0'
                        onPress={()=>this.onSearchPress()}>
                        <View style={{height:px2dp(170),width:px2dp(150),alignItems:'center',justifyContent:'center',paddingLeft:px2dp(20),paddingRight:px2dp(20)}}>
                            <Image style={{width:px2dp(60),height:px2dp(60)}} source={{uri:LOGO_URI}}/>
                            <Text style={{color,fontSize:px2dp(36)}}>消息</Text>
                        </View>
                    </TouchableWithoutFeedback>
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