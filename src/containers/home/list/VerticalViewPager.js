/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.2.28 下午 2:14
 * @Desc: 公共组件 - VerticalViewPager
 * @Name: VerticalViewPager.js
 * @LifeCycle：http://www.tuicool.com/articles/nu6zInB
 */

import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    TouchableNativeFeedback,
    ScrollView
} from 'react-native';

const {height, width} = Dimensions.get('window');
import HomePage from '../HomePage'
import Settings from '../../set/Setting'
import QATest from '../../test/QATest'

import AddPaging from 'react-native-paged-scroll-view/index'
var PagedScrollView = AddPaging(ScrollView)


export default class VerticalViewPager extends Component {

    /**
     * 父组件传入的属性值
     * @type {{style: *, account: *, name: *, isTrue: *, callback: *}}
     */
    static propTypes = {
        style: View.propTypes.style,
        account: PropTypes.number,
        name: PropTypes.string,
        isTrue: PropTypes.bool,
        callback: PropTypes.func,
    };

    /**
     * 父组件传入的数据
     * @type {{data: {}}}
     */
    static defaultProps = {
        data: {}
    };

    /**
     * 构造函数
     * @param props
     * @param context
     */
    constructor(props, context) {
        console.log("VerticalViewPager", "constructor()");
        super(props, context);
        this.state = {};
    }

    /**
     * 当前组件渲染次数
     * @type {number}
     */
    renderCount = 0;

    /**
     * 组件加载前
     * 生命周期中仅被调用1次，可以使用SetState
     */
    componentWillMount() {
        console.log("VerticalViewPager", "componentWillMount()");
    }

    /**
     * 组件加载后
     * 生命周期中仅被调用1次，可以使用SetState
     * 用于网络请求和页面渲染
     */
    componentDidMount() {
        console.log("VerticalViewPager", "componentDidMount()");
    }

    /**
     * 父组件属性值变更监听
     * 可以使用SetState
     * @param newProps
     */
    componentWillReceiveProps(newProps) {
        console.log("VerticalViewPager", "componentWillReceiveProps():" + newProps);
    }

    /**
     * 属性值/状态值变更后，是否需要刷新页面
     * @param nextProps 是即将被设置的属性，旧的属性还是可以通过 this.props 来获取。
     * @param nextState 表示组件即将更新的状态值。
     * @returns {boolean} 默认true, 返回值决定是否需要更新组件，如果 true 表示需要更新，继续走后面的更新流程。
     */
    shouldComponentUpdate(nextProps, nextState) {
        let isUpdate = (this.props != nextProps) || (this.state != nextState);
        console.log("VerticalViewPager", "shouldComponentUpdate():" + isUpdate);
        return isUpdate;
    }

    /**
     * 如果组件状态或者属性改变，并且shouldComponentUpdate返回为 true
     * @param nextProps 更新之后的属性
     * @param nextState 更新之后的状态
     */
    componentWillUpdate(nextProps, nextState) {
        console.log("VerticalViewPager", "componentWillUpdate()");
    }

    /**
     * 更新完成界面之后通知
     * @param prevProps 更新之前的属性
     * @param prevState 更新之前的状态
     * @returns {boolean}
     */
    componentDidUpdate(prevProps, prevState) {
        console.log("VerticalViewPager", "componentDidUpdate()");
    }

    /**
     * 组件即将卸载前调用
     * 在这个函数中，可以做一些组件相关的清理工作，例如取消计时器、网络请求等。
     */
    componentDidUnMount() {
        console.log("VerticalViewPager", "componentDidUnMount()");

    }

    /**
     * 组件更新
     * @returns {XML}
     */
    render() {
        console.log(height);
        this.renderCount++;
        console.log("VerticalViewPager", "render() renderCount:" + this.renderCount);
        return (
            <PagedScrollView style={VerticalViewPagerStyles.container}>
                <HomePage tabLabel="HomePage"/>
                <Settings tabLabel="Settings"/>
                <QATest tabLabel="QATest"/>
            </PagedScrollView>
        );
    }

}

const VerticalViewPagerStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topView: {
        width: width,
        height: height - 20,
        backgroundColor: "#aaa",
        justifyContent: "flex-end",
        alignItems: "center"
    },
    bottomView: {
        width: width,
        height: height,
        backgroundColor: "#999"
    }
});