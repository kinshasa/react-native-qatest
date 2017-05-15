/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.5.15 下午 5:01
 * @Desc: 公共组件 - RNTabViewContainer
 * @Name: RNTabViewContainer.js
 * @LifeCycle：https://github.com/kinshasa/react-native-qatest
 */

import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
const FirstRoute = () => <View style={[ RNTabViewContainerStyles.container, { backgroundColor: '#ff4081' } ]} />;
const SecondRoute = () => <View style={[ RNTabViewContainerStyles.container, { backgroundColor: '#673ab7' } ]} />;

export default class RNTabViewContainer extends Component {

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
        console.log("RNTabViewContainer constructor()");
        super(props, context);
        this.state = {
            index: 0,
            routes: [
                { key: '1', title: 'First' },
                { key: '2', title: 'Second' },
            ],
        };
    }

    /**
     * 当前组件渲染次数
     * @type {number}
     */
    count = 0;

    componentWillMount() {
        console.log("RNTabViewContainer componentWillMount()", new Date());
    }

    componentDidMount() {
        console.log("RNTabViewContainer componentDidMount()", new Date());
    }

    componentWillReceiveProps(newProps) {
        console.log("RNTabViewContainer componentWillReceiveProps()", newProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        let isUpdate = (this.props != nextProps) || (this.state != nextState);
        console.log("RNTabViewContainer shouldComponentUpdate()", isUpdate);
        return isUpdate;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("RNTabViewContainer componentWillUpdate()", new Date());
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("RNTabViewContainer componentDidUpdate()", new Date());
    }

    componentWillUnmount() {
        console.log("RNTabViewContainer componentWillUnmount()");
    }

    _handleChangeTab = index => this.setState({ index });

    _renderHeader = props => <TabBar {...props} />;

    _renderScene = SceneMap({
        '1': FirstRoute,
        '2': SecondRoute,
    });

    render() {
        this.count++;
        console.log("RNTabViewContainer render() count:", this.count);
        return (
            <View style={RNTabViewContainerStyles.container}>
                <TabViewAnimated
                    style={RNTabViewContainerStyles.container}
                    navigationState={this.state}
                    renderScene={this._renderScene}
                    renderHeader={this._renderHeader}
                    onRequestChangeTab={this._handleChangeTab}
                />
            </View>
        );
    }

}

const RNTabViewContainerStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
});