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
} from 'react-native';
import TitleBar from "../../components/bar/TitleBar"

export default class HomePage extends Component {

    static propTypes = {

    };

    static defaultProps = {
        
    };

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

    componentDidUnMount() {
        console.log("HomePage", "componentDidUnMount()");

    }

    render() {
        this.renderCount++;
        console.log("HomePage", "render() renderCount:" + this.renderCount);
        return (
            <View style={HomePageStyles.container}>
                <TitleBar title="首页" style={{height:45}}/>
            </View>
        );
    }
}

const HomePageStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
});