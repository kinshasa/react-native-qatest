/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.2.15 上午 10:08
 * @Desc: 公共组件 - LayoutXYDemoContainer
 * @Name: LayoutXYDemoContainer.js
 * @LifeCycle：http://www.tuicool.com/articles/nu6zInB
 */

import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableNativeFeedback,
    Dimensions,
    ScrollView,
    StatusBar
} from 'react-native';

let {width: deviceWidth, height: deviceHeight} = Dimensions.get('window');
export default class LayoutXYDemoContainer extends Component {

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
        console.log("LayoutXYDemoContainer", "constructor()");
        super(props, context);
        this.state = {data: {}};
    }

    /**
     * 当前组件渲染次数
     * @type {number}
     */
    renderCount = 0;

    /**
     * 组件数组
     * @type {{}}
     */
    view = {};
    y = 0;

    /**
     * 组件加载前
     * 生命周期中仅被调用1次，可以使用SetState
     */
    componentWillMount() {
        console.log("LayoutXYDemoContainer", "componentWillMount()");
    }

    /**
     * 组件加载后
     * 生命周期中仅被调用1次，可以使用SetState
     * 用于网络请求和页面渲染
     */
    componentDidMount() {
        console.log("LayoutXYDemoContainer", "componentDidMount()");

    }

    /**
     * 父组件属性值变更监听
     * 可以使用SetState
     * @param newProps
     */
    componentWillReceiveProps(newProps) {
        console.log("LayoutXYDemoContainer", "componentWillReceiveProps():" + newProps);
    }

    /**
     * 属性值/状态值变更后，是否需要刷新页面
     * @param nextProps 是即将被设置的属性，旧的属性还是可以通过 this.props 来获取。
     * @param nextState 表示组件即将更新的状态值。
     * @returns {boolean} 默认true, 返回值决定是否需要更新组件，如果 true 表示需要更新，继续走后面的更新流程。
     */
    shouldComponentUpdate(nextProps, nextState) {
        let isUpdate = (this.props != nextProps) || (this.state != nextState);
        console.log("LayoutXYDemoContainer", "shouldComponentUpdate():" + isUpdate);
        return isUpdate;
    }

    /**
     * 如果组件状态或者属性改变，并且shouldComponentUpdate返回为 true
     * @param nextProps 更新之后的属性
     * @param nextState 更新之后的状态
     */
    componentWillUpdate(nextProps, nextState) {
        console.log("LayoutXYDemoContainer", "componentWillUpdate()");
    }

    /**
     * 更新完成界面之后通知
     * @param prevProps 更新之前的属性
     * @param prevState 更新之前的状态
     * @returns {boolean}
     */
    componentDidUpdate(prevProps, prevState) {
        console.log("LayoutXYDemoContainer", "componentDidUpdate()");
    }

    /**
     * 组件即将卸载前调用
     * 在这个函数中，可以做一些组件相关的清理工作，例如取消计时器、网络请求等。
     */
    componentDidUnMount() {
        console.log("LayoutXYDemoContainer", "componentDidUnMount()");

    }

    /**
     * 组件更新
     * @returns {XML}
     */
    render() {
        this.renderCount++;
        console.log("LayoutXYDemoContainer", "render() renderCount:" + this.renderCount);
        return (
            <View style={LayoutXYDemoContainerStyles.container}>
                <View style={LayoutXYDemoContainerStyles.body}>
                    <TouchableNativeFeedback
                        onLayout={(e)=> {
                            this.view.btn = e.nativeEvent.layout;
                        }}
                        onPress={()=>{
                            this.setState({data: this.view.btn});
                            console.log("CarLifeMoreGoods",`this.view.head.y-this.y:${this.view.head.y}:${this.y}`);
                            this.view.btn.screen = {y:(this.view.head.y-this.y)};
                        }}
                    >
                        <View
                            style={LayoutXYDemoContainerStyles.layoutBtn}>
                            <Text style={LayoutXYDemoContainerStyles.layoutText}>btn获取高度</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <ScrollView

                        onScrollEndDrag={(e) => {
                            try {
                                console.log("CarLifeMoreGoods",`onScrollEndDrag.this.y:${e.nativeEvent.contentOffset.y}`);
                                this.y = e.nativeEvent.contentOffset.y;
                                //alert(`onScrollEndDrag:${e.nativeEvent.contentOffset.y}:${e.nativeEvent.layoutMeasurement.height}`);
                            } catch (e) {
                                LogInfo("searchCarList fail:", e);
                            }
                        }}
                        onMomentumScrollEnd={(e) => {
                            try {
                                console.log("CarLifeMoreGoods",`onMomentumScrollEnd.this.y:${e.nativeEvent.contentOffset.y}`);
                                //alert(`${e.nativeEvent.contentOffset.y}:${e.nativeEvent.layoutMeasurement.height}`);
                                this.y = e.nativeEvent.contentOffset.y;
                            } catch (e) {
                                LogInfo("searchCarList fail:", e);
                            }
                        }}
                        style={LayoutXYDemoContainerStyles.scroll}>
                        <View
                            style={LayoutXYDemoContainerStyles.head}
                            onLayout={(e)=> {
                                this.view.head = e.nativeEvent.layout;
                            }}>
                            <Text onPress={()=>{this.setState({data: this.view.head})}}>backgroundColor: "#aaa",
                                width: 200,
                                height: 500,
                                marginTop: 20,
                                marginLeft:10</Text>
                        </View>
                        <View
                            style={LayoutXYDemoContainerStyles.child1}
                            onLayout={(e)=> {this.view.child1 = e.nativeEvent.layout}}>
                            <Text onPress={()=>{this.setState({data: this.view.child1})}}>this.view.child1</Text>
                        </View>
                        <View
                            style={LayoutXYDemoContainerStyles.child2}
                            onLayout={(e)=> {this.view.child2 = e.nativeEvent.layout}}>
                            <Text onPress={()=>{this.setState({data: this.view.child2})}}>this.view.child2</Text>
                            <View
                                style={LayoutXYDemoContainerStyles.child1}
                                onLayout={(e)=> {this.view.child21 = e.nativeEvent.layout}}>
                                <Text onPress={()=>{this.setState({data: this.view.child21})}}>this.view.child21</Text>
                            </View>
                        </View>

                        <View
                            style={LayoutXYDemoContainerStyles.child4}
                            onLayout={(e)=> {this.view.child4 = e.nativeEvent.layout}}>
                            <Text onPress={()=>{this.setState({data: this.view.child4})}}>this.view.child4</Text>
                        </View>

                        <View style={LayoutXYDemoContainerStyles.child3}>
                            <Text>{JSON.stringify(this.state.data)}</Text>
                        </View>
                    </ScrollView>
                </View>
                <View style={[LayoutXYDemoContainerStyles.child1,{position:'absolute',bottom:0}]}>
                    <Text style={{position:'absolute',bottom:0}}>2222222222222222222222222</Text>
                </View>
            </View>
        );
    }

}

