/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.1.24 下午 6:10
 * @Desc: 公共组件 - UserCenter
 * @NAME: UserCenter
 * @LIFECYCLE：http://www.tuicool.com/articles/nu6zInB
 */

import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

import TitleBar from "../../components/bar/TitleBar"

export default class UserCenter extends Component {

    static propTypes = {
        style: View.propTypes.style,
        number: PropTypes.number,
        string: PropTypes.string,
        bool: PropTypes.bool,
        func: PropTypes.func,
    };

    static defaultProps = {};

    constructor(props, context) {
        console.log("UserCenter", "constructor()");
        super(props, context);
        this.state = {};
    }
    
    /**
     * 当前组件渲染次数
     * @type {number}
     */
    renderCount = 0;
    
    componentWillMount() {
        console.log("UserCenter", "componentWillMount()");
    }

    componentDidMount() {
        console.log("UserCenter", "componentDidMount()");
    }

    componentWillReceiveProps(newProps) {
        console.log("UserCenter", "componentWillReceiveProps()");
    }

    shouldComponentUpdate(nextProps, nextState) {
        let isUpdate = (this.state != nextState);
        console.log("UserCenter", "shouldComponentUpdate() :" + isUpdate);
        return isUpdate;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("UserCenter", "componentWillUpdate()");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("UserCenter", "componentDidUpdate()");
    }

    componentDidUnMount() {
        console.log("UserCenter", "componentDidUnMount()");

    }

    render() {
        this.renderCount++;
        console.log("UserCenter", "render() renderCount:" + this.renderCount);
        return (
            <View style={UserCenterStyles.container}>
                <TitleBar title="用户中心" style={{height:45}}/>
                <Text>用户中心</Text>
            </View>
        );
    }
}

const UserCenterStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
});