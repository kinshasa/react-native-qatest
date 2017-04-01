import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    requireNativeComponent
} from 'react-native';

export default class MyImageView extends Component {

    static propTypes = {
        src: PropTypes.array,
        ...View.propTypes // 包含默认的View的属性
    };

    render() {
        let uri = {uri: 'http://img.ds.cn/none.png'};
        return (
            <View style={RCTComponentContainerStyles.container}>
                <RCTImageView2
                    {...this.props}
                />
            </View>
        );
    }

}

const RCTComponentContainerStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#eee"
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

module.exports = requireNativeComponent('RCTImageView2', MyImageView);