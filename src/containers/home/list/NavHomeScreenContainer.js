/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.4.6 上午 11:57
 * @Desc: 公共组件 - NavHomeScreenContainer
 * @Name: NavHomeScreenContainer.js
 * @LifeCycle：https://github.com/kinshasa/react-native-qatest
 */

import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import NavHomePage1Container from './NavHomePage1Container';
import FlatListContainer from './FlatListContainer';

class NavHomeScreenContainer extends Component {

    static navigationOptions = {
        title: 'Welcome',
    };

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
        console.log("NavHomeScreenContainer constructor()");
        super(props, context);
        this.state = {};
    }

    /**
     * 当前组件渲染次数
     * @type {number}
     */
    count = 0;

    componentWillMount() {
        console.log("NavHomeScreenContainer componentWillMount()", new Date());
    }

    componentDidMount() {
        console.log("NavHomeScreenContainer componentDidMount()", new Date());
    }


    /**
     * 组件即将卸载前调用
     * 在这个函数中，可以做一些组件相关的清理工作，例如取消计时器、网络请求等。
     */
    componentWillUnmount() {
        console.log("NavHomeScreenContainer componentWillUnmount()");

    }

    render() {
        this.count++;
        console.log("NavHomeScreenContainer render() count:", this.count);

        const { navigate } = this.props.navigation;
        return (
            <View style={NavHomeScreenContainerStyles.container}>
                <Text>Hello, Navigation!</Text>
                <View
                    style={NavHomeScreenContainerStyles.btn}
                >
                    <Button
                        onPress={() => navigate('HomePage1')}
                        title="NavHomePage1Container"
                    />
                </View>
                <View
                    style={NavHomeScreenContainerStyles.btn}
                >
                    <Button
                        style={NavHomeScreenContainerStyles.btn}
                        onPress={() => navigate('FlatList')}
                        title="FlatListContainer"
                    />
                </View>

            </View>
        );
    }

}

export default SimpleApp = StackNavigator({
    Home: { screen: NavHomeScreenContainer },
    HomePage1: { screen: NavHomePage1Container },
    FlatList: { screen: FlatListContainer },

});

const NavHomeScreenContainerStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    btn:{marginTop:10}
});