/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.3.28 下午 7:34
 * @Desc: 公共组件 - CustomWebViewContainer
 * @Name: CustomWebViewContainer.js
 * @LifeCycle：https://github.com/kinshasa/react-native-qatest
 */

import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    View,
    Text,
    WebView,
    Button
} from 'react-native';
import TitleBar from '../../../components/bar/TitleBar'
import * as Progress from 'react-native-progress';

export default class CustomWebViewContainer extends Component {

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
        console.log("CustomWebViewContainer constructor()");
        super(props, context);
        this.state = {uri:'https://github.com/kinshasa'};
    }

    /**
     * 当前组件渲染次数
     * @type {number}
     */
    count = 0;

    componentWillMount() {
        console.log("CustomWebViewContainer componentWillMount()", new Date());
    }

    componentDidMount() {
        console.log("CustomWebViewContainer componentDidMount()", new Date());
    }

    /**
     * 父组件属性值变更监听
     * 可以使用SetState
     * @param newProps
     */
    componentWillReceiveProps(newProps) {
        console.log("CustomWebViewContainer componentWillReceiveProps()", newProps);
    }

    /**
     * 属性值/状态值变更后，是否需要刷新页面
     * @param nextProps 是即将被设置的属性，旧的属性还是可以通过 this.props 来获取。
     * @param nextState 表示组件即将更新的状态值。
     * @returns {boolean} 默认true, 返回值决定是否需要更新组件，如果 true 表示需要更新，继续走后面的更新流程。
     */
    shouldComponentUpdate(nextProps, nextState) {
        let isUpdate = (this.props != nextProps) || (this.state != nextState);
        console.log("CustomWebViewContainer shouldComponentUpdate()", isUpdate);
        return isUpdate;
    }

    /**
     * 如果组件状态或者属性改变，并且shouldComponentUpdate返回为 true
     * @param nextProps 更新之后的属性
     * @param nextState 更新之后的状态
     */
    componentWillUpdate(nextProps, nextState) {
        console.log("CustomWebViewContainer componentWillUpdate()", new Date());
    }

    /**
     * 更新完成界面之后通知
     * @param prevProps 更新之前的属性
     * @param prevState 更新之前的状态
     * @returns {boolean}
     */
    componentDidUpdate(prevProps, prevState) {
        console.log("CustomWebViewContainer componentDidUpdate()", new Date());
    }

    /**
     * 组件即将卸载前调用
     * 在这个函数中，可以做一些组件相关的清理工作，例如取消计时器、网络请求等。
     */
    componentWillUnmount() {
        console.log("CustomWebViewContainer componentWillUnmount()");

    }

    render() {
        this.count++;
        console.log("CustomWebViewContainer render() count:", this.count);
        return (
            <View style={CustomWebViewContainerStyles.container}>
                <TitleBar label={this.state.uri}/>
                {
                    !this.state.load &&
                    <View style={CustomWebViewContainerStyles.container}>
                        <Progress.Bar
                            indeterminate
                            progress={0.2}
                            borderWidth={1}
                            width={App.Window.width}
                            style={{position:'absolute'}}
                        />
                    </View>
                }
                <WebView
                    onLoad={() => this.setState({load: true})}
                    //source={{uri: 'http://m.ds.cn/special_event/mainvenue1703.html?from=singlemessage&isappinstalled=1'}}
                    source={{uri: 'https://github.com/kinshasa'}}
                    //source={{uri: 'https://baidu.com'}}
                    //source={{uri: 'https://m.ds.cn'}}
                    style={CustomWebViewContainerStyles.webView}/>
            </View>
        );
    }

}

const CustomWebViewContainerStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    webView: {
        flex: 1
    },
});