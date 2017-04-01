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
    requireNativeComponent
} from 'react-native';

export default class RCTComponentContainer extends Component {

    static propTypes = {
        src: PropTypes.array,
        ...View.propTypes // 包含默认的View的属性
    };

    render() {
        let uri = {uri:'http://img.ds.cn/none.png'};
        return (
            <View style={RCTComponentContainerStyles.container}>
                <RCTImageView2
                    style={{width:100,height:100,backgroundColor:'red'}}
                    borderRadius={5}
                    src={{uri:"https://img11.360buyimg.com/cms/jfs/t4825/99/109607936/269767/e955116e/58db13f4N1eb29714.jpg"}}
                />
            </View>
        );
    }

}

const RCTComponentContainerStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#eee"
    },
});

/*var iface = {
    name: 'ImageView2',
    propTypes: {
        src: PropTypes.array,
        resizeMode: PropTypes.oneOf(['cover', 'contain', 'stretch']),
        ...View.propTypes // 包含默认的View的属性
    },
};*/

module.exports = requireNativeComponent('RCTImageView2', RCTComponentContainer);