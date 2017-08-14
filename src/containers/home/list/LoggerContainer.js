/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.5.12 上午 11:08
 * @Desc: 公共组件 - LoggerContainer
 * @Name: LoggerContainer.js
 * @LifeCycle：https://github.com/kinshasa/react-native-qatest
 */

import React, {Component, PropTypes} from "react";
import {ScrollView, StyleSheet, View, Text, TouchableNativeFeedback, InteractionManager} from "react-native";
import JSONTree from "react-native-json-tree";
import TitleBar from "../../../components/bar/TitleBar";
import FlatList from "../../../components/listview/flatList/FlatList";
import LoadingView from "../../../components/view/LoadingView";
import ExportSimple from './ExportSimple'

export default class LoggerContainer extends Component {

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
        console.log("LoggerContainer constructor()");
        super(props, context);
        this.state = {data: []};
    }

    /**
     * 当前组件渲染次数
     * @type {number}
     */
    count = 0;

    componentWillMount() {
        console.log("LoggerContainer::componentWillMount()");

    }

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            // ...耗时较长的同步的任务...
            this.initData().then((data)=>{
                console.log("LoggerContainer::componentDidMount()",data);
            })
        });
    }

    componentWillReceiveProps(newProps) {
        console.log("LoggerContainer::componentWillReceiveProps()", newProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        let isUpdate = (this.props != nextProps) || (this.state != nextState);
        console.log("LoggerContainer::shouldComponentUpdate()", isUpdate);
        return isUpdate;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("LoggerContainer::componentWillUpdate()", new Date());
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("LoggerContainer::componentDidUpdate()", new Date());
    }

    componentWillUnmount() {
        console.log("LoggerContainer::componentWillUnmount()");
    }

    shouldItemUpdate = (prev, next) => {
        /**
         * Note that this does not check state.horizontal or state.fixedheight
         * because we blow away the whole list by changing the key in those cases.
         * Make sure that you do the same in your code, or incorporate all relevant
         * data into the item data, or skip this optimization entirely.
         */
        return prev.item !== next.item;
    };


    render() {
        this.count++;
        console.log("LoggerContainer::render() ExportSimple:", ExportSimple.getValues());
        return (
            <View style={LoggerContainerStyles.container}>
                <TitleBar label="日志系统"/>
                {this.renderHeader()}
                <FlatList
                    legacyImplementation={false}
                    showsVerticalScrollIndicator={false}
                    shouldItemUpdate={this.shouldItemUpdate}
                    refreshing={false}
                    data={this.state.data}
                    keyExtractor={(item, index) => index}
                    renderItem={({item, index}) => this.renderItem(item, index)}
                />
                <LoadingView
                    visible={!this.state.data || this.state.data.length<=0}
                    ref="loading"/>
            </View>
        );
    }

    renderHeader() {
        return (
            <View style={LoggerContainerStyles.headerView}>
                <TouchableNativeFeedback onPress={() => this.clear()}>
                    <View style={LoggerContainerStyles.headerViewBtn}>
                        <Text style={LoggerContainerStyles.headerViewText}>清空缓存</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback onPress={() => this.add()}>
                    <View style={LoggerContainerStyles.headerViewBtn}>
                        <Text style={LoggerContainerStyles.headerViewText}>新增数据</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback >
                    <View style={LoggerContainerStyles.headerViewBtn}>
                        <Text style={LoggerContainerStyles.headerViewText}>删除数据</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    }

    renderItem(item, index) {
        console.log("LoggerContainer::renderItem() item:", item);
        return (
            <ScrollView key={index} horizontal contentContainerStyle={LoggerContainerStyles.scrollView}>

                <JSONTree ref={'tree' + index} hideRoot data={item}/>
                <TouchableNativeFeedback onPress={() => this.togoExpend('tree' + index)}>
                    <View style={LoggerContainerStyles.rowViewBtn}>
                        <Text style={LoggerContainerStyles.rowViewText}>+</Text>
                    </View>
                </TouchableNativeFeedback>
            </ScrollView>
        );
    }

    async initData() {
        let data = await LocalStorage.getAllDataForKey('logger');
        this.setState({data});
        return data;
    }

    async clear() {
        await Loggers.c();
        await this.reStore();
    }

    async add(data = {key: 'key1', value: 'value1'}) {
        await Loggers.s(data);
        await this.reStore();
    }

    async reStore() {
        let data = await Loggers.g();
        this.setState({data});
    }

    togoExpend(name) {
        if (this.refs[name]) {
            console.log(name);
        }
    }
}


const LoggerContainerStyles = StyleSheet.create({
    container: {
        flex: 1
    },
    scrollView: {
        padding: 10,
        minWidth: getWidth(),
        borderBottomWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#eee',
    },
    headerView: {
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 10
    },
    headerViewBtn: {
        flex: 1,
        backgroundColor: 'green',
        margin: 3,
        paddingTop: 15,
        paddingBottom: 15,
        alignItems: 'center',
    },
    headerViewText: {color: '#eee', fontSize: 14, fontWeight: 'bold'},
    rowViewBtn: {
        position: 'absolute',
        right: 10,
        top: 10,
        borderRadius: 10,
        backgroundColor: '#fff',
        borderColor: '#eee',
        borderWidth: StyleSheet.hairlineWidth,
        width: 20,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    rowViewText: {color: '#999', fontSize: 16, fontWeight: 'bold'},
});