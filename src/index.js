/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.1.23 下午 4:02
 * @Todo: App首页.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import TitleBar from "./components/bar/TitleBar"
export default class QATest extends Component {


    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentDidUnMount() {

    }

    render() {
        return (
            <View style={IndexStyles.container}>
                {
                    <TitleBar style={{}} />
                }

            </View>
        );
    }
}

const IndexStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

AppRegistry.registerComponent('QATest', () => QATest);
