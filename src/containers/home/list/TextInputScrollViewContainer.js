/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.6.21 下午 6:37
 * @Desc: 公共组件 - TextInputScrollViewContainer
 * @Name: TextInputScrollViewContainer.js
 * @LifeCycle：https://github.com/kinshasa/react-native-qatest
 */

import React, {Component} from "react";
import {Modal, ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, View} from "react-native";

export default class TextInputScrollViewContainer extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {modalOpen: false};
    }

    render() {
        return (
            <View>
                <TouchableHighlight onPress={() => this.setState({modalOpen: true})}>
                    <Text>Open Example</Text>
                </TouchableHighlight>
                <Modal
                    onRequestClose={() => this.onRequestClose()}
                    animationType="fade" visible={this.state.modalOpen}>
                    <ScrollView
                        ref="scroll"
                        contentContainerStyle={TextInputScrollViewContainerStyles.container}>
                        <TouchableHighlight
                            onPress={() => this.setState({modalOpen: false})}
                            style={TextInputScrollViewContainerStyles.closeButton}>
                            <Text>Close</Text>
                        </TouchableHighlight>
                        <TextInput style={TextInputScrollViewContainerStyles.input} value="11111"/>
                        <TextInput style={TextInputScrollViewContainerStyles.input} value="11111"/>
                        <TextInput style={TextInputScrollViewContainerStyles.input} value="11111"/>
                        <TextInput style={TextInputScrollViewContainerStyles.input} value="11111"/>
                    </ScrollView>
                </Modal>
            </View>
        );
    }

    onRequestClose = () => {
        this.setState({modalOpen: false});
    }
}

const TextInputScrollViewContainerStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#999'
    },
    input: {
        width: getWidth() - 100,
        backgroundColor: 'green',
        margin: 3
    },
    closeButton: {
        flex: 1,
        backgroundColor: 'red'
    }
});