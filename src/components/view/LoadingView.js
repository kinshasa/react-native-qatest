/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.4.6 下午 5:40
 * @Desc: 公共组件 - LoadingView
 * @Name: LoadingView.js
 * @LifeCycle：https://github.com/kinshasa/react-native-qatest
 */

import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    Button
} from 'react-native';
import * as Indicator from 'react-native-indicator';
const {width, height} = Dimensions.get('window');

export default class LoadingView extends Component {

    static propTypes = {
        visible: PropTypes.bool,
        callback: PropTypes.func,
    };

    static defaultProps = {
        visible: true,
        callback:null
    };

    constructor(props, context) {
        console.log("LoadingView constructor()");
        super(props, context);
        this.state = {visible: this.props.visible, timeout: false};
    }

    /**
     * 当前组件渲染次数
     * @type {number}
     */
    count = 0;

    setVisible = (visible) => {
        /*if(!this.state.timeout){
            this.timer = setTimeout(() => {
                this.state.visible && this.setState({timeout: true})
            }, 15000)
        }*/
        if (this.state.visible != visible) {
            this.setState({visible,timeout:false});
        }
    };

    componentWillMount() {
        console.log("LoadingView componentWillMount()", new Date());
    }

    componentDidMount() {
        console.log("LoadingView componentDidMount()", new Date());

        //超时设置
        this.timer = setTimeout(() => {
            this.state.visible && this.setState({timeout: true})
        }, 15000)
    }

    componentWillReceiveProps(newProps) {
        console.log("AnimationDemoContainer", "componentWillReceiveProps():" + newProps);
        this.state.visible = newProps.visible;
    }

    componentWillUnmount() {
        this.unMount = true;
        console.log("FlatListContainer componentWillUnmount() unMount:", this.unMount);
        clearTimeout(this.timer);
    }

    onPress = ()=>{
        this.setVisible(false);
        this.props.callback && this.props.callback();
    };

    render() {
        this.count++;
        console.log("LoadingView render() count:", this.count);
        console.log("LoadingView render() visible:", this.props.visible);
        console.log("LoadingView render() visible:", this.state.visible);

        if (this.state.timeout) {
            return (
                <View style={LoadingViewStyles.container}>
                    <Button
                        style={{}}
                        onPress={this.onPress}
                        title="已超时"
                    />
                </View>
            );
        }
        if (this.state.visible || this.props.visible) {
            return (
                <View style={LoadingViewStyles.container}>
                    <Indicator.NineCubesLoader className="NineCubesLoader"/>
                </View>
            );
        }

        return <View/>
    }

}

const LoadingViewStyles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        width: width,
        height: height,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center'
    },
});