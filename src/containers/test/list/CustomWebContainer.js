/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.6.7 上午 10:38
 * @Desc: 公共组件 - CustomWebContainer
 * @Name: CustomWebContainer.js
 * @LifeCycle：https://github.com/kinshasa/react-native-qatest
 */

import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

export default class CustomWebContainer extends Component {

    static propTypes = {
        style: View.propTypes.style,
        account: PropTypes.number,
        name: PropTypes.string,
        isTrue: PropTypes.bool,
        callback: PropTypes.func,
    };

    static defaultProps = {
        data: {}
    };

    constructor(props, context) {
        console.log("CustomWebContainer constructor()");
        super(props, context);
        this.state = {};
    }

    /**
     * 当前组件渲染次数
     * @type {number}
     */
    count = 0;

    componentWillMount() {
        console.log("CustomWebContainer componentWillMount()", new Date());
    }

    componentDidMount() {
        console.log("CustomWebContainer componentDidMount()", new Date());
    }

    componentWillReceiveProps(newProps) {
        console.log("CustomWebContainer componentWillReceiveProps()", newProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        let isUpdate = (this.props != nextProps) || (this.state != nextState);
        console.log("CustomWebContainer shouldComponentUpdate()", isUpdate);
        return isUpdate;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("CustomWebContainer componentWillUpdate()", new Date());
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("CustomWebContainer componentDidUpdate()", new Date());
    }

    componentWillUnmount() {
        console.log("CustomWebContainer componentWillUnmount()");
    }

    render() {
        this.count++;
        console.log("CustomWebContainer render() count:", this.count);
        return (
            <View style={CustomWebContainerStyles.container}>

            </View>
        );
    }

}

const CustomWebContainerStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
});