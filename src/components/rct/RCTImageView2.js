import { PropTypes } from 'react';
import { requireNativeComponent, View } from 'react-native';

var iface = {
    name: 'ImageView2',
    propTypes: {
        src: PropTypes.array,
        resizeMode: PropTypes.oneOf(['cover', 'contain', 'stretch']),
        ...View.propTypes // 包含默认的View的属性
    },
};

module.exports = requireNativeComponent('RCTImageView2', iface);