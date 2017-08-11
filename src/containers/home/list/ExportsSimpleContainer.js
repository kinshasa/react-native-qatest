/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.8.11 上午 11:45
 * @Desc: 测试module.exports与exports的区别，能否通过公用组件或者公用数据达到内存减少的目的
 * @Name: ExportsSimpleContainer.js
 * @LifeCycle：https://github.com/kinshasa/react-native-qatest
 */

import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

export default class ExportsSimpleContainer extends Component {

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
        console.log("ExportsSimpleContainer constructor()");
        super(props, context);
        this.state = {};
    }

    /**
     * 当前组件渲染次数
     * @type {number}
     */
    count = 0;

    componentWillMount() {
        console.log("ExportsSimpleContainer componentWillMount()", new Date());
    }

    componentDidMount() {
        console.log("ExportsSimpleContainer componentDidMount()", new Date());
    }

    componentWillReceiveProps(newProps) {
        console.log("ExportsSimpleContainer componentWillReceiveProps()", newProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        let isUpdate = (this.props != nextProps) || (this.state != nextState);
        console.log("ExportsSimpleContainer shouldComponentUpdate()", isUpdate);
        return isUpdate;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("ExportsSimpleContainer componentWillUpdate()", new Date());
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("ExportsSimpleContainer componentDidUpdate()", new Date());
    }

    componentWillUnmount() {
        console.log("ExportsSimpleContainer componentWillUnmount()");
    }

    render() {
        this.count++;
        console.log("ExportsSimpleContainer render() count:", this.count);
        return (
            <View style={ExportsSimpleContainerStyles.container}>

            </View>
        );
    }

}

const ExportsSimpleContainerStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
});