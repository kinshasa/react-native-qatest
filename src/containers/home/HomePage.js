/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.1.23 下午 7:05
 * @Desc: 公共组件 - 主页
 * @NAME: HomePage
 */

import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    View,
    Text,
    ListView
} from 'react-native';

import {Actions} from 'react-native-router-flux'
import scenes from '../../scenes';

import TitleBar from "../../components/bar/TitleBar"
import Icon from 'react-native-vector-icons/FontAwesome';

export default class HomePage extends Component {

    static propTypes = {};

    static defaultProps = {};

    constructor(props, context) {
        console.log("HomePage", "constructor()");
        super(props, context);
        this.state = {};
    }

    /**
     * 当前组件渲染次数
     * @type {number}
     */
    renderCount = 0;

    componentWillMount() {
        console.log("HomePage", "componentWillMount()");
    }

    componentDidMount() {
        console.log("HomePage", "componentDidMount()");
    }

    componentWillReceiveProps(newProps) {
        console.log("HomePage", "componentWillReceiveProps()");
    }

    shouldComponentUpdate(nextProps, nextState) {
        let isUpdate = (this.state != nextState);
        console.log("HomePage", "shouldComponentUpdate():" + isUpdate);
        return isUpdate;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("HomePage", "componentWillUpdate()");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("HomePage", "componentDidUpdate()");
    }

    componentWillUnmount() {
        console.log("HomePage", "componentWillUnmount()");
    }

    getDataSource() {
        let list = {};
        Object.keys(scenes).map((item, i) => {
            list[item] = scenes[item].des || item;
        });
        console.log('HomePage list', list);
        return list;
    }

    renderRow(rowData, sectionId, rowId) {

        return (
            <View style={HomePageStyles.btnList}>
                <Icon.Button name="star" backgroundColor="#aaa" onPress={() => {try { Actions[rowId]() } catch (e) {alert(e.message)}}}>
                    <Text style={{fontFamily: 'Arial', fontSize: 15}}>{rowData}</Text>
                </Icon.Button>
            </View>
        )
    }

    render() {
        this.renderCount++;
        console.log("HomePage", "render() renderCount:" + this.renderCount);
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        return (
            <View style={HomePageStyles.container}>
                <TitleBar
                    label="首页(热修复更新成功)"
                    labelStyle={{backgroundColor:"transparent",color:"black"}}
                    leftView={<Icon.Button name="android" size={30} color="#166AF6" backgroundColor="transparent"
                                           onPress={()=>{alert("click android logo")}}/>}
                    rightView={<Icon.Button name="share-alt" size={25} color="#999" backgroundColor="transparent"
                                            onPress={()=>{alert("click share icon")}}/>}
                    style={{height: 45}}/>

                <ListView
                    dataSource={ds.cloneWithRows(this.getDataSource())}
                    renderRow={this.renderRow}
                />
            </View>
        );
    }


}

const HomePageStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    btnList: {
        margin: 3,
    }
});