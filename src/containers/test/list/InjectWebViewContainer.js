/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.6.6 上午 11:31
 * @Desc: 公共组件 - InjectWebViewContainer
 * @Name: InjectWebViewContainer.js
 * @LifeCycle：https://github.com/kinshasa/react-native-qatest
 */

import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    View,
    Text,
    WebView,
    TouchableHighlight,
    TouchableNativeFeedback
} from 'react-native';
import {Actions} from "react-native-router-flux";


import warning from 'fbjs/lib/warning';
// import Menu, {MenuContext, MenuOptions, MenuOption, MenuTrigger} from 'react-native-menu';
import {MenuContext, Menu, MenuOptions, MenuOption, MenuTrigger,} from 'react-native-popup-menu';

import TitleBar from '../../../components/bar/TitleBar'

//申明更改原有 postMessage 函数为 patchedPostMessage
const patchPostMessageFunction = function () {
    var originalPostMessage = window.postMessage;

    var patchedPostMessage = function (message, targetOrigin, transfer) {
        originalPostMessage(message, targetOrigin, transfer);
    };

    patchedPostMessage.toString = function () {
        return String(Object.hasOwnProperty).replace('hasOwnProperty', 'postMessage');
    };

    window.postMessage = patchedPostMessage;
};

//注入脚本
const patchPostMessageJsCode = '(' + String(patchPostMessageFunction) + ')();';


export default class InjectWebViewContainer extends Component {

    static propTypes = {};

    static defaultProps = {
        data: {}
    };

    constructor(props, context) {
        console.log("InjectWebViewContainer constructor()");
        super(props, context);
    }

    /**
     * 当前组件渲染次数
     * @type {number}
     */
    count = 0;

    /**
     * 当前Web的Url
     */
    url: '';

    //当前WebView的导航数据
    navState:{
        canGoForward: false,
        canGoBack: false,
        loading: false,
        title: 'js调用java',
        url: './index.html',
        target: 1946
    };

    html = require('./index.html');

    state={
        source:this.html
    };

    componentWillMount() {
        console.log("InjectWebViewContainer componentWillMount()", new Date());
    }

    componentDidMount() {
        console.log("InjectWebViewContainer componentDidMount()", new Date());
    }


    componentWillUnmount() {
        console.log("InjectWebViewContainer componentWillUnmount()");
    }

    render() {
        this.count++;
        console.log("InjectWebViewContainer render() count:", this.count);
        return (
            <MenuContext style={InjectWebViewContainerStyles.container}>
                <TitleBar
                    label={'InjectWebViewContainer'}
                    leftView={this.renderTitleLeftView()}
                    rightView={this.renderTitleRightView()}
                />
                <WebView
                    ref='injectWeb'
                    style={InjectWebViewContainerStyles.webView}
                    injecteJavaScript={`alert('12')`}
                    injectedJavaScript={patchPostMessageJsCode}
                    automaticallyAdjustContentInsets={false}
                    onNavigationStateChange={this.onNavigationStateChange}
                    source={this.state.source}
                    javaScriptEnabled
                    domStorageEnabled
                    saveFormDataDisabled
                    decelerationRate="normal"
                    onShouldStartLoadWithRequest
                    startInLoadingState
                    scalesPageToFit
                    onMessage={this.onMessage}
                    onLoad={() => console.log('InjectWebViewContainer::onLoad()')}
                    onLoadEnd={() =>warning(false, 'Uri: %s',this.navState.url)}
                />


            </MenuContext>
        );
    }

    renderTitleLeftView() {
        return (
            <NavRect
                ref='navRect'
                onBackPress={this.onBackPress}
                onExitPress={this.onExitPress}/>
        );
    }

    renderTitleRightView() {
        return (
            /**/
            <Menu>
                <MenuTrigger text='Select action'/>
                <MenuOptions>
                    <MenuOption text='发数据给Web' onSelect={this.postMessage}/>
                    <MenuOption text='从Web获取数据' onSelect={this.postMessage}/>
                    <MenuOption text='自动跳转页面' onSelect={()=>this.onLoadUri({uri:'http://10.8.75.12/my/page'})}/>

                    <MenuOption onSelect={() => this.onLoadUri({uri: 'https://github.com/kinshasa'})}>
                        <Text style={{color: 'red'}}>打开GitHub</Text>
                    </MenuOption>
                    <MenuOption onSelect={() => this.onLoadUri(this.html)}>
                        <Text style={{color: 'green'}}>打开index.html</Text>
                    </MenuOption>
                    <MenuOption onSelect={() => alert(`Not called`)} disabled={true} text='Disabled'/>
                </MenuOptions>
            </Menu>
        );
    }

