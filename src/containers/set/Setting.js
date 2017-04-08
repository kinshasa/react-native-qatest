/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.1.24 下午 6:10
 * @Desc: 公共组件 - Setting
 * @NAME: Setting
 * @LIFECYCLE：http://www.tuicool.com/articles/nu6zInB
 */

import React, {Component, PropTypes} from "react";
import {Dimensions, StyleSheet, Text, View} from "react-native";

import TitleBar from "../../components/bar/TitleBar";
import Icon from "react-native-vector-icons/FontAwesome";
const {height, width} = Dimensions.get('window');

export default class Setting extends Component {

    static propTypes = {
        style: View.propTypes.style,
        number: PropTypes.number,
        string: PropTypes.string,
        bool: PropTypes.bool,
        func: PropTypes.func,
    };

    static defaultProps = {};

    constructor(props, context) {
        console.log("Setting constructor()");
        super(props, context);
        this.state = {};
    }
    
    /**
     * 当前组件渲染次数
     * @type {number}
     */
    renderCount = 0;
    
    componentWillMount() {
        console.log("Setting componentWillMount()");
    }

    componentDidMount() {
        console.log("Setting componentDidMount()");
    }

    componentWillReceiveProps(newProps) {
        console.log("Setting componentWillReceiveProps()");
    }

    shouldComponentUpdate(nextProps, nextState) {
        let isUpdate = (this.state != nextState);
        console.log("Setting shouldComponentUpdate() :" , isUpdate);
        return isUpdate;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("Setting componentWillUpdate()");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Setting componentDidUpdate()");
    }

    componentDidUnMount() {
        console.log("Setting componentDidUnMount()");

    }

    render() {
        this.renderCount++;
        console.log("Setting render() renderCount:" , this.renderCount);
        return (
            <View {...this.props} style={[SettingStyles.container,this.props.style]}>
                <TitleBar
                    label="其他设置"
                    labelStyle={{backgroundColor:"transparent",color:"black"}}
                    leftView={<Icon.Button name="list-ul" size={25} color="#166AF6" backgroundColor="transparent"
                                           onPress={()=>{alert("click android logo")}}/>}
                    rightView={<Icon.Button name="undo" size={25} color="#999" backgroundColor="transparent"
                                            onPress={()=>{alert("click share icon")}}/>}
                    style={{height: 45}}/>
                <Text>开发ToolBar工具</Text>
            </View>
        );
    }
}

const SettingStyles = StyleSheet.create({
    container: {
        width,minHeight:height+height,
        backgroundColor:"#aaa"
    },
});