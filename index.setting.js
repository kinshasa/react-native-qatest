/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.7.14 上午 11:59
 * @Desc: 公共组件 - IndexSetting
 * @Name: IndexSetting.js
 * @LifeCycle：https://github.com/kinshasa/react-native-qatest
 */

import React, {Component, PropTypes,} from 'react';
import {
    StyleSheet,
    View,
    Text,
    AppRegistry
} from 'react-native';

class IndexSetting extends Component {


    render() {

        return (
            <View style={IndexSettingStyles.container}>
                <Text>IndexSetting</Text>
            </View>
        );
    }

}

const IndexSettingStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

AppRegistry.registerComponent('ReactSetting', () => IndexSetting);