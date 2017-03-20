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
import * as actions from '../../../common/actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
class HomePage extends Component {

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
        console.log(`#HomePage componentDidMount() this.props.state:`,this.props.state);
    }

    componentWillReceiveProps(newProps) {
        console.log("HomePage", "componentWillReceiveProps()");
    }

    shouldComponentUpdate(nextProps, nextState) {
        let isUpdate = (this.props != nextProps) || (this.state != nextState);
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
        /*Object.keys(scenes).map((item, i) => {
            list[item] = scenes[item].des || item;
        });*/
        console.log(`#HomePage getDataSource() this.props.state:`,this.props.state);

        if(this.props.state){
            list = this.props.state.router.data
        }
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
        console.log(`#HomePage render() renderCount:${this.renderCount};props.state:`,this.props.state);

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
                    enableEmptySections={true}
                    dataSource={ds.cloneWithRows(this.props.state.router.data)}
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

/**
 * 把this.state关联到this.props.state
 * @param state
 * @returns {{state: *}}
 */
function mapStateToProps(state) {
    return {
        state: state
    }
}

/**
 * 把actions.user_info, dispatch通过type关联到一起
 * @param dispatch
 * @returns {{actions: (A|B|M|N)}}
 */
function mapDispatchToProps(dispatch) {
    console.log("MainRouter actions:", actions);
    return {
        actions: bindActionCreators(actions, dispatch),
    }
}

/**
 * 把mapStateToProps, mapDispatchToProps绑定到MainRouter组件上
 */
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);