/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.1.23 下午 4:46
 * @Desc: 公共组件 - 标题栏
 * @NAME: TitleBar
 */

'use strict';
import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import {Actions} from 'react-native-router-flux'

export default class TitleBar extends Component {

    static propTypes = {
        style: View.propTypes.style,
        number: PropTypes.number,
        string: PropTypes.string,
        bool: PropTypes.bool,
        func: PropTypes.func,
    };

    static defaultProps = {
        //标题栏的左边视图
        leftView: null,
        //标题栏的中部视图
        centerView: null,
        //标题栏的右边视图
        rightView: null,
        //标题栏的样式
        style: null,
        //标题栏的标题
        title: ""
    };

    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    /**
     * 当前组件渲染次数
     * @type {number}
     */
    renderCount = 0;

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(newProps) {

    }

    componentDidUpdate(prevProps, prevState) {
    }

    componentWillUnMount() {

    }

    render() {
        this.renderCount++;
        console.log("TitleBar", "render() renderCount:" + this.renderCount);
        console.log("TitleBar",this._reactInternalInstance._currentElement.type.displayName);
        let {style, ...other} = this.props;
        let styles = [TitleBarStyles.container, style];
        return (
            <View{...other} style={styles}>

                {this.renderLeftView()}
                {this.renderCenterView()}
                {this.renderRightView()}


            </View>
        );
    }

    renderLeftView() {
        if(this.props.leftView){
            return this.props.leftView;
        }
        let titleLeft = [TitleBarStyles.leftStyle, this.props.leftStyle];
        return (
            <Text style={titleLeft} onPress={()=>{try{Actions.pop()}catch(e){alert(e.message)}}}> {"返回"} </Text>
        );
    }

    renderCenterView() {
        if (this.props.centerView) {
            return this.props.centerView;
        }
        let titleStyle = [TitleBarStyles.centerStyle, this.props.centerStyle];
        let labelStyle = [TitleBarStyles.labelStyle, this.props.labelStyle];
        let label = this.props.label || "标题";

        return (
            <View style={titleStyle}>
                <Text style={labelStyle}> {label} </Text>
            </View>
        );
    }

    renderRightView() {
        if(this.props.rightView){
            return this.props.rightView;
        }
        let titleRight = [TitleBarStyles.rightStyle, this.props.rightStyle];
        return (
            <Text style={titleRight} onPress={()=>{alert("菜单")}}> {"菜单"} </Text>
        );
    }
}

const TitleBarStyles = StyleSheet.create({
    container: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EEEEEE',
        flexDirection: "row"
    },
    leftStyle: {marginLeft: 10},
    centerStyle: {flex: 1, alignSelf: "center", alignItems: "center"},
    rightStyle: {marginRight: 10},
    labelStyle: {backgroundColor: "transparent",},
});