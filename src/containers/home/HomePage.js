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
        style: View.propTypes.style,
        number: PropTypes.number,
        string: PropTypes.string,
        bool: PropTypes.bool,
        func: PropTypes.func,
    };

    static defaultProps = {};

    constructor(props, context) {
        console.log("HomePage", "constructor()");
        super(props, context);
        this.state = {};
    }

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
        let isUpdate = (this.props != nextProps) || (this.state != nextState);
        console.log("Launcher", "shouldComponentUpdate():" + isUpdate);
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
        console.log("HomePage", "render()");
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