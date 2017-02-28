/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.2.10 下午 12:04
 * @Desc: 购物车动画
 * @Name: CartAnimation.js
 * @LifeCycle：http://www.tuicool.com/articles/nu6zInB
 */

import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    Alert,
    View,
    Text,
    Image,
    Dimensions,
    Platform,
    Slider
} from 'react-native';

import Parabola from '../../../components/animation/parabola'
import Button from 'react-native-smart-button'
import image_cart from '../../../assets/home.png'

import img_logo from '../../../assets/img_logo.png'
let {width: deviceWidth, height: deviceHeight} = Dimensions.get('window');
let contentTop = Platform.OS == 'ios' ? 64 : 56;

export default class CartAnimation extends Component {

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
        console.log("CartAnimation", "constructor()");
        super(props, context);
        this.state = {
            isTrigger: false,
            start: {
                x: 0,
                y: 0,
            },
            end: {
                x: 0,
                y: 0,
            },
        }
        this._startPositions = {}
        this._endPositions = {}
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
        console.log("CartAnimation", "componentWillMount()");
    }

    /**
     * 组件加载后
     * 生命周期中仅被调用1次，可以使用SetState
     * 用于网络请求和页面渲染
     */
    componentDidMount() {
        console.log("CartAnimation", "componentDidMount()");
    }

    /**
     * 父组件属性值变更监听
     * 可以使用SetState
     * @param newProps
     */
    componentWillReceiveProps(newProps) {
        console.log("CartAnimation", "componentWillReceiveProps():" + newProps);
    }

    /**
     * 属性值/状态值变更后，是否需要刷新页面
     * @param nextProps 是即将被设置的属性，旧的属性还是可以通过 this.props 来获取。
     * @param nextState 表示组件即将更新的状态值。
     * @returns {boolean} 默认true, 返回值决定是否需要更新组件，如果 true 表示需要更新，继续走后面的更新流程。
     */
    shouldComponentUpdate(nextProps, nextState) {
        let isUpdate = (this.props != nextProps) || (this.state != nextState);
        console.log("CartAnimation", "shouldComponentUpdate():" + isUpdate);
        return isUpdate;
    }

    /**
     * 如果组件状态或者属性改变，并且shouldComponentUpdate返回为 true
     * @param nextProps 更新之后的属性
     * @param nextState 更新之后的状态
     */
    componentWillUpdate(nextProps, nextState) {
        console.log("CartAnimation", "componentWillUpdate()");
    }

    /**
     * 更新完成界面之后通知
     * @param prevProps 更新之前的属性
     * @param prevState 更新之前的状态
     * @returns {boolean}
     */
    componentDidUpdate(prevProps, prevState) {
        console.log("CartAnimation", "componentDidUpdate()");
    }

    /**
     * 组件即将卸载前调用
     * 在这个函数中，可以做一些组件相关的清理工作，例如取消计时器、网络请求等。
     */
    componentDidUnMount() {
        console.log("CartAnimation", "componentDidUnMount()");

    }

    /**
     * 组件更新
     * @returns {XML}
     */
    render() {
        this.renderCount++;
        console.log("CartAnimation", "render() renderCount:" + this.renderCount);
        return (

            <View style={CartAnimationStyles.container}>
                <View style={{marginTop: contentTop, flex: 1, }}>
                    <Button

                        onLayout={ this._onLayout3.bind(this, 'key-1') }
                        onPress={this._onPressHandler_3.bind(this, 'key-1')}
                        touchableType={Button.constants.touchableTypes.highlight}
                        style={{position: 'absolute', left: 10, top: 30, justifyContent: 'center',  justifyContent: 'center', backgroundColor: 'blue', borderRadius: 10,}}
                        textStyle={{position: 'relative', bottom: 1, fontSize: 17,  color: 'white'}}
                    >
                        <Image
                            ref={(ref)=>{this.btn3 = ref}}
                            resizeMode={"center"}
                            style={{width: 80, height: 50, justifyContent: 'center', borderRadius: 10,}}
                            source={img_logo}/>
                    </Button>
                    <Button
                        onLayout={ this._onLayout1.bind(this, 'key-2') }
                        onPress={()=>{this._onPressHandler_1('key-2')}}
                        touchableType={Button.constants.touchableTypes.highlight}
                        style={{position: 'absolute', left: 10, top: 210, justifyContent: 'center', width: 50, height: 50, backgroundColor: 'red', borderRadius: 10,  justifyContent: 'center',}}
                        textStyle={{position: 'relative', bottom: 1, fontSize: 17,  color: 'white'}}

                    >
                        +
                    </Button>
                    <Button
                        onLayout={ this._onLayout1.bind(this, 'key-3') }
                        onPress={this._onPressHandler_1.bind(this, 'key-3')}
                        touchableType={Button.constants.touchableTypes.highlight}
                        style={{position: 'absolute', left: 10, top: 410, justifyContent: 'center', width: 20, height: 20, backgroundColor: 'red', borderRadius: 10,  justifyContent: 'center',}}
                        textStyle={{position: 'relative', bottom: 1, fontSize: 17,  color: 'white'}}

                    >
                        +
                    </Button>


                    <Button
                        onLayout={ this._onLayout1.bind(this, 'key-4') }
                        onPress={this._onPressHandler_1.bind(this, 'key-4')}
                        touchableType={Button.constants.touchableTypes.fade}
                        style={{position: 'absolute', left: 10, top: deviceHeight - 160, justifyContent: 'center', width: 20, height: 20, backgroundColor: 'red', borderRadius: 10,  justifyContent: 'center',}}
                        textStyle={{position: 'relative', bottom: 1, fontSize: 17,  color: 'white'}}

                    >
                        +
                    </Button>


                    <Button
                        onLayout={ this._onLayout2.bind(this, 'key-5') }
                        onPress={this._onPressHandler_2.bind(this, 'key-5')}
                        touchableType={Button.constants.touchableTypes.fade}
                        style={{position: 'absolute', right: 10, top: 10, justifyContent: 'center', width: 20, height: 20, backgroundColor: '#00AAEF', borderRadius: 10,  justifyContent: 'center',}}
                        textStyle={{position: 'relative', bottom: 1, fontSize: 17,  color: 'white'}}

                    >
                        +
                    </Button>
                    <Button
                        onLayout={ this._onLayout2.bind(this, 'key-6') }
                        onPress={this._onPressHandler_2.bind(this, 'key-6')}
                        touchableType={Button.constants.touchableTypes.fade}
                        style={{position: 'absolute', right: 10, top: 210, justifyContent: 'center', width: 20, height: 20, backgroundColor: '#00AAEF', borderRadius: 10,  justifyContent: 'center',}}
                        textStyle={{position: 'relative', bottom: 1, fontSize: 17,  color: 'white'}}

                    >
                        +
                    </Button>
                    <Button
                        onLayout={ this._onLayout2.bind(this, 'key-7') }
                        onPress={this._onPressHandler_2.bind(this, 'key-7')}
                        touchableType={Button.constants.touchableTypes.fade}
                        style={{position: 'absolute', right: 10, top: 410, justifyContent: 'center', width: 20, height: 20, backgroundColor: '#00AAEF', borderRadius: 10,  justifyContent: 'center',}}
                        textStyle={{position: 'relative', bottom: 1, fontSize: 17,  color: 'white'}}

                    >
                        +
                    </Button>
                    <Button
                        onLayout={ this._onLayout2.bind(this, 'key-8') }
                        onPress={this._onPressHandler_2.bind(this, 'key-8')}
                        touchableType={Button.constants.touchableTypes.fade}
                        style={{position: 'absolute', right: 10, top: deviceHeight - 150, justifyContent: 'center', width: 20, height: 20, backgroundColor: '#00AAEF', borderRadius: 10,  justifyContent: 'center',}}
                        textStyle={{position: 'relative', bottom: 1, fontSize: 17,  color: 'white'}}

                    >
                        +
                    </Button>

                </View>

                <View onLayout={this._onLayoutCart1}
                      style={{opacity: 1, backgroundColor: 'red', borderRadius: 15, position: 'absolute', width: 30, height: 30,  right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center', }}>
                    <Image source={image_cart}
                           style={{width: 15, height: 15,}}/>
                </View>
                <View onLayout={this._onLayoutCart2}
                      style={{opacity: 1, backgroundColor: '#00AAEF',  borderRadius: 15, position: 'absolute', width: 30, height: 30,  left: 0, bottom: 0, justifyContent: 'center', alignItems: 'center', }}>
                    <Image source={image_cart}
                           style={{width: 15, height: 15,}}/>
                </View>

                <Parabola
                    isTrigger={this.state.isTrigger}
                    rate={0.9}
                    start={this.state.start}
                    end={this.state.end}
                    renderParabola={this._renderParabola}
                />
            </View>
            //Parabola need to be contained by root container
        );
    }

    handleDurationChange = (duration) => {
        this.setState({duration: Math.round(duration)});
    };

    _onLayout1 = (key, e) => {
        let {x, y} = e.nativeEvent.layout
        console.log(`x: ${x}, y: ${y}, dw: ${deviceWidth}, dh: ${deviceHeight}, contentTop: ${contentTop}`)
        this._startPositions[key] = {
            start: {
                x,
                y: y + contentTop,
            },
            //end: {
            //    x: deviceWidth - 5,
            //    y: deviceHeight - 20 - 5
            //},
        }
    }

    _onLayout2 = (key, e) => {
        let {x, y} = e.nativeEvent.layout
        console.log(`x: ${x}, y: ${y}, dw: ${deviceWidth}, dh: ${deviceHeight}, contentTop: ${contentTop}`)
        this._startPositions[key] = {
            start: {
                x,
                y: y + contentTop,
            },
            //end: {
            //    x: 5,
            //    y: deviceHeight - 20 - 5
            //},
        }
    }

    _onLayout3 = (key, e) => {
        let {x, y} = e.nativeEvent.layout
        console.log(`x: ${x}, y: ${y}, dw: ${deviceWidth}, dh: ${deviceHeight}, contentTop: ${contentTop}`)
        this._startPositions[key] = {
            start: {
                x,
                y: y + contentTop,
            },
            //end: {
            //    x: deviceWidth - 5,
            //    y: deviceHeight - 20 - 5
            //},
        }
    }

    _onLayoutCart1 = (e) => {
        let {x, y} = e.nativeEvent.layout
        this._endPositions['cart-1'] = {
            x: x + 5,
            y: y + 5,
        }
    }

    _onLayoutCart2 = (e) => {
        let {x, y} = e.nativeEvent.layout
        this._endPositions['cart-2'] = {
            x: x + 5,
            y: y + 5,
        }
    }

    _onPressHandler_1(key, e) {
        let startPositions = this._startPositions[key]

        startPositions.end = this._endPositions['cart-1']

        let {start, end} = startPositions

        this.setState({
            isTrigger: true,
            start,
            end,
        })
    }

    _onPressHandler_2(key, e) {
        let startPositions = this._startPositions[key]

        startPositions.end = this._endPositions['cart-2']

        let {start, end} = startPositions

        this.setState({
            isTrigger: true,
            start,
            end,
        })
    }

    _onPressHandler_3(key, e) {

        this.btn3.measure((x, y, width, height, pageX, pageY) => {
            console.log("CartAnimation", `${x}, ${y}, ${width}, ${height}, ${pageX}, ${pageY}`)
            let startPositions = this._startPositions[key]

            startPositions.end = this._endPositions['cart-1']
            let {start, end} = startPositions
            start = {
                x: pageX,
                y: pageY,
            }
            this.setState({
                isTrigger: true,
                start,
                end,
            })

        });


    }

    _renderParabola = ({index, translateX, translateY}) => {
        if (true) {
            return (
                <Image
                    key={`'img-parabola-ball-'${index}`}
                    resizeMode={"center"}
                    style={[
                        {position: 'absolute',},    //Don't forget to set this
                        {width: 80, height: 50, justifyContent: 'center', borderRadius: 10,},
                        {transform: [{translateX}, {translateY}]},
                    ]}
                    source={img_logo}/>
            );
        }
        return (
            <View
                key={`'parabola-ball-'${index}`}
                style={[
                {position: 'absolute',},    //Don't forget to set this
                {width: 20, height: 20, borderRadius: 10, backgroundColor: 'red',},
                {transform: [{translateX}, {translateY}]},
           ]}
            >
            </View>
        )
    }

}

const CartAnimationStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#999"
    },
    view: {
        height: 30,
        margin: 10,
        backgroundColor: "red"
    },
});