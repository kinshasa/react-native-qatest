/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.4.6 上午 10:29
 * @Desc: 公共组件 - FlatListContainer
 * @Name: FlatListContainer.js
 * @LifeCycle：https://github.com/kinshasa/react-native-qatest
 */

import React, {Component, PropTypes} from "react";
import {StyleSheet, Text, View, Image, InteractionManager} from "react-native";
import FlatList from "../../../components/listview/flatList/FlatList";
import icon from '../../../assets/NavLogo.png'
import LoadingView from '../../../components/view/LoadingView'
import TitleBar from "../../../components/bar/TitleBar"

export default class FlatListContainer extends Component {

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
        console.log("FlatListContainer constructor() context:", context);
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

    /**
     * 当前组件是否已经移除，如果移除，则不需要setState更新组件
     * @type {boolean}
     */
    unMount = false;

    async getData2() {
        try {
            let url = 'https://app.ds.cn/ncar-main-mapp/car-search-mapi/ncar/search?pageNumber=1&pageSize=10&salesModel=1&sortType=2';
            let response = await fetch(url);
            let json = await response.json();
            let data = [...json.data.list, ...json.data.list, ...json.data.list, ...json.data.list];
            console.log('FlatListContainer getData()', json.data.list.length);
            setTimeout(()=>{
                !this.unMount && this.setState({data});
            },200);
        } catch (e) {

        }
    }

    getData() {
        try {
            let url = 'https://app.ds.cn/ncar-main-mapp/car-search-mapi/ncar/search?pageNumber=1&pageSize=100&salesModel=1&sortType=2';
            fetch(url)
                .then((response) => {
                    return response.json()
                })
                .then((json) => {
                    let data = [...json.data.list, ...json.data.list, ...json.data.list, ...json.data.list];
                    console.log('FlatListContainer getData()', json.data.list.length);
                    !this.unMount && this.setState({data});
                });

        } catch (e) {

        }
    }

    getDataSource = () => {
        let data = [];
        for (let i = 0; i < 100; i++) {
            data[i] = 'data' + i;
        }
        //console.log('getDataSource', data);
        return data;
    };

    componentWillMount() {
        console.log("FlatListContainer componentWillMount()", new Date());
    }

    componentDidMount() {
        console.log("FlatListContainer componentDidMount()", new Date());
        this.timer = setTimeout(() => {
            this.getData2();
        }, 200);
        InteractionManager.runAfterInteractions(() => {
            // ...耗时较长的同步的任务...
        });

    }

    /**
     * 组件即将卸载前调用
     * 在这个函数中，可以做一些组件相关的清理工作，例如取消计时器、网络请求等。
     */
    componentWillUnmount() {
        this.unMount = true;
        console.log("FlatListContainer componentWillUnmount() unMount:", this.unMount);
        clearTimeout(this.timer);
    }

    renderItem = (item: ItemT, index: number) => {
        let uri = item.image;
        return (
            <View style={{flexDirection: "row", margin: 10, padding: 10, borderBottomWidth: 1, borderColor: '#eee'}}>
                <Image style={{width: 100, height: 100}} source={uri ? {uri} : icon}/>
                <View style={{marginLeft: 30}}>
                    <Text style={{fontSize: 18}}>{item.name}</Text>
                    <Text style={{marginTop: 10, fontSize: 15, color: 'red'}}>
                        一口价：
                        <Text style={{fontSize: 12}}>¥</Text>
                        {item.floorPrice}
                        <Text style={{fontSize: 12}}>.00</Text>
                    </Text>

                    <Text style={{fontSize: 15, color: '#888', textDecorationLine: 'line-through'}}>
                        指导价：
                        <Text style={{fontSize: 12}}>¥</Text>
                        {item.ceilingPrice}
                        <Text style={{fontSize: 12}}>.00</Text>
                    </Text>

                    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
                        <Text style={{fontSize: 13, color: '#999',}}>{item.merchantName}</Text>
                        <Image style={{width: 18, height: 18, marginLeft: 5}} source={icon}/>
                    </View>
                </View>
            </View>
        );
    };

    shouldItemUpdate = (prev, next) => {
        /**
         * Note that this does not check state.horizontal or state.fixedheight
         * because we blow away the whole list by changing the key in those cases.
         * Make sure that you do the same in your code, or incorporate all relevant
         * data into the item data, or skip this optimization entirely.
         */
        return prev.item !== next.item;
    };

    onRefresh = () =>{
        alert('onRefresh: nothing to refresh :P')
    };

    render() {
        this.count++;
        console.log("FlatListContainer render() count:", this.count);
        return (
            <View style={FlatListContainerStyles.container}>
                <TitleBar title="首页" style={{height:45}}/>
                {
                    false &&
                    this.renderItem(this.simple)
                }
                <FlatList
                    legacyImplementation={false}
                    refreshing={false}
                    data={this.state.data}
                    shouldItemUpdate={this.shouldItemUpdate}
                    onRefresh={this.onRefresh}
                    keyExtractor={(item: ItemT, index: number) => {
                        return index
                    }}
                    renderItem={({item: ItemT, index: number}) => this.renderItem(ItemT, number)}
                />
                <LoadingView
                    callback={this.getData2}
                    visible={!this.state.data.length} ref={(ref) => {
                    this.loadingView = ref
                }}/>
            </View>
        );
    }

}

const FlatListContainerStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
});