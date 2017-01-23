/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.1.23 下午 4:46
 * @Todo: 公共组件 - 标题栏
 * @NAME: TitleBar
 */

'use strict';
import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class TitleBar extends Component {

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
        console.log("1");
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
        let styles = [TitleBarStyles.container, this.props.style];
        let titleLabel = "标题";
        return (
            <View
                style={styles}
            >
                <Text> {titleLabel} </Text>
            </View>
        );
    }
}

const TitleBarStyles = StyleSheet.create({
    container: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
    }
});