/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.3.24 下午 4:58
 * @Desc: 公共组件 - CustomListViewContainer
 * @Name: CustomListViewContainer.js
 * @LifeCycle：https://github.com/kinshasa/react-native-qatest
 */

import React, {Component, PropTypes} from "react";
import {Dimensions, InteractionManager, ListView, StyleSheet, Text, View} from "react-native";
import TitleBar from "../../../components/bar/TitleBar";
import Icon from "react-native-vector-icons/FontAwesome";

const {height, width} = Dimensions.get('window');
const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2,
    sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
});

export default class CustomListViewContainer extends Component {

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
        console.log("CustomListViewContainer constructor()");
        super(props, context);
        this.state = {refresh: false};
    }

    /**
     * 当前组件渲染次数
     * @type {number}
     */
    count = 0;

    //ListView的dataSource
    data = {};

    componentWillMount() {
        console.log("CustomListViewContainer componentWillMount()", new Date());
    }

    componentDidMount() {
        console.log("CustomListViewContainer componentDidMount()", new Date());
        InteractionManager.runAfterInteractions(() => {
            // ...耗时较长的同步的任务...
            this.getDataSource();
            this.setState({refresh: true});
        });

    }

    /**
     * 父组件属性值变更监听
     * 可以使用SetState
     * @param newProps
     */
    componentWillReceiveProps(newProps) {
        console.log("CustomListViewContainer componentWillReceiveProps()", newProps);
    }

    /**
     * 属性值/状态值变更后，是否需要刷新页面
     * @param nextProps 是即将被设置的属性，旧的属性还是可以通过 this.props 来获取。
     * @param nextState 表示组件即将更新的状态值。
     * @returns {boolean} 默认true, 返回值决定是否需要更新组件，如果 true 表示需要更新，继续走后面的更新流程。
     */
    shouldComponentUpdate(nextProps, nextState) {
        let isUpdate = (this.props != nextProps) || (this.state != nextState);
        console.log("CustomListViewContainer shouldComponentUpdate()", isUpdate);
        return isUpdate;
    }

    /**
     * 如果组件状态或者属性改变，并且shouldComponentUpdate返回为 true
     * @param nextProps 更新之后的属性
     * @param nextState 更新之后的状态
     */
    componentWillUpdate(nextProps, nextState) {
        console.log("CustomListViewContainer componentWillUpdate()");
    }

    /**
     * 更新完成界面之后通知
     * @param prevProps 更新之前的属性
     * @param prevState 更新之前的状态
     * @returns {boolean}
     */
    componentDidUpdate(prevProps, prevState) {
        console.log("CustomListViewContainer componentDidUpdate()");
    }

    /**
     * 组件即将卸载前调用
     * 在这个函数中，可以做一些组件相关的清理工作，例如取消计时器、网络请求等。
     */
    componentWillUnmount() {
        console.log("CustomListViewContainer componentWillUnmount()");
        this.data = null;

    }

    getDataSource() {
        console.log("CustomListViewContainer getDataSource() data",this.data);
        for (let i = 0; i < 100; i++) {
            this.data['sectionID_'+i] = {};
            for(let j=0;j<100;j++){
                this.data['sectionID_'+i]['rowID_'+j] = 'rowData_'+i+'_'+j;
            }
        }
        return this.data;
    }

    renderHeader = () => {
        return (
            <Text >{'1万行数据'}</Text>
        )
    };

    renderSectionHeader = (sectionData, sectionID) => {
        return(
            <Text style={{color:"red", fontSize: 18,width,backgroundColor:"green"}}>{sectionID}</Text>
        )
    };

    renderRow = (rowData, sectionId, rowId) => {

        return (
            <View style={{margin: 3,}}>
                <Icon.Button name="star" backgroundColor="#aaa">
                    <Text style={{fontFamily: 'Arial', fontSize: 15}}>{rowId},{rowData}</Text>
                </Icon.Button>
            </View>
        )
    };

    render() {
        this.count++;
        console.log("CustomListViewContainer render() count:", this.count);
        return (
            <View style={CustomListViewContainerStyles.container}>
                <TitleBar
                    label="大数据量的ListView测试"
                    labelStyle={{backgroundColor: "transparent", color: "black"}}
                    style={{height: 45}}/>
                <ListView
                    onEndReachedThreshold={50}
                    pageSize={30}
                    initialListSize={30}
                    renderHeader={this.renderHeader}
                    renderSectionHeader={this.renderSectionHeader}
                    renderRow={this.renderRow}
                    enableEmptySections={true}
                    dataSource={ds.cloneWithRowsAndSections(this.data)}//{'test':{'t1':11,'t2':22},'test2':[2,4]}
                />
            </View>
        );
    }

}

const CustomListViewContainerStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
});