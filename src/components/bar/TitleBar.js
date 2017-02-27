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

    componentDidUnMount() {

    }

    render() {
        this.renderCount++;
        console.log("TitleBar", "render() renderCount:" + this.renderCount);
        console.log("TitleBar",this._reactInternalInstance._currentElement.type.displayName);
        var {style, ...other} = this.props;
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
        let titleLeft = [TitleBarStyles.titleLeft, this.props.titleLeft];
        return (
            <Text style={titleLeft} onPress={()=>{try{Actions.pop()}catch(e){alert(e.message)}}}> {"返回"} </Text>
        );
    }

    renderCenterView() {
        let titleCenter = [TitleBarStyles.titleCenter, this.props.titleCenter];
        let titleLabelCenter = [TitleBarStyles.titleLabelCenter, this.props.titleLabelCenter];
        let titleLabel = this.props.title || "标题";

        if (this.props.centerView) {
            return this.props.centerView;
        }
        return (
            <View style={titleCenter}>
                <Text style={titleLabelCenter}> {titleLabel} </Text>
            </View>
        );
    }

    renderRightView() {
        let titleRight = [TitleBarStyles.titleRight, this.props.titleRight];
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
    titleLeft: {marginLeft: 10},
    titleRight: {marginRight: 10},
    titleCenter: {flex: 1, alignSelf: "center", alignItems: "center"},
    titleLabelCenter: {backgroundColor: "#AAAAAA",},
});