/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.1.23 下午 4:02
 * @Desc: 路由
 * @NAME: MainRouter.js
 * @LIFECYCLE：http://www.tuicool.com/articles/nu6zInB
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import {Actions, Scene, Router} from 'react-native-router-flux';
import scenes from './scenes';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from '../common/actions';


class MainRouter extends Component {


    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    componentDidMount() {
        this.props.actions.register()
    }

    render() {

        console.log("MainRouter render() state:", this.props.state);
        return (
            <Router
                state={this.props.state}
                actions={this.props.actions}
                scenes={scenes}/>
        );
    }
}

/**
 * 把this.state绑定到this.props.state上
 * 相当于 组件里面的赋值：state={this.state}
 * @param state
 * @returns {{state: *}}
 */
function selector(state) {
    return {
        state: state
    }
}

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
export default connect(mapStateToProps, mapDispatchToProps)(MainRouter);