/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.2.10 下午 3:21
 * @Desc: 公共组件 - AnimationDemo
 * @Name: AnimationDemo.js
 * @LifeCycle：http://www.tuicool.com/articles/nu6zInB
 */

import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import Badge from './Badge'
export default class AnimationDemo extends Component {

    /**
     * 父组件传入的属性值
     * @type {{style: *, account: *, name: *, isTrue: *, callback: *}}
     */
    static propTypes = {
        style: Animatable.View.propTypes.style,
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
        console.log("AnimationDemo", "constructor()");
        super(props, context);
        this.state = {count:0};
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
        console.log("AnimationDemo", "componentWillMount()");
    }

    /**
     * 组件加载后
     * 生命周期中仅被调用1次，可以使用SetState
     * 用于网络请求和页面渲染
     */
    componentDidMount() {
        console.log("AnimationDemo", "componentDidMount()");
    }

    /**
     * 父组件属性值变更监听
     * 可以使用SetState
     * @param newProps
     */
    componentWillReceiveProps(newProps) {
        console.log("AnimationDemo", "componentWillReceiveProps():" + newProps);
    }

    /**
     * 属性值/状态值变更后，是否需要刷新页面
     * @param nextProps 是即将被设置的属性，旧的属性还是可以通过 this.props 来获取。
     * @param nextState 表示组件即将更新的状态值。
     * @returns {boolean} 默认true, 返回值决定是否需要更新组件，如果 true 表示需要更新，继续走后面的更新流程。
     */
    shouldComponentUpdate(nextProps, nextState) {
        let isUpdate = (this.props != nextProps) || (this.state != nextState);
        console.log("AnimationDemo", "shouldComponentUpdate():" + isUpdate);
        return isUpdate;
    }

    /**
     * 如果组件状态或者属性改变，并且shouldComponentUpdate返回为 true
     * @param nextProps 更新之后的属性
     * @param nextState 更新之后的状态
     */
    componentWillUpdate(nextProps, nextState) {
        console.log("AnimationDemo", "componentWillUpdate()");
    }

    /**
     * 更新完成界面之后通知
     * @param prevProps 更新之前的属性
     * @param prevState 更新之前的状态
     * @returns {boolean}
     */
    componentDidUpdate(prevProps, prevState) {
        console.log("AnimationDemo", "componentDidUpdate()");
    }

    /**
     * 组件即将卸载前调用
     * 在这个函数中，可以做一些组件相关的清理工作，例如取消计时器、网络请求等。
     */
    componentWillUnmount() {
        console.log("AnimationDemo", "componentWillUnmount()");

    }

    /**
     * 组件更新
     * @returns {XML}
     */
    render() {
        this.renderCount++;
        console.log("AnimationDemo", "render() renderCount:" + this.renderCount);
        return (
            <Animatable.View animation="zoomIn" style={AnimationDemoStyles.container}>
                <Animatable.View animation="zoomOutLeft" delay={1000} style={AnimationDemoStyles.view}/>
                <Animatable.View style={{marginTop:10,alignSelf:"center",height:100,width:100}}>
                    <Animatable.View
                        animation="pulse" easing="ease-out" delay={0} iterationCount={1} style={AnimationDemoStyles.pulseView}>
                        <Badge
                            extraPaddingHorizontal={10}
                            ref={(ref)=>{this.badgeView = ref}}
                            minWidth={10} minHeight={10} textStyle={{color: '#fff',fontSize:8}} style={{position:'absolute',right:0,bottom:0}}>
                            {this.state.count}
                        </Badge>
                        <Text onPress={()=>{this.setAnim()}}>teqw</Text>
                    </Animatable.View>
                </Animatable.View>
            </Animatable.View>
        );
    }

    setAnim(){
        this.badgeView && this.badgeView._container.pulse();
        this.badgeView.setNativeState(++this.state.count);
    }

}

const AnimationDemoStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#333",
    },
    view: {
        height: 30,
        margin: 10,
        backgroundColor: "red",
        marginTop:100
    },
    pulseView: {
        flex: 1,
        backgroundColor:"yellow",
        flexDirection:"column"
    },
});