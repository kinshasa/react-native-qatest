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
import Icon from 'react-native-vector-icons/FontAwesome';

import Icon2 from 'react-native-vector-icons/Ionicons';

export default class HomePage extends Component {

    static propTypes = {

    };

    static defaultProps = {
        
    };

    constructor(props, context) {
        console.log("HomePage", "constructor()");
        super(props, context);
        this.state = {};
    }

    /**
     * 当前组件渲染次数
     * @type {number}
     */
    renderCount = 0;

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
        let isUpdate = (this.state != nextState);
        console.log("HomePage", "shouldComponentUpdate():" + isUpdate);
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
        this.renderCount++;
        console.log("HomePage", "render() renderCount:" + this.renderCount);
        return (
            <View style={HomePageStyles.container}>
                <TitleBar title="首页" style={{height:45}}/>
                <Icon name="home" size={50} color="#900" />
                <Icon name="home" size={100} color="#999" />
                <Icon.Button name="facebook" backgroundColor="#3b5998" onPress={()=>{alert("test")}}>
                    Login with Facebook
                </Icon.Button>
                <Icon.Button name="facebook" backgroundColor="#3b5998" onPress={()=>{alert("test")}}>
                    <Text style={{fontFamily: 'Arial', fontSize: 15}}>Login with Facebook</Text>
                </Icon.Button>
                <Icon2 name="ios-home" size={30} color="#4F8EF7" />
                <Icon2 name="ios-home-outline" size={30} color="#4F8EF7" />
            </View>
        );
    }
}

const HomePageStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
});