const LayoutXYDemoContainerStyles = StyleSheet.create({
    container: {
        height:getApp().Window.height-StatusBar.currentHeight,
        width:getApp().Window.width,
        backgroundColor:'red'
    },
    body: {
        flex: 1,
        margin: 10,
        backgroundColor: "#eee",
        flexDirection: "column"
    },
    layoutBtn: {
        backgroundColor: "#789",
        width: deviceWidth,
        height: 50,
        justifyContent: "center",
        alignItems: "center",

    },
    layoutText: {
        color: "#fff",
    },
    scroll: {
        flex: 1,
        backgroundColor: "yellow"
    },
    head: {
        backgroundColor: "#aaa",
        width: 200,
        height: 500,
        marginTop: 20,
        marginLeft: 10
    },
    child1: {
        height: 50,
        width: 200,
        backgroundColor: "#999",
        marginTop: 20,
        marginLeft: 20
    },
    child2: {
        height: 200,
        width: 200,
        backgroundColor: "#999",
        marginTop: 20,
        marginLeft: 30
    },
    child3: {
        backgroundColor: "#999",
        alignSelf: "center",
        marginTop: 20,
        marginBottom: 100
        //position:"absolute",
        //top:300
    },
    child4: {
        height: 100,
        width: 100,
        backgroundColor: "#999",
        position: "absolute",
        top: 100,
        left: 200
    },
});