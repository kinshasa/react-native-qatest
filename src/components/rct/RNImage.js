import React, {Component, PropTypes} from "react";
import {requireNativeComponent, StyleSheet, View} from "react-native";

export default class RNImage extends Component {

    //必须要申明的
    static propTypes = {
        source: PropTypes.array,
        ...View.propTypes // 包含默认的View的属性
    };

    render() {
        let uri = {uri: 'http://img.ds.cn/none.png'};
        return (
            <RCTImage />
        );
    }

}

const MyImageViewStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#eee"
    },
});

module.exports = requireNativeComponent('RCTImage', RNImage);