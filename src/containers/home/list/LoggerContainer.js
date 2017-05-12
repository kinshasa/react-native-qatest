/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.5.12 上午 11:08
 * @Desc: 公共组件 - LoggerContainer
 * @Name: LoggerContainer.js
 * @LifeCycle：https://github.com/kinshasa/react-native-qatest
 */

import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
} from 'react-native';
import TitleBar from "../../../components/bar/TitleBar";
import FlatList from "../../../components/listview/flatList/FlatList";
import LoadingView from '../../../components/view/LoadingView'
// import {getLog,saveLog} from "../../../../common/utils/Logger";
import JSONTree from 'react-native-json-tree'
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
        getApp().Logger.saveLog(getApp().Logger.getLog().length,getApp().Http);
        getApp().Logger.saveLog(getApp().Logger.getLog().length,getApp().Http);
        getApp().Logger.saveLog(getApp().Logger.getLog().length,getApp().Http);
        getApp().Logger.saveLog(getApp().Logger.getLog().length,getApp().Http);
        getApp().Logger.saveLog(getApp().Logger.getLog().length,getApp().Http);
        this.state = {data: getApp().Logger.getLog()};
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
        console.log("LoggerContainer::componentDidMount()", new Date());
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
    }

    renderItem = (item: ItemT, index: number) => {
        return (
            <View style={{marginLeft: 10,marginRight: 10, paddingBottom: 10, borderBottomWidth: 1, borderColor: '#eee'}}>
                <ScrollView horizontal contentContainerStyle={{flex:1}}>
                    <JSONTree hideRoot data={item}/>
                </ScrollView>
            </View>
        );
    };

    render() {
        this.count++;
        console.log("LoggerContainer::render() count:", this.count);
        return (
            <View style={LoggerContainerStyles.container}>
                <TitleBar label="日志系统"/>
                <FlatList
                    legacyImplementation={false}
                    shouldItemUpdate={this.shouldItemUpdate}
                    refreshing={false}
                    data={this.state.data}
                    keyExtractor={(item: ItemT, index: number) => {
                        return index
                    }}
                    renderItem={({item: ItemT, index: number}) => this.renderItem(ItemT, number)}
                />
                <LoadingView
                    visible={false} ref={(ref) => {
                    this.loadingView = ref
                }}/>
            </View>
        );
    }

}

const LoggerContainerStyles = StyleSheet.create({
    container: {
        flex:1
    },
    scrollView: {
        backgroundColor:'#888',
        width:getApp().Window.width,
        height:getApp().Window.height,
    },
});