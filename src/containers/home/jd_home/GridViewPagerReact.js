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
    Image,
} from 'react-native';

import Swiper from 'react-native-swiper'

export default class GridViewPagerReact extends Component {

    static propTypes = {
    };

    static defaultProps = {
        data: [
            {name:'京东超市',icon:LOGO_URI},
            {name:'京东超市',icon:LOGO_URI},
            {name:'京东超市',icon:LOGO_URI},
            {name:'京东超市',icon:LOGO_URI},
            {name:'京东超市',icon:LOGO_URI},
            {name:'京东超市',icon:LOGO_URI},
            {name:'京东超市',icon:LOGO_URI},
            {name:'京东超市',icon:LOGO_URI},
            {name:'京东超市',icon:LOGO_URI},
            {name:'京东超市',icon:LOGO_URI},
            {name:'京东超市',icon:LOGO_URI},
            {name:'京东超市',icon:LOGO_URI},
            {name:'京东超市',icon:LOGO_URI},
            {name:'京东超市',icon:LOGO_URI},
            {name:'京东超市',icon:LOGO_URI},
            {name:'京东超市',icon:LOGO_URI},
        ],
        pageCount:8,
    };

    constructor(props, context) {
        console.log("GridViewPagerReact constructor()");
        super(props, context);
        this.state = {refresh:true};
    }

    /**
     * 当前组件渲染次数
     * @type {number}
     */
    count = 0;
    data = [{name:'京东超市',icon:LOGO_URI}];
    pageData = [this.data,this.data];
    componentWillMount() {
        console.log("GridViewPagerReact componentWillMount()", new Date());

    }

    componentDidMount() {
        console.log("GridViewPagerReact componentDidMount()", this.props.data);
    }

    getData() {

        let data = this.props.data||[];
        let pageCount = this.props.pageCount || 8;
        let length = data.length || 0;
        let pageNum = Math.floor(length / pageCount);
        //转换为pageData
        this.pageData = [];
        for (let i = 0; i < pageNum; i++) {
            let end = pageCount*(i+1);
            let start = pageCount*(i);
            end = end > data.length ? data.length : end;
            this.pageData.push(data.slice(start, end));
        }
        //this.setState({refresh:false});
    }
    /**
     * 组件即将卸载前调用
     * 在这个函数中，可以做一些组件相关的清理工作，例如取消计时器、网络请求等。
     */
    componentWillUnmount() {
        console.log("GridViewPagerReact componentWillUnmount()");

    }

    renderItem(items){
        console.log("GridViewPagerReact renderItem()",items);
        let width = getWidth()/(this.props.pageCount/2);
        let height = width;
        return items.map((item,index)=>{
            return (
                <View key={index} style={{height,width,justifyContent:'center',alignItems:'center'}}>
                    <Image style={{width:px2dp(150),height:px2dp(150),marginLeft:px2dp(40),marginRight:px2dp(20)}} source={{uri:item.icon}}/>
                    <Text style={{color:'#777',fontSize:px2dp(38),marginTop:px2dp(10)}}>{item.name}</Text>
                </View>
            )
        })
    }

    renderPagerView(){
        console.log("GridViewPagerReact renderPagerView()",this.pageData);
        return this.pageData.map((items,index)=>{
            return (
                <View key={index} style={{height:getWidth()/2,width:getWidth(),flexDirection:'row',flexWrap: 'wrap',paddingTop:px2dp(20),paddingBottom:px2dp(20)}}>
                    {this.renderItem(items)}
                </View>
            )
        })
    }

    render() {
        this.count++;
        console.log("GridViewPagerReact render() count:", this.count);
        this.getData();
        return (
            <Swiper
                height={getWidth()/2+px2dp(40)}
                loop
                {...this.props}
            >
                {this.renderPagerView()}
            </Swiper>
        );
    }

}

const GridViewPagerReactStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
});