/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.2.21 下午 2:09
 * @Desc: 公共组件 - SwiperList
 * @Name: SwiperList.js
 * @LifeCycle：http://www.tuicool.com/articles/nu6zInB
 */

import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions
} from 'react-native';

import Swiper from 'react-native-swiper';

const img=[
    'https://img1.360buyimg.com/da/jfs/t4084/59/2247792254/86559/ee5be533/58a56e3cNbaa1847d.jpg',
    'https://img13.360buyimg.com/da/jfs/t3223/241/6483791921/296507/a1d0c64d/58a6929aNc5ecfb45.jpg',
    'https://img10.360buyimg.com/da/jfs/t3931/208/2276755577/133306/f5d624e3/58a66bffNb50c7944.jpg',
    'https://img10.360buyimg.com/da/jfs/t3988/348/2287615533/169453/28f664/58a66baeNa6b9e317.jpg'
];
const { width } = Dimensions.get('window')

export default class SwiperList extends Component {

    /**
     * 父组件传入的属性值
     * @type {{style: *, account: *, name: *, isTrue: *, callback: *}}
     */
    static propTypes = {
        style: View.propTypes.style,
        account: PropTypes.number,
        name: PropTypes.string,
        isTrue: PropTypes.bool,
        callback: PropTypes.func,
    };

    /**
     * 父组件传入的数据
     * @type {{data: {}}}
     */
    static defaultProps = {
        data: {}
    };

    /**
     * 构造函数
     * @param props
     * @param context
     */
    constructor(props, context) {
        console.log("SwiperList", "constructor()");
        super(props, context);
        this.state = {};
    }

    /**
     * 当前组件渲染次数
     * @type {number}
     */
    renderCount = 0;

    /**
     * 组件加载前
     * 生命周期中仅被调用1次，可以使用SetState
     */
    componentWillMount() {
        console.log("SwiperList", "componentWillMount()");
    }

    /**
     * 组件加载后
     * 生命周期中仅被调用1次，可以使用SetState
     * 用于网络请求和页面渲染
     */
    componentDidMount() {
        console.log("SwiperList", "componentDidMount()");
    }

    /**
     * 父组件属性值变更监听
     * 可以使用SetState
     * @param newProps
     */
    componentWillReceiveProps(newProps) {
        console.log("SwiperList", "componentWillReceiveProps():" + newProps);
    }

    /**
     * 属性值/状态值变更后，是否需要刷新页面
     * @param nextProps 是即将被设置的属性，旧的属性还是可以通过 this.props 来获取。
     * @param nextState 表示组件即将更新的状态值。
     * @returns {boolean} 默认true, 返回值决定是否需要更新组件，如果 true 表示需要更新，继续走后面的更新流程。
     */
    shouldComponentUpdate(nextProps, nextState) {
        let isUpdate = (this.props != nextProps) || (this.state != nextState);
        console.log("SwiperList", "shouldComponentUpdate():" + isUpdate);
        return isUpdate;
    }

    /**
     * 如果组件状态或者属性改变，并且shouldComponentUpdate返回为 true
     * @param nextProps 更新之后的属性
     * @param nextState 更新之后的状态
     */
    componentWillUpdate(nextProps, nextState) {
        console.log("SwiperList", "componentWillUpdate()");
    }

    /**
     * 更新完成界面之后通知
     * @param prevProps 更新之前的属性
     * @param prevState 更新之前的状态
     * @returns {boolean}
     */
    componentDidUpdate(prevProps, prevState) {
        console.log("SwiperList", "componentDidUpdate()");
    }

    /**
     * 组件即将卸载前调用
     * 在这个函数中，可以做一些组件相关的清理工作，例如取消计时器、网络请求等。
     */
    componentDidUnMount() {
        console.log("SwiperList", "componentDidUnMount()");

    }

    /**
     * 组件更新
     * @returns {XML}
     */
    render() {
        this.renderCount++;
        console.log("SwiperList", "render() renderCount:" + this.renderCount);
        return (
            <View style={SwiperListStyles.container}>
                <Swiper style={styles.wrapper} height={200} horizontal={false} autoplay>
                    <View style={styles.slide1}>
                        <Text style={styles.text}>Hello Swiper</Text>
                    </View>
                    <View style={styles.slide2}>
                        <Text style={styles.text}>Beautiful</Text>
                    </View>
                    <View style={styles.slide3}>
                        <Text style={styles.text}>And simple</Text>
                    </View>
                </Swiper>

                <Swiper
                    style={styles.wrapper} height={240}
                        onMomentumScrollEnd={(e, state, context) => console.log('index:', state.index)}
                        dot={<View style={{backgroundColor: 'rgba(0,0,0,.2)', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
                        activeDot={<View style={{backgroundColor: '#000', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
                        paginationStyle={{
                        bottom: -23, left: null, right: 10
                    }}
                loop>
                    <View style={styles.slide} title={<Text numberOfLines={1}>Aussie tourist dies at Bali hotel</Text>}>
                        <Image resizeMode='stretch' style={styles.image} source={{uri:img[0]}} />
                    </View>
                    <View style={styles.slide} title={<Text numberOfLines={1}>Big lie behind Nine’s new show</Text>}>
                        <Image resizeMode='stretch' style={styles.image} source={{uri:img[1]}} />
                    </View>
                    <View style={styles.slide} title={<Text numberOfLines={1}>Why Stone split from Garfield</Text>}>
                        <Image resizeMode='stretch' style={styles.image} source={{uri:img[2]}} />
                    </View>
                    <View style={styles.slide} title={<Text numberOfLines={1}>Learn from Kim K to land that job</Text>}>
                        <Image resizeMode='stretch' style={styles.image} source={{uri:img[3]}} />
                    </View>
                </Swiper>
            </View>
        );
    }

}

const SwiperListStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapper: {
    },

    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },

    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },

    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },

    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },

    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },

    image: {
        width,
        flex: 1
    }
});