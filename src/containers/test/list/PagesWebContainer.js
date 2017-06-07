/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.6.7 上午 10:37
 * @Desc: 公共组件 - PagesWebContainer
 * @Name: PagesWebContainer.js
 * @LifeCycle：https://github.com/kinshasa/react-native-qatest
 */

import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

export default class PagesWebContainer extends Component {

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
        console.log("PagesWebContainer constructor()");
        super(props, context);
        this.state = {};
    }

    /**
     * 当前组件渲染次数
     * @type {number}
     */
    count = 0;

    componentWillMount() {
        console.log("PagesWebContainer componentWillMount()", new Date());
    }

    componentDidMount() {
        console.log("PagesWebContainer componentDidMount()", new Date());
    }

    componentWillReceiveProps(newProps) {
        console.log("PagesWebContainer componentWillReceiveProps()", newProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        let isUpdate = (this.props != nextProps) || (this.state != nextState);
        console.log("PagesWebContainer shouldComponentUpdate()", isUpdate);
        return isUpdate;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("PagesWebContainer componentWillUpdate()", new Date());
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("PagesWebContainer componentDidUpdate()", new Date());
    }

    componentWillUnmount() {
        console.log("PagesWebContainer componentWillUnmount()");
    }

    render() {
        this.count++;
        console.log("PagesWebContainer render() count:", this.count);
        return (
            <View style={PagesWebContainerStyles.container}>

            </View>
        );
    }

}

const PagesWebContainerStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
});