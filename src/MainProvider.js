/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.1.23 下午 4:02
 * @Desc: Provider Redux存储提供者
 * @NAME: MainProvider.js
 * @LIFECYCLE：http://www.tuicool.com/articles/nu6zInB
 */
import React, {Component} from 'react';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import * as reducers from '../common/reducers';
import MainRouter from './MainRouter';

//拿到后面定义的所有state的读取的权力
const createStoreWithThunk = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithThunk(reducer);

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

    componentWillUnmount() {

    }

    render() {
        //我们现在通过Provider把Store递交给了真正的App入口，也就是开始渲染界面的东西MainNavigator
        console.log("MainProvider render()");
        return (
            <Provider store={store}>
                <MainRouter />
            </Provider>

        );
    }
}