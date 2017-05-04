/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.1.23 下午 4:02
 * @Desc: 路由
 * @NAME: MainRouter.js
 * @LIFECYCLE：http://www.tuicool.com/articles/nu6zInB
 */
import React, {Component} from "react";
import {Router} from "react-native-router-flux";
import scenes from "./scenes";
// import {bindActionCreators} from 'redux';
// import {connect} from 'react-redux';
// import * as actions from '../common/actions';

export default class MainRouter extends Component {


    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    data = {}

    componentDidMount() {
        console.log('#MainRouter componentDidMount this.props:,this.props.actions');
    }

    render() {

        console.log('#MainRouter render() props.state:, this.props.state.router.data');
        return (
            <Router
                //state={this.props.state}
                //actions={this.props.actions}
                scenes={scenes}/>
        );
    }
}

// /**
//  * 把this.state绑定到this.props.state上
//  * 相当于 组件里面的赋值：state={this.state}
//  * @param state
//  * @returns {{state: *}}
//  */
// function selector(state) {
//     return {
//         state: state
//     }
// }

// /**
//  * 把this.state关联到this.props.state
//  * @param state
//  * @returns {{state: *}}
//  */
// function mapStateToProps(state) {
//     return {
//         state: state
//     }
// }
//
// /**
//  * 把actions.user_info, dispatch通过type关联到一起
//  * @param dispatch
//  * @returns {{actions: (A|B|M|N)}}
//  */
// function mapDispatchToProps(dispatch) {
//     console.log('MainRouter actions:, actions');
//     return {
//         actions: bindActionCreators(actions, dispatch),
//     }
// }
//
// /**
//  * 把mapStateToProps, mapDispatchToProps绑定到MainRouter组件上
//  */
// export default connect(mapStateToProps, mapDispatchToProps)(MainRouter);