/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.3.31 下午 6:36
 * @Desc: 公共组件 - RCTComponentContainer
 * @Name: RCTComponentContainer.js
 * @LifeCycle：https://github.com/kinshasa/react-native-qatest
 */

import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';
import MyImageView from '../../../components/rct/MyImageView';

export default class RCTComponentContainer extends Component {


    render() {
        let uri = {uri:'http://img.ds.cn/none.png'};
        return (
            <View style={RCTComponentContainerStyles.container}>
                <MyImageView
                    style={{width:100,height:100,backgroundColor:'red'}}
                    borderRadius={5}
                    //src={{uri:"https://img11.360buyimg.com/cms/jfs/t4825/99/109607936/269767/e955116e/58db13f4N1eb29714.jpg"}}
                />
            </View>
        );
    }

}

const RCTComponentContainerStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

