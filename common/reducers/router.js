/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.3.20 下午 3:11
 * @Desc: 公共组件 - router
 * @Name: router.js
 * @LifeCycle：https://github.com/kinshasa/react-native-qatest
 */
import * as LauncherController from "../../src/containers/LauncherController";

module.exports = function (state, action) {
    state = state || {
            type: 'USER_INITIAL',
            data: {
                list:[],
                home:[],
                test:[]
            },
        };
    //console.log(`#router state:`,state);
    console.log(`#router action:`,action);
    switch (action.type) {

        case 'ROUTER_SCENES_LIST': {
            state.data.list = LauncherController.getDataSource();
            return {
                ...state,
                ...action,
                data,
            }
        }
        case 'ROUTER_HOME_SCENES_LIST': {
            state.data.home = LauncherController.getDataSource('Home');
            return {
                ...state,
                ...action,
            }
        }
        case 'ROUTER_QATEST_SCENES_LIST': {
            state.data.test = LauncherController.getDataSource('QATest');
            return {
                ...state,
                ...action,
            }
        }
    }

    return {
        ...state
    }
};
