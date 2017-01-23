/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.1.23 下午 6:58
 * @Todo: 公共组件 - TitleBar
 * @NAME: MainScreen
 */

import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import TitleBar from "../components/bar/TitleBar"

export default class MainScreen extends Component {

    static propTypes = {
        style: View.propTypes.style,
        number: PropTypes.number,
        string: PropTypes.string,
        bool: PropTypes.bool,
        func: PropTypes.func,
    };

    static defaultProps = {};

    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(newProps) {

    }

    componentDidUpdate(prevProps, prevState) {
    }

    componentDidUnMount() {

    }

    render() {
        return (
            <View style={MainScreenStyles.container}>
                <TitleBar title="首页" style={{height:45}}/>
            </View>
        );
    }
}

const MainScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
});