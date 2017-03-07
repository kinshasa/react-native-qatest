/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.1.23 下午 4:02
 * @Desc: 路由
 * @NAME: MainRouter.js
 * @LIFECYCLE：http://www.tuicool.com/articles/nu6zInB
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import {Actions, Scene, Router} from 'react-native-router-flux';
import scenes from './scenes';
import DataBindingRedux from './containers/home/list/DataBindingRedux';

export default class MainRouter extends Component {


    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    componentWillMount() {

    }

    componentDidMount() {
        /*setTimeout(()=>{
            this.props.navigator.push({
                name: 'DataBindingRedux',
                params: {
                    mobile: this.state.mobile
                },
                component: DataBindingRedux
            });
        },2000)*/
    }

    componentWillUnmount() {

    }

    render() {

        //let data = this.props.actions.DBUserInfo.register({'dw':123});
        //console.log("MainRouter", `render()register ${JSON.stringify(this.props.actions)}`);
        return (
                <Router scenes={scenes}/>

        );
    }
}