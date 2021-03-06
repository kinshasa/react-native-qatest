/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.3.10 下午 5:47
 * @Desc: 公共组件 - NestScrollViewContainer
 * @Name: NestScrollViewContainer.js
 * @LifeCycle：https://github.com/kinshasa/react-native-qatest
 */

import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    Dimensions
} from 'react-native';
import VerticalViewPagerSimple from './VerticalViewPagerContainer'


const {height, width} = Dimensions.get('window');

export default class NestScrollViewContainer extends Component {

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
        console.log("NestScrollViewContainer", `constructor()`);
        super(props, context);
        this.state = {refresh:false};
        this.refView = {
            scrollView:{},
            text:{}
        }
    }

    /**
     * 当前组件渲染次数
     * @type {number}
     */
    count = 0;

    componentWillMount() {
        console.log("NestScrollViewContainer componentWillMount()", ``);
    }

    componentDidMount() {
        //console.log("NestScrollViewContainer componentDidMount() this.refs['view'].props.children[0]", this.refs['view'].props.children[0]);
    }

    /**
     * 父组件属性值变更监听
     * 可以使用SetState
     * @param newProps
     */
    componentWillReceiveProps(newProps) {
        console.log("NestScrollViewContainer componentWillReceiveProps()", newProps);
    }

    /**
     * 属性值/状态值变更后，是否需要刷新页面
     * @param nextProps 是即将被设置的属性，旧的属性还是可以通过 this.props 来获取。
     * @param nextState 表示组件即将更新的状态值。
     * @returns {boolean} 默认true, 返回值决定是否需要更新组件，如果 true 表示需要更新，继续走后面的更新流程。
     */
    shouldComponentUpdate(nextProps, nextState) {
        let isUpdate = (this.props != nextProps) || (this.state != nextState);
        console.log("NestScrollViewContainer shouldComponentUpdate()", ``);
        return isUpdate;
    }

    /**
     * 如果组件状态或者属性改变，并且shouldComponentUpdate返回为 true
     * @param nextProps 更新之后的属性
     * @param nextState 更新之后的状态
     */
    componentWillUpdate(nextProps, nextState) {
        console.log("NestScrollViewContainer componentWillUpdate()", ``);
    }

    /**
     * 更新完成界面之后通知
     * @param prevProps 更新之前的属性
     * @param prevState 更新之前的状态
     * @returns {boolean}
     */
    componentDidUpdate(prevProps, prevState) {
        console.log("NestScrollViewContainer componentDidUpdate()", ``);
    }

    /**
     * 组件即将卸载前调用
     * 在这个函数中，可以做一些组件相关的清理工作，例如取消计时器、网络请求等。
     */
    componentWillUnmount() {
        console.log("NestScrollViewContainer componentWillUnmount()", ``);

    }

    render() {
        this.count++;
        console.log("NestScrollViewContainer render() count:", `${this.count}`);
        return (
            <View>
                <Text style={{width,height:100,position:'absolute',zIndex:1}}>adawwd</Text>
                <ScrollView
                    style={NestScrollViewContainerStyles.container}>
                    <View
                        ref="view"
                        style={NestScrollViewContainerStyles.nestScrollView}>
                        <Text ref="text" onPress={()=>{alert('test')}} style={{width,height:100}}>test2222222222</Text>
                        {this.state.refresh && this.refs['text']}
                    </View>

                </ScrollView>
            </View>
        );
    }

}

const NestScrollViewContainerStyles = StyleSheet.create({
    container: {
        width,height:height*2
    },
    nestScrollView: {
        backgroundColor:"blue",
        width,
        minHeight:height*2,

    },
});