/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.3.14 下午 5:32
 * @Desc: 公共组件 - GoodsDetailPage
 * @Name: GoodsDetailPage.js
 * @LifeCycle：https://github.com/kinshasa/react-native-qatest
 */

import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import GoodsDetailReact from '../../../components/viewpager/GoodsDetailReact'
import Settings from '../../set/Setting'
import TabView from './TabView'

export default class GoodsDetailPage extends Component {

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
        console.log("GoodsDetailPage", `constructor()`);
        super(props, context);
        this.state = {};
    }

    /**
     * 当前组件渲染次数
     * @type {number}
     */
    count = 0;

    componentWillMount() {
        console.log("GoodsDetailPage componentWillMount()", ``);
    }

    componentDidMount() {
        console.log("GoodsDetailPage componentDidMount()", ``);
    }

    /**
     * 父组件属性值变更监听
     * 可以使用SetState
     * @param newProps
     */
    componentWillReceiveProps(newProps) {
        console.log("GoodsDetailPage componentWillReceiveProps()", newProps);
    }

    /**
     * 属性值/状态值变更后，是否需要刷新页面
     * @param nextProps 是即将被设置的属性，旧的属性还是可以通过 this.props 来获取。
     * @param nextState 表示组件即将更新的状态值。
     * @returns {boolean} 默认true, 返回值决定是否需要更新组件，如果 true 表示需要更新，继续走后面的更新流程。
     */
    shouldComponentUpdate(nextProps, nextState) {
        let isUpdate = (this.props != nextProps) || (this.state != nextState);
        console.log("GoodsDetailPage shouldComponentUpdate()", ``);
        return isUpdate;
    }

    /**
     * 如果组件状态或者属性改变，并且shouldComponentUpdate返回为 true
     * @param nextProps 更新之后的属性
     * @param nextState 更新之后的状态
     */
    componentWillUpdate(nextProps, nextState) {
        console.log("GoodsDetailPage componentWillUpdate()", ``);
    }

    /**
     * 更新完成界面之后通知
     * @param prevProps 更新之前的属性
     * @param prevState 更新之前的状态
     * @returns {boolean}
     */
    componentDidUpdate(prevProps, prevState) {
        console.log("GoodsDetailPage componentDidUpdate()", ``);
    }

    /**
     * 组件即将卸载前调用
     * 在这个函数中，可以做一些组件相关的清理工作，例如取消计时器、网络请求等。
     */
    componentWillUnmount() {
        console.log("GoodsDetailPage componentWillUnmount()", ``);

    }

    /**
     * 如果BottomView是scrollableViewPager，取他的TabBar用于置顶
     */
    renderTabBar() {
        console.log("GoodsDetailPage renderTabBar():");
        try {
            if (!this.refs['tabView'].refs['scrollView'].refs['scrollableTabView']) {
                return;
            }
            //如果能取到
            let ref = this.refs['tabView'].refs['scrollView'].refs['scrollableTabView'].props.children;
            return ref[0];
        } catch (e) {
            console.log("GoodsDetailPage renderTabBar():", e.message);
        }
    }

    render() {
        this.count++;
        console.log("GoodsDetailPage render() count:", `${this.count}`);
        return (
            <View style={GoodsDetailPageStyles.container}>
                <GoodsDetailReact
                    //返回BottomView的TabBar
                    renderTabBar={()=>{return this.renderTabBar()}}
                    //返回TopView的Layout高度
                    topViewLayout={()=>{return this.verticalLayout}}>
                    {/*TopView 商品详情页的顶部布局，默认minHeight:屏幕高度，达到第一页不会看到BottomView，不填满会看到背景空白*/}
                    <Settings onLayout={(e)=>{this.verticalLayout =e.nativeEvent.layout}}/>
                    {/*BottomView 可以是scrollableViewPager，也可以自定义组件*/}
                    <TabView ref='tabView'/>
                </GoodsDetailReact>
            </View>
        );
    }

}

const GoodsDetailPageStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
});