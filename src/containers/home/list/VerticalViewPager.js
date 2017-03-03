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
    ScrollView,
    Animated,
    InteractionManager
} from 'react-native';

const {height, width} = Dimensions.get('window');
import HomePage from '../HomePage'
import Settings from '../../set/Setting'
import QATest from '../../test/QATest'
import InvertibleScrollView from 'react-native-invertible-scroll-view';

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
        this.state = {
        };
        this.layout = {
            scrollViewLayout:{},//ScrollView的布局
            topViewLayout:{},//TopView的布局
            bottomViewLayout:{}//BottomView的布局
        };
        this.scrollOffset={
            begin:{},//beginDrag和scrollBegin的最新值
            end:{},//beginDrag和scrollBegin的最新值
            beginDrag:{},//ScrollView触摸起始坐标
            endDrag:{},//ScrollView触摸停止坐标
            scrollBegin:{},//ScrollView滑动起始坐标
            scrollEnd:{},//ScrollView滑动停止坐标
            threshold:0,//下拉可以看到bottomView的距离
            pos:0,//表示触摸前底部栏所处ScrollView的位置，0表示TopView，1表示BottomView
            type:0,//0表示下拉，1表示上拉
            state:false,//表示是否在滚动计算中
            status:0,//0没有滑动，1开始触摸滑动，2结束触摸，3释放手后自动滑动，4释放手后自动滑动停止(没有自动滑动即2，有即4)
        }
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
    componentWillUnmount() {
        console.log("VerticalViewPager", `componentWillUnmount()`);

    }

    onScroll(offset){
        console.log("VerticalViewPager", `onScroll() e:${JSON.stringify(offset)}；status:${this.scrollOffset.status}`);
        if(this.scrollOffset.status == 3){
            //释放触摸后自动滑动中
            if(this.scrollOffset.type){
                //下拉中
                //y为topViewLayout的BottomY值
                let y = this.layout.topViewLayout.height+this.layout.topViewLayout.y;
                if(offset.y >= y){
                    console.log("VerticalViewPager", `componentWillUnmount() status:${this.scrollOffset.status}`);
                    this.scrollOffset.status = 4;
                    this.onScrollDown();
                }
            }
        }

    }

    /**
     * 下拉到bottomView顶端，或恢复到bottomView顶端
     */
    onScrollDown(){
        console.log("VerticalViewPager", `onScrollDown() ${JSON.stringify(this.layout.bottomViewLayout)}`);
        this.refs['scrollView'] && this.refs['scrollView'].scrollTo({y:this.layout.bottomViewLayout.y,animated:true});
    }

    /**
     * 上拉到topView底端，或恢复到topView底端
     */
    onScrollTop(){
        console.log("VerticalViewPager", `onScrollTop()`);
        this.refs['scrollView'] && this.refs['scrollView'].scrollTo({y:this.scrollOffset.threshold,animated:true});
    }

    /**
     * 滚动计算最终位置
     * @param type
     */
    pull(type){
        console.log("VerticalViewPager", `pull(${type})state: ${this.scrollOffset.state}`);
        //如果在计算中则不需要重复计算
        if(this.scrollOffset.state == true){
            return;
        }

        this.scrollOffset.state = true;

        if(this.scrollOffset.beginDrag.y <= this.scrollOffset.endDrag.y){
            //下拉
            this.scrollOffset.type = 0;
        }else{
            //上拉
            this.scrollOffset.type = 1;
        }
        //下拉可以看到bottomView的距离
        this.scrollOffset.threshold = this.layout.topViewLayout.height - this.layout.scrollViewLayout.height+this.layout.topViewLayout.y;

        //TopView的底部坐标
        let topViewBottomY = this.layout.topViewLayout.height+this.layout.topViewLayout.y;
        //BottomView置顶后底部栏坐标
        //topViewBottomY = topViewBottomY+this.layout.scrollViewLayout.height;
        //判断当前所处ScrollView的组件位置
        if(this.scrollOffset.beginDrag.y <= this.scrollOffset.threshold){
            this.scrollOffset.pos = 0;
        }else if(this.scrollOffset.beginDrag.y >= (topViewBottomY+10)){
            this.scrollOffset.pos = 1;
        }else{
            this.scrollOffset.pos = 2;
        }

        //ScrollView下拉到滑动停止后的距离
        let y = this.scrollOffset.end.y;

        console.log("VerticalViewPager", `pull(${type})pos: ${this.scrollOffset.pos}`);
        //下拉
        if(this.scrollOffset.type == 0){
            if(this.scrollOffset.pos == 1){
                //如果起始触摸位置在下面，则不需要计算滚动位置。
                return;
            }
            if(y>(this.scrollOffset.threshold+30)){
                //下拉到bottomView顶端
                this.onScrollDown();
            }else if(y > this.scrollOffset.threshold){
                //不超过下拉临界值+10，不用下拉，恢复到topView的底端
                this.onScrollTop();
            }else{
                console.log("VerticalViewPager", `cannot pull down.`);
            }
        }else{
            if(this.scrollOffset.pos == 0){
                //如果起始触摸位置在上面，则不需要计算滚动位置。
                console.log("VerticalViewPager", `pull(${type})pos: ${this.scrollOffset.pos}`);
                return;
            }
            //上拉可以看到TopView的距离为 TopView底部坐标(TopView的高度和Y轴值)
            let topViewBottomY = this.layout.topViewLayout.height+this.layout.topViewLayout.y;
            if(y<(topViewBottomY-30)){
                //上拉到TopView顶端
                this.onScrollTop();
            }else if(y > topViewBottomY){
                //不超过下拉临界值+10，不用下拉，恢复到topView的底端
                this.onScrollDown();
            }else{
                console.log("VerticalViewPager", `cannot pull up.`);
            }
        }
        console.log("VerticalViewPager", `pull(${type})scrollOffset: ${JSON.stringify(this.scrollOffset)}`);
        console.log("VerticalViewPager", `pull(${type})layout: ${JSON.stringify(this.layout)}`);
    }
    /**
     * 组件更新
     * @returns {XML}
     */
    render() {
        this.renderCount++;
        console.log("VerticalViewPager", "render() renderCount:" + this.renderCount);

        return (
            <ScrollView
                pagingEnabled
                alwaysBounceVertical
                scrollsToTop
                scrollEventThrottle={1000}
                ref="scrollView"
                onScroll={(e)=>{{this.onScroll(e.nativeEvent.contentOffset)}}}
                onLayout={(e)=>{this.layout.scrollViewLayout = e.nativeEvent.layout}}
                onScrollBeginDrag={(e) => {
                    this.scrollOffset.beginDrag = e.nativeEvent.contentOffset;
                    this.scrollOffset.begin = e.nativeEvent.contentOffset;
                    this.scrollOffset.state = false;
                    this.scrollOffset.status = 1;
                }}
                onScrollEndDrag={(e) => {
                    this.scrollOffset.endDrag = e.nativeEvent.contentOffset;
                    this.scrollOffset.end = e.nativeEvent.contentOffset;
                    this.scrollOffset.status = 2;
                    this.pull('onScrollEndDrag');
                }}
                onMomentumScrollBegin={(e) => {
                    this.scrollOffset.scrollBegin = e.nativeEvent.contentOffset;
                    //this.scrollOffset.begin = e.nativeEvent.contentOffset;
                    this.scrollOffset.status = 3;
                }}
                onMomentumScrollEnd={(e) => {
                    this.scrollOffset.end = e.nativeEvent.contentOffset;
                    this.scrollOffset.scrollEnd = e.nativeEvent.contentOffset;
                    this.scrollOffset.status = 4;
                    this.pull('onMomentumScrollEnd');
                }}
                style={VerticalViewPagerStyles.container}>
                <View
                    onLayout={(e)=>{this.layout.topViewLayout = e.nativeEvent.layout}}
                    style={{width, height: height+400, backgroundColor: "red",justifyContent:"flex-end"}}>
                    <Text
                        onPress={()=>{this.onScrollDown()}}
                        style={VerticalViewPagerStyles.criticalView}>下拉</Text>

                </View>
                <View
                    onLayout={(e)=>{this.layout.bottomViewLayout = e.nativeEvent.layout}}
                    style={{width, height: height+400, backgroundColor: "green"}}>
                    <Text
                        onPress={()=>{this.onScrollTop()}}
                        style={VerticalViewPagerStyles.criticalView}>上拉</Text>
                </View>
                {/*<HomePage tabLabel="HomePage"/>*/}
                {/*<Settings tabLabel="Settings"/>*/}
                {/*<QATest tabLabel="QATest"/>*/}
            </ScrollView>
        );
    }

}

const VerticalViewPagerStyles = StyleSheet.create({
    container: {
        width: width,
        backgroundColor: "#aaa",
        flex: 1
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
    },
    criticalView:{
        padding: 10, backgroundColor: "#999", margin: 5
    }
});