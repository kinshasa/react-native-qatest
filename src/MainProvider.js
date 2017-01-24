/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.1.23 下午 4:02
 * @Desc: App入口
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import {Actions, Scene, Router} from 'react-native-router-flux';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import * as reducers from '../common/reducers';
//apply thunk
const createStoreWithThunk = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithThunk(reducer);
import MainNavigator from "./MainNavigator"

export default class MainProvider extends Component {


    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentDidUnMount() {

    }

    render() {
        return (
            <Provider store={store}>
                <MainNavigator />
            </Provider>

        );
    }
}