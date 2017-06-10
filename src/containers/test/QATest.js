/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.3.1 下午 3:33
 * @Desc: 公共组件 - QATest
 * @Name: QATest.js
 * @LifeCycle：http://www.tuicool.com/articles/nu6zInB
 */

import React, {Component, PropTypes} from "react";
import {ListView, StyleSheet, Text, View} from "react-native";
import {Actions} from "react-native-router-flux";
import TitleBar from "../../components/bar/TitleBar";
import Icon from "react-native-vector-icons/FontAwesome";
import * as actions from "../../../common/actions";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class QATest extends Component {

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
        console.log("QATest::constructor()");
        super(props, context);
        this.state = {};
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
        console.log("QATest::componentWillMount()");
    }

    /**
     * 组件加载后
     * 生命周期中仅被调用1次，可以使用SetState
     * 用于网络请求和页面渲染
     */
    componentDidMount() {
        console.log("QATest::componentDidMount()");
        this.props.actions.getQATestScenesList();
    }

    /**
     * 父组件属性值变更监听
     * 可以使用SetState
     * @param newProps
     */
    componentWillReceiveProps(newProps) {
        console.log("QATest::componentWillReceiveProps()");
    }

    /**
     * 属性值/状态值变更后，是否需要刷新页面
     * @param nextProps 是即将被设置的属性，旧的属性还是可以通过 this.props 来获取。
     * @param nextState 表示组件即将更新的状态值。
     * @returns {boolean} 默认true, 返回值决定是否需要更新组件，如果 true 表示需要更新，继续走后面的更新流程。
     */
    shouldComponentUpdate(nextProps, nextState) {
        let isUpdate = (this.props != nextProps) || (this.state != nextState);
        //let isUpdate = this.state != nextState;
        console.log("QATest::shouldComponentUpdate()", isUpdate);
        return isUpdate;
    }

    /**
     * 如果组件状态或者属性改变，并且shouldComponentUpdate返回为 true
     * @param nextProps 更新之后的属性
     * @param nextState 更新之后的状态
     */
    componentWillUpdate(nextProps, nextState) {
        console.log("QATest::componentWillUpdate()");
    }

    /**
     * 更新完成界面之后通知
     * @param prevProps 更新之前的属性
     * @param prevState 更新之前的状态
     * @returns {boolean}
     */
    componentDidUpdate(prevProps, prevState) {
        console.log("QATest::componentDidUpdate()");
    }

    /**
     * 组件即将卸载前调用
     * 在这个函数中，可以做一些组件相关的清理工作，例如取消计时器、网络请求等。
     */
    componentDidUnMount() {
        console.log("QATest::componentDidUnMount()");

    }

    jumpPage(rowData, sectionId, rowId){
        try {
            console.log(rowId);
            Actions[rowId]()
        } catch (e) {
            alert(rowData)
        }
    }

    renderRow = (rowData, sectionId, rowId) => {

        return (
            <View style={QATestStyles.btnList}>
                <Icon.Button
                    name="star" backgroundColor="#aaa"
                    onPress={() => this.jumpPage(rowData, sectionId, rowId)}>
                    <Text style={{fontFamily: 'Arial', fontSize: 15}}>{rowData}</Text>
                </Icon.Button>
            </View>
        )
    };

    /**
     * 组件更新
     * @returns {XML}
     */
    render() {
        this.renderCount++;
        console.log("QATest::render() renderCount", this.renderCount);
        return (
            <View style={[QATestStyles.test, this.props.style]}>
                <TitleBar
                    label="品质测试"
                    labelStyle={{backgroundColor: "transparent", color: "black"}}
                    leftView={
                        <Icon.Button
                            name="list-ul" size={25} color="#166AF6" backgroundColor="transparent"
                            onPress={() => alert("click android logo")}/>
                    }
                    rightView={
                        <Icon.Button
                            name="undo" size={25} color="#999" backgroundColor="transparent"
                            onPress={() => alert("click share icon")}/>
                    }
                    style={{height: 45}}/>

                <ListView
                    enableEmptySections={true}
                    dataSource={ds.cloneWithRows(this.props.state.data.test)}
                    renderRow={this.renderRow}
                />
            </View>
        );
    }

}



const QATestStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        width: getApp().Window.width,
        height: getApp().Window.height * 2
    },
    btnList: {
        margin: 3,
    },
    test: ()=>{console.log("QATestStyles::create()");return {flex: 1,}}
    });

/**
 * 把this.state关联到this.props.state
 * @param state
 * @returns {{state: *}}
 */
function mapStateToProps(state) {
    return {
        state: state.router
    }
}

/**
 * 把actions.user_info, dispatch通过type关联到一起
 * @param dispatch
 * @returns {{actions: (A|B|M|N)}}
 */
function mapDispatchToProps(dispatch) {
    console.log("HomePage actions:, actions");
    return {
        actions: bindActionCreators(actions, dispatch),
    }
}

/**
 * 把mapStateToProps, mapDispatchToProps绑定到MainRouter组件上
 */
export default connect(mapStateToProps, mapDispatchToProps)(QATest);