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
import TitleBar from '../../../components/bar/TitleBar'
// import Menu, {MenuContext, MenuOptions, MenuOption, MenuTrigger} from 'react-native-menu';
import {MenuContext, Menu, MenuOptions, MenuOption, MenuTrigger,} from 'react-native-popup-menu';


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

const html = require('./index.html');
export default class InjectWebViewContainer extends Component {

    static propTypes = {};

    static defaultProps = {
        data: {}
    };

    constructor(props, context) {
        console.log("InjectWebViewContainer constructor()");
        super(props, context);
        this.state = {source:html};
    }

    /**
     * 当前组件渲染次数
     * @type {number}
     */
    count = 0;

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
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    decelerationRate="normal"
                    onShouldStartLoadWithRequest={true}
                    startInLoadingState={true}
                    scalesPageToFit={true}
                    onMessage={this.onMessage}
                    onLoad={() => console.log('InjectWebViewContainer::onLoad()')}
                    onLoadEnd={() => console.log('InjectWebViewContainer::onLoadEnd()')}
                />


            </MenuContext>
        );
    }

    renderTitleLeftView() {
        return (
            <View style={InjectWebViewContainerStyles.titleLeftView}>
                <TouchableNativeFeedback onPress={this.onBackPress}>
                    <View style={InjectWebViewContainerStyles.titleLeftIconView}>
                        <Text style={InjectWebViewContainerStyles.titleLeftIconText}>{'<'}</Text>
                        <Text style={InjectWebViewContainerStyles.titleLeftText}>{'返回'}</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback onPress={this.onExitPress}>
                    <View>
                        <Text style={InjectWebViewContainerStyles.titleLeftText}>{'关闭'}</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    }

    renderTitleRightView() {
        return (
            /**/
            <Menu>
                <MenuTrigger text='Select action'/>
                <MenuOptions>
                    <MenuOption text='发给WebView' onSelect={this.onRightPress}/>
                    <MenuOption onSelect={()=>this.onLoadUri({uri:'https://github.com/kinshasa'})}>
                        <Text style={{color: 'red'}}>打开GitHub</Text>
                    </MenuOption>
                    <MenuOption onSelect={()=>this.onLoadUri(html)}>
                        <Text style={{color: 'green'}}>打开index.html</Text>
                    </MenuOption>
                    <MenuOption onSelect={() => alert(`Not called`)} disabled={true} text='Disabled'/>
                </MenuOptions>
            </Menu>
        );
    }

    onBackPress = () => {
        if (this.refs['injectWeb'] && this.refs['injectWeb'].goBack) {
            this.refs['injectWeb'].goBack();
        }
    };
    onExitPress = () => {
        if (this.refs['injectWeb'] && this.refs['injectWeb'].goForward) {
            this.refs['injectWeb'].goForward();
        }
    };

    onReloadPress = () => {
        if (this.refs['injectWeb'] && this.refs['injectWeb'].reload) {
            this.refs['injectWeb'].reload();
        }
    };

    onLoadUri = (source = {uri:'https://github.com/kinshasa'}) => {
        this.setState({source})
    };

    onRightPress = () => {
        this.postMessage();
    };

    onMessage = (e) => {
        let data = e.nativeEvent.data;
        console.log('InjectWebViewContainer::onMessage() e.nativeEvent:', e.nativeEvent);
    };

    postMessage = () => {
        console.log('InjectWebViewContainer::postMessage()');
        if (this.refs['injectWeb'] && this.refs['injectWeb'].postMessage) {
            let params = {username: 'admin', passwd: '123456'};
            this.refs['injectWeb'].postMessage(JSON.stringify({action: 'Login', params}));
        }
    };

    onNavigationStateChange = (navState) => {
        console.log('InjectWebViewContainer::onNavigationStateChange() navState:', navState);
        this.setState({
            backButtonEnabled: navState.canGoBack,
            forwardButtonEnabled: navState.canGoForward,
            url: navState.url,
            status: navState.title,
            loading: navState.loading,
            scalesPageToFit: true
        });
    };

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