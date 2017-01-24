/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.1.23 下午 7:04
 * @Desc: 公共组件 - 公共Component
 * @NAME: MainComponent
 */

import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import TitleBar from "../components/bar/TitleBar"

export default class MainComponent extends Component {

    static propTypes = {
        style: View.propTypes.style,
        number: PropTypes.number,
        string: PropTypes.string,
        bool: PropTypes.bool,
        func: PropTypes.func,
    };

    static defaultProps = {};

    constructor(props, context) {
        console.log("MainComponent", "constructor()");
        super(props, context);
        this.state = {};
    }

    componentWillMount() {
        console.log("MainComponent", "componentWillMount()");
    }

    componentDidMount() {
        console.log("MainComponent", "componentDidMount()");
    }

    componentWillReceiveProps(newProps) {
        console.log("MainComponent", "componentWillReceiveProps()");
    }

    shouldComponentUpdate() {
        console.log("MainComponent", "shouldComponentUpdate()");
        return false;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("MainComponent", "componentWillUpdate()");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("MainComponent", "componentDidUpdate()");
        return false;
    }

    componentDidUnMount() {
        console.log("MainComponent", "componentDidUnMount()");

    }

    render() {
        console.log("MainComponent", "render()");
        return (
            <View style={MainComponentStyles.container}>
                <TitleBar title="12323" style={{height:45}}/>
                <Text>123455</Text>
            </View>
        );
    }
}

const MainComponentStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
});