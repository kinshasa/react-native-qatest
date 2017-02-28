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
    Animated,
    Dimensions,
    ScrollView,
    LayoutAnimation,
    UIManager,
    TouchableOpacity,
    Easing
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import Badge from '../../../components/badge/Badge'

const {height, width} = Dimensions.get('window');
UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
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
        this.state = {
            fadeAnim: new Animated.Value(0), // init opacity 0
            w: 100,
            h: 100,
            fadeInOpacity: new Animated.Value(0),
            rotation: new Animated.Value(0),
            fontSize: new Animated.Value(0)
        };
        this.badge = {count: 0};

        this.animFade = Animated.timing( // Uses easing functions
            this.state.fadeAnim,    // The value to drive
            {toValue: 1},           // Configuration
        );
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
        LayoutAnimation.spring();
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

    onPress() {
        // 让视图的尺寸变化以动画形式展现
        LayoutAnimation.spring();
        this.setState({w: this.state.w + 15, h: this.state.h + 15});
    }

    onPress1(){
        Animated.parallel(['fadeInOpacity', 'rotation', 'fontSize'].map(property => {
            return Animated.timing(this.state[property], {
                toValue: 1,
                duration: 1000,
                easing: Easing.linear
            });
        })).start();
    }

    /**
     * 组件更新
     * @returns {XML}
     */
    render() {
        this.renderCount++;
        console.log("AnimationDemo", "render() renderCount:" + this.renderCount);
        return (
            <ScrollView  style={AnimationDemoStyles.container}>
                <Animatable.View animation="zoomIn">
                    <Text style={AnimationDemoStyles.textBtn} onPress={() => {
                        this.setAnim()
                    }}>
                        zoomIn动画
                    </Text>
                    <View style={[AnimationDemoStyles.views]}>
                        <Text style={AnimationDemoStyles.textBtn} onPress={() => {
                            this.refZoom && this.refZoom.zoomOutLeft();
                        }}>
                            zoomOutLeft动画
                        </Text>
                        <Animatable.View  ref={(ref)=>{this.refZoom = ref}} style={AnimationDemoStyles.zoomOut}/>
                    </View>
                    <Animatable.View style={AnimationDemoStyles.views}>
                        <Text style={AnimationDemoStyles.textBtn} onPress={() => {
                            this.setAnim()
                        }}>
                            冒泡动画
                        </Text>
                        <Badge
                            extraPaddingHorizontal={10}
                            ref={(ref) => {
                                this.badgeView = ref
                            }}
                            minWidth={10} minHeight={10} textStyle={{color: '#fff', fontSize: 8}}
                            style={{position: 'absolute', right: 200, top: 20}}>
                            {this.badge.count}
                        </Badge>
                    </Animatable.View>

                    {/*举个例子，你可能希望你的Animated.Value从0变化到1时，把组件的位置从150px移动到0px，不透明度从0到1。
                     可以通过以下的方法修改style属性来实现：*/}
                    <View style={[AnimationDemoStyles.views,{height: 200}]}>
                        <Text style={AnimationDemoStyles.textBtn} onPress={()=>{this.animFade.start()}}>
                            位移动画
                        </Text>
                        <Animated.View
                            style={{
                                margin: 10, opacity: this.state.fadeAnim, width: 200,
                                transform: [{
                                    //interpolate 在更新属性之前对值进行插值。譬如：把0-1映射到0-10。
                                    translateY: this.state.fadeAnim.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [150, 0]  // 0 : 150, 0.5 : 75, 1 : 0
                                    })
                                }]
                            }}>
                            <Text onPress={() => {
                            }} style={{backgroundColor: "white"}}>自定义动画</Text>
                        </Animated.View>
                    </View>
                    <View style={AnimationDemoStyles.views}>

                        <View style={[{width: this.state.w, height: this.state.h,backgroundColor:"red"}]} />
                        <Text style={[AnimationDemoStyles.textBtn,{backgroundColor:"white",width:200,marginTop:10}]} onPress={()=>{this.onPress()}}>
                            位移动画
                        </Text>
                    </View>
                    <View style={[AnimationDemoStyles.views,{height: 150}]}>
                        <Text style={AnimationDemoStyles.textBtn} onPress={()=>{this.onPress1()}}>
                            插值动画
                        </Text>
                        <Animated.View style={[ {
                            opacity: this.state.fadeInOpacity,
                            transform: [{
                                rotateZ: this.state.rotation.interpolate({
                                    inputRange: [0,1],
                                    outputRange: ['0deg', '360deg']
                                })
                            }]
                        }]}><Animated.Text style={{
                            fontSize: this.state.fontSize.interpolate({
                                inputRange: [0,1],
                                outputRange: [12,26]
                            })
                        }}>Parallel并行渲染，interpolate插值实现数值转换</Animated.Text>
                        </Animated.View>
                    </View>

                </Animatable.View>
            </ScrollView>

        );
    }

    setAnim() {
        this.badgeView && this.badgeView._container.pulse();
        this.badgeView.setNativeState(++this.badge.count);
    }

}

const AnimationDemoStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#333",
        padding: 5,
    },
    views: {
        marginTop: 10,
        width: width,
        padding: 10,
        backgroundColor: "#999",alignSelf: "center",
    },
    animZoomoutLeft: {
        width: width,
        backgroundColor: "#aaa",
    },
    zoomOut: {
        height: 30,
        padding: 10,
        backgroundColor: "red",
        marginTop: 10
    },
    textBtn: {
        fontSize: 26
    },
});