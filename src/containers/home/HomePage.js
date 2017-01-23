/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.1.23 下午 7:05
 * @Todo: 公共组件 - 主页
 * @NAME: HomePage
 */

import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

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
            <View style={HomePageStyles.container}>

            </View>
        );
    }
}

const HomePageStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
});