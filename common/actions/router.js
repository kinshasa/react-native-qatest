/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.3.20 下午 3:11
 * @Desc: 公共组件 - router
 * @Name: router.js
 * @LifeCycle：https://github.com/kinshasa/react-native-qatest
 */

const ACTIONS_ROUTER_SCENES_LIST = 'ROUTER_SCENES_LIST';
const ACTIONS_ROUTER_HOME_SCENES_LIST = 'ROUTER_HOME_SCENES_LIST';
const ACTIONS_ROUTER_QATEST_SCENES_LIST = 'ROUTER_QATEST_SCENES_LIST';


export function getScenesList(obj){
    console.log("#router getScenesList()", obj);
    return (dispatch) => {
        setTimeout(() => {
            dispatch({ type: ACTIONS_ROUTER_SCENES_LIST });
        }, 1000);
    }
}

export function getHomeScenesList(obj){
    console.log("#router getHomeScenesList()", obj);
    return (dispatch) => {
        setTimeout(() => {
            dispatch({ type: ACTIONS_ROUTER_HOME_SCENES_LIST });
        }, 1000);
    }
}

export function getQATestScenesList(obj){
    console.log("#router getQATestScenesList()", obj);
    return (dispatch) => {
        setTimeout(() => {
            dispatch({ type: ACTIONS_ROUTER_QATEST_SCENES_LIST });
        }, 1000);
    }
}
