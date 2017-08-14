/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.8.2 下午 3:42
 * @Desc: 公共组件 - BannerReact
 * @Name: BannerReact.js
 * @LifeCycle：https://github.com/kinshasa/react-native-qatest
 */

import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Dimensions,
    TouchableWithoutFeedback,
    ActivityIndicator
} from 'react-native';
import Swiper from 'react-native-swiper'
const {height, width} = Dimensions.get('window');

export default class BannerReact extends Component {

    static propTypes = {
        style: View.propTypes.style,
        account: PropTypes.number,
        name: PropTypes.string,
        isTrue: PropTypes.bool,
        callback: PropTypes.func,
    };

    static defaultProps = {
        data: ['http://img.ds.cn/none.png'],
        style:{},
        imgStyle:{},
        onPress:null,
    };

    constructor(props, context) {
        console.log("BannerReact constructor()");
        super(props, context);
        this.state = {};
    }

    /**
     * 当前组件渲染次数
     * @type {number}
     */
    count = 0;

    componentWillMount() {
        console.log("BannerReact componentWillMount()", new Date());
    }

    componentDidMount() {
        console.log("BannerReact componentDidMount()", new Date());
    }

    componentWillUnmount() {
        console.log("BannerReact componentWillUnmount()");
    }

    renderItem(){

        return this.props.data.map((uri,i)=>{
            return (
                <TouchableWithoutFeedback
                    key={i}
                    onPress={()=>this.props.onPress && this.props.onPress(i)}>
                    <Image
                        //resizeMode='contain'
                        style={[{width, height: px2dp(700)},this.props.imgStyle]}
                        source={{uri}}/>
                </TouchableWithoutFeedback>
            );
        })
    }

    render() {
        this.count++;
        console.log("BannerReact render() count:", this.count);
        return (
            <Swiper
                height={px2dp(700)}
                loop autoplay
                {...this.props}
            >
                {this.renderItem()}
            </Swiper>

        );
    }

}

const BannerReactStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
});