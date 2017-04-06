/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.4.6 上午 10:29
 * @Desc: 公共组件 - FlatFlatListContainer
 * @Name: FlatFlatListContainer.js
 * @LifeCycle：https://github.com/kinshasa/react-native-qatest
 */

import React, {Component, PropTypes} from "react";
import {StyleSheet, Text, View,Image} from "react-native";
import FlatList from "./flatList/FlatList";
import icon from '../../../assets/NavLogo.png'

export default class FlatFlatListContainer extends Component {

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
        console.log("FlatListContainer constructor()");
        super(props, context);
        this.state = {data: []};
    }

    simple = {
        "id": 1647,
        "name": "YARiS L 致享",
        "image": "",
        "desc": null,
        "carBrandId": 93,
        "carLevelId": null,
        "idDeleted": 0,
        "salesModel": "1",
        "ceilingPrice": 89800,
        "floorPrice": 89800,
        "hot": 0,
        "salesVolume": null,
        "merchantId": 1,
        "merchantName": "大圣科技股份有限公司",
    };

    /**
     * 当前组件渲染次数
     * @type {number}
     */
    count = 0;

    async getData() {
        try {
            let url = 'https://app.ds.cn/ncar-main-mapp/car-search-mapi/ncar/search?pageNumber=1&pageSize=100&salesModel=1&sortType=2';
            let response = await fetch(url);
            let json = await response.json();
            let data = [...json.data.list, ...json.data.list, ...json.data.list, ...json.data.list];
            console.log('getData', json);
            this.setState({data});
        } catch (e) {

        }

    }

    getDataSource = () => {
        let data = [];
        for (let i = 0; i < 100; i++) {
            data[i] = 'data' + i;
        }
        console.log('getDataSource', data);
        return data;
    };

    componentWillMount() {
        console.log("FlatListContainer componentWillMount()", new Date());
    }

    componentDidMount() {
        console.log("FlatListContainer componentDidMount()", new Date());
        this.getData()
    }

    /**
     * 组件即将卸载前调用
     * 在这个函数中，可以做一些组件相关的清理工作，例如取消计时器、网络请求等。
     */
    componentWillUnmount() {
        console.log("FlatListContainer componentWillUnmount()");

    }

    renderItem = (item: ItemT, index: number) => {
        let uri = item.image;
        return (
            <View style={{flexDirection: "row",margin:10,padding:10,borderBottomWidth:1,borderColor:'#eee'}}>
                <Image style={{width: 100, height: 100}} source={uri ? {uri} : icon}></Image>
                <View style={{marginLeft:30}}>
                    <Text style={{fontSize: 18}}>{item.name}</Text>
                    <Text style={{marginTop:10,fontSize: 15, color: 'red'}}>
                        一口价：
                        <Text style={{fontSize:12}}>¥</Text>
                        {item.floorPrice}
                        <Text style={{fontSize:12}} >.00</Text>
                    </Text>

                    <Text style={{fontSize: 15, color: '#888',textDecorationLine:'line-through'}}>
                        指导价：
                        <Text style={{fontSize:12}}>¥</Text>
                        {item.ceilingPrice}
                        <Text style={{fontSize:12}} >.00</Text>
                    </Text>

                    <View style={{flexDirection:'row',alignItems:'center',marginTop:5}}>
                        <Text style={{fontSize:13,color:'#999',}}>{item.merchantName}</Text>
                        <Image style={{width: 18, height: 18,marginLeft:5}} source={icon}/>
                    </View>
                </View>
            </View>
        );
    };

    render() {
        this.count++;
        console.log("FlatListContainer render() count:", this.count);
        return (
            <View style={FlatFlatListContainerStyles.container}>
                {this.renderItem(this.simple)}
                <FlatList
                    refreshing
                    data={this.state.data}
                    keyExtractor={(item: ItemT, index: number) => {
                        return index
                    }}
                    renderItem={({item: ItemT, index: number}) => this.renderItem(ItemT, number)}
                />
            </View>
        );
    }

}

const FlatFlatListContainerStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
});