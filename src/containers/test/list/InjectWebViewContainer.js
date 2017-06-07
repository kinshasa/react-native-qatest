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
    TouchableHighlight
} from 'react-native';
import TitleBar from '../../../components/bar/TitleBar'


export default class InjectWebViewContainer extends Component {

    static propTypes = {
    };

    static defaultProps = {
        data: {}
    };

    constructor(props, context) {
        console.log("InjectWebViewContainer constructor()");
        super(props, context);
        this.state = {};
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
            <View style={InjectWebViewContainerStyles.container}>
                <TitleBar label={'InjectWebViewContainer'}/>
                <TouchableHighlight onPress={this.postMessage} underlayColor='transparent'>
                    <Text>Send message to WebView</Text>
                </TouchableHighlight>
                <WebView
                    ref='injectWeb'
                    automaticallyAdjustContentInsets={false}
                    style={InjectWebViewContainerStyles.webView}
                    source={require('./index.html')}
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


            </View>
        );
    }

    onMessage = (e) => {
        let data = e.nativeEvent.data;
        console.log('InjectWebViewContainer::onMessage() e.nativeEvent:', e.nativeEvent);
    };

    postMessage = () => {
        console.log('InjectWebViewContainer::postMessage()');
        if (this.refs['injectWeb'] && this.refs['injectWeb'].postMessage) {
            let params = {username: 'admin', passwd: '123456'};
            this.refs['injectWeb'].postMessage(JSON.stringify({action: 'Login',params}));
        }
    };

}

const InjectWebViewContainerStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
});