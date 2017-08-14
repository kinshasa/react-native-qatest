/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.8.14 下午 6:38
 * @Desc: 公共组件 - GridViewPagerReact
 * @Name: GridViewPagerReact.js
 * @LifeCycle：https://github.com/kinshasa/react-native-qatest
 */

import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

import Swiper from 'react-native-swiper'

export default class GridViewPagerReact extends Component {

    static propTypes = {
    };

    static defaultProps = {
        data: [1,2,3,4,5,6,7,8,9,10,11,12,13],
        count:8,
    };

    constructor(props, context) {
        console.log("GridViewPagerReact constructor()");
        super(props, context);
        this.state = {};
    }

    /**
     * 当前组件渲染次数
     * @type {number}
     */
    count = 0;
    data = [];
    pageData = [[1,2,3,4,5,6,7,8],[9,10,11,12,13]];
    pageNum = 0;
    componentWillMount() {
        console.log("GridViewPagerReact componentWillMount()", new Date());
    }

    componentDidMount() {
        console.log("GridViewPagerReact componentDidMount()", new Date());
        this.getData();
    }

    getData() {

        //取数据
        if(typeof this.props.data === 'array'){
            this.data = this.props.data;
        }
        //转换为pageData

        //遍历组件
        let length = this.props.data.length || 0;
        let count = this.props.count || 1;
        let pageNum = length / count;
        for(let i=0;i<pageNum;i++){
            this.data.push(this.props.data)
        }
    }
    /**
     * 组件即将卸载前调用
     * 在这个函数中，可以做一些组件相关的清理工作，例如取消计时器、网络请求等。
     */
    componentWillUnmount() {
        console.log("GridViewPagerReact componentWillUnmount()");

    }

    renderItem(){
        return(
            <View></View>
        )
    }

    render() {
        this.count++;
        console.log("GridViewPagerReact render() count:", this.count);
        return (
            <Swiper
                height={px2dp(700)}
                loop autoplay
                {...this.props}
            >
                {this.renderItem()}
            </Swiper>
        );
    }

}

const GridViewPagerReactStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
});