    onBackPress = () => {
        console.log('InjectWebViewContainer::onBackPress() uri:', this.url);


        if (this.refs['injectWeb'] && this.refs['injectWeb'].goBack) {
            this.refs['injectWeb'].goBack();
        }
        if (this.refs['navRect'] && this.refs['navRect'].showExit) {
            this.refs['navRect'].showExit();
        }
        if (!this.navState.canGoBack) {
            this.onExitPress();
        }

    };
    onExitPress = () => {
        try {
            Actions.pop();
        } catch (e) {
        }
    };

    onReloadPress = () => {
        if (this.refs['injectWeb'] && this.refs['injectWeb'].reload) {
            this.refs['injectWeb'].reload();
        }
    };

    onLoadUri = (source = {uri: 'https://github.com/kinshasa'}) => {
        this.setState({source});
    };

    /**
     * 自动获取Web发起的数据，可以postMessage回调通知Web
     * @param e data为e.nativeEvent.data;
     */
    onMessage = (e) => {
        let data = e.nativeEvent.data;
        console.log('InjectWebViewContainer::onMessage() e.nativeEvent:', e.nativeEvent);
        alert('InjectWebViewContainer::onMessage() data:',data);
    };

    /**
     * 发数据给Web端,可以发起请求后在onMessage监听回调
     */
    postMessage = () => {
        console.log('InjectWebViewContainer::postMessage()');
        if (this.refs['injectWeb'] && this.refs['injectWeb'].postMessage) {
            let params = {username: 'admin', passwd: '123456'};
            this.refs['injectWeb'].postMessage(JSON.stringify({action: 'Login', params}));
        }
    };

    onNavigationStateChange = (navState) => {
        console.log('InjectWebViewContainer::onNavigationStateChange() navState:', navState);
        this.url = navState.url;
        this.navState = {
            canGoForward: true,
            canGoBack: false,
            loading: false,
            title: 'js调用java',
            url: 'http://10.8.73.32:8082/assets/src/containers/test/list/index.html?platform=android&hash=f59797250ebe7759ec6c9faa29f0d0f0',
            target: 1946
        };
        this.navState = navState;
    };

}

/**
 * 页面返回导航按钮
 */
class NavRect extends Component {

    state = {
        exit: false,
    };

    showExit() {
        this.setState({exit: true})
    }

    render() {

        return (
            <View style={InjectWebViewContainerStyles.titleLeftView}>
                <TouchableNativeFeedback onPress={this.props.onBackPress}>
                    <View style={InjectWebViewContainerStyles.titleLeftIconView}>
                        <Text style={InjectWebViewContainerStyles.titleLeftIconText}>{'<'}</Text>
                        <Text style={InjectWebViewContainerStyles.titleLeftText}>{'返回'}</Text>
                    </View>
                </TouchableNativeFeedback>
                {
                    this.state.exit &&
                    <TouchableNativeFeedback onPress={this.props.onExitPress}>
                        <View>
                            <Text style={InjectWebViewContainerStyles.titleLeftText}>{'关闭'}</Text>
                        </View>
                    </TouchableNativeFeedback>
                }
            </View>
        );
    }
}


const InjectWebViewContainerStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    titleRightText: {
        height: 30,
        fontSize: 12,
        //textAlign:'center',
        textAlignVertical: 'center',
        marginLeft: 10,
        marginRight: 10,
    },
    titleLeftView: {
        flexDirection: 'row',
    },
    titleLeftIconView: {
        flexDirection: 'row',
        marginLeft: 10,
        marginRight: 5,
    },
    titleLeftIconText: {
        height: 30,
        fontSize: 18,
        textAlignVertical: 'center',
        alignSelf: 'center',
    },
    titleLeftText: {
        height: 30,
        fontSize: 12,
        textAlignVertical: 'center',
        alignSelf: 'center',
        margin: 3,
        fontWeight: 'bold',
    }
});