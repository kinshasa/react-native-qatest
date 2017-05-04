/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.3.31 下午 6:36
 * @Desc: 公共组件 - RCTViewsContainer
 * @Name: RCTViewsContainer.js
 * @LifeCycle：https://github.com/kinshasa/react-native-qatest
 */

import React, {Component} from "react";
import {Image, StyleSheet, Text, View} from "react-native";
import RNImage from "../../../components/rct/RNImage";

export default class RCTViewsContainer extends Component {


    render() {
        let uri = {uri:'http://img.ds.cn/none.png'};
        return (
            <View style={RCTViewsContainerStyles.container}>
                <Text onPress={()=>{this.ddd()}}>
                    测试全局崩溃收集
                </Text>
                <RNImage
                    source={[uri]}
                    style={{margin:20,padding:10,width:100,height:100,backgroundColor:'red'}}
                    borderRadius={5}
                />
                <Image
                    style={{margin:20,width:100,height:100,backgroundColor:'green'}}
                    borderRadius={5}
                    source={uri}
                />
            </View>
        );
    }

}

const RCTViewsContainerStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

