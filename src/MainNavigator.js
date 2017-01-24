/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.1.23 下午 4:02
 * @Desc: App入口
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Navigator
} from 'react-native';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from '../common/actions';
import MainRouter from './MainRouter';

class MainNavigator extends Component {


    constructor(props) {
        super(props);
        // 初始状态
        this.initialRoute = {
            name: 'MainRouter',
            component: MainRouter,            //测试综合首页
            params: {mobile: '13700000000'}
        }
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentDidUnMount() {

    }

    configureScene() {
        return Navigator.SceneConfigs.PushFromRight;
    }

    renderScene(route, navigator) {

        let Component = route.component;
        const {state, dispatch} = this.props;
        const action = bindActionCreators(actions, dispatch);
        return (
            <Component
                state={state}
                actions={action}
                {...route.params}
                navigator={navigator}/>
        );
    }

    render() {
        var _this = this;
        return (
            <Navigator
                initialRoute={_this.initialRoute}
                configureScene={_this.configureScene.bind(_this)}
                renderScene={_this.renderScene.bind(_this)}/>
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
export default connect(selector)(MainNavigator);