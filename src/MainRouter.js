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
        /**
         * 把this.props.store绑定到当前组件的this.props中，store包含state, dispatch
         * 通过bindActionCreators把actions通过dispatch的参数（action.type）来关联到reducer的返回,也就是state
         * 把actions,state绑定到this.props.state
         */
        // const {state, dispatch} = this.props;
        // const action = bindActionCreators(actions.DBUserInfo, dispatch);
        console.log("MainRouter render() state:",this.props.state);
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
function mapStateToProps(state){
    return {
        state: state
    }
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(actions.user_info, dispatch),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MainRouter);