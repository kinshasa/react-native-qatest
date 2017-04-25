/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.3.31 下午 6:36
 * @Desc: 公共组件 - RCTViewsContainer
 * @Name: RCTViewsContainer.js
 * @LifeCycle：https://github.com/kinshasa/react-native-qatest
 */

import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';
import RCTImage from '../../../components/rct/RCTImage';

export default class RCTViewsContainer extends Component {


    render() {
        let uri = {uri:'http://img.ds.cn/none.png'};
        return (
            <View style={RCTViewsContainerStyles.container}>
                <Text onPress={()=>{this.ddd()}}>
                    测试测试测试测试测试测试测试
                </Text>
                <RCTImage
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

