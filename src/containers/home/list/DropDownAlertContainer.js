/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.3.28 下午 2:39
 * @Desc: 公共组件 - DropDownAlertContainer
 * @Name: DropDownAlertContainer.js
 * @LifeCycle：https://github.com/kinshasa/react-native-qatest
 */

import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    Text,
    TouchableHighlight,
    ScrollView,
    Image,
    View
} from 'react-native';

import DropdownAlert from 'react-native-dropdownalert'
const MAIN_INFO_COLOR = '#2B73B6';
const MAIN_WARN_COLOR = '#cd853f';
const MAIN_ERROR_COLOR = '#cc3232';
const MAIN_CUSTOM_COLOR = '#6441A4';
const MAIN_SUCCESS_COLOR = '#32A54A';

export default class DropDownAlertContainer extends Component {

    static propTypes = {
        style: View.propTypes.style,
        account: PropTypes.number,
        name: PropTypes.string,
        isTrue: PropTypes.bool,
        callback: PropTypes.func,
    };

    static defaultProps = {
        data: {}
    };

    constructor(props, context) {
        console.log("DropDownAlertContainer constructor()");
        super(props, context);
        this.state = {};
        this.showAlert = this.showAlert.bind(this)
    }

    /**
     * 当前组件渲染次数
     * @type {number}
     */
    count = 0;

    render() {
        return (
            <View style={DropDownAlertContainerStyles.container}>
                <ScrollView contentContainerStyle={DropDownAlertContainerStyles.contentContainer}>
                    <TouchableHighlight style={[DropDownAlertContainerStyles.button, {backgroundColor: MAIN_INFO_COLOR}]}
                                        onPress={() => this.showAlert('info')} underlayColor={'lightgray'}>
                        <Text style={DropDownAlertContainerStyles.text}>{'info'}</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={[DropDownAlertContainerStyles.button, {backgroundColor: MAIN_WARN_COLOR}]}
                                        onPress={() => this.showAlert('warn')} underlayColor={'lightgray'}>
                        <Text style={DropDownAlertContainerStyles.text}>{'warn'}</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={[DropDownAlertContainerStyles.button, {backgroundColor: MAIN_ERROR_COLOR}] }
                                        onPress={() => this.showAlert('error')} underlayColor={'lightgray'}>
                        <Text style={DropDownAlertContainerStyles.text}>{'error'}</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={[DropDownAlertContainerStyles.button, {backgroundColor: MAIN_SUCCESS_COLOR}] }
                                        onPress={() => this.showAlert('success')} underlayColor={'lightgray'}>
                        <Text style={DropDownAlertContainerStyles.text}>{'success'}</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={[DropDownAlertContainerStyles.button, {backgroundColor: MAIN_CUSTOM_COLOR}]}
                                        onPress={() => this.showAlert('custom')} underlayColor={'lightgray'}>
                        <Text style={DropDownAlertContainerStyles.text}>{'custom'}</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={DropDownAlertContainerStyles.button} onPress={() => this.closeAlert()}
                                        underlayColor={'lightgray'}>
                        <Text style={DropDownAlertContainerStyles.text}>{'dismiss alert'}</Text>
                    </TouchableHighlight>
                </ScrollView>
                <DropdownAlert
                    ref={(ref) => this.dropdown = ref}
                    titleNumOfLines={0}
                    messageNumOfLines={0}
                    closeInterval={4000}
                    containerStyle={{
                        backgroundColor: MAIN_CUSTOM_COLOR,
                    }}
                    onClose={(data) => this.onClose(data)}
                    onCancel={(data) => this.onClose(data)}
                    showCancel={false}
                    imageSrc={'https://facebook.github.io/react/img/logo_og.png'}
                />
            </View>
        );
    }

    showAlert(type) {
        var randomNum = Math.floor((Math.random() * 1000) + 1)
        switch (type) {
            case 'info':
                this.dropdown.alertWithType(type, 'Info #' + randomNum, 'System is going down at 12 AM tonight for routine maintenance. We\'ll notify you when the system is back online.')
                break;
            case 'warn':
                this.dropdown.alertWithType(type, 'Warning #' + randomNum, 'Your cloud drive is about to reach capacity. Please consider upgrading to premium plan.')
                break;
            case 'error':
                this.dropdown.alertWithType(type, 'Error #' + randomNum, 'Sorry, we\'re having some technical difficulties. Our team will get this fixed for you ASAP.')
                break;
            case 'success':
                this.dropdown.alertWithType(type, 'Success #' + randomNum, 'Thank you for your order. We will email and charge you when it\'s on it\'s way.')
                break;
            case 'custom':
                this.dropdown.alert('Lorem ipsum dolor sit amet, consectetur adipisicing elit #' + randomNum, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')
                break;
        }
    }

    closeAlert() {
        this.dropdown.onClose()
    }

    onClose(data) {
        console.log(data)
    }

}

const DropDownAlertContainerStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E9EEEF'
    },
    contentContainer: {
        marginTop: 22
    },
    button: {
        backgroundColor: '#748182',
        margin: 8,
        borderRadius: 8,
        padding: 8,
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white'
    },
});