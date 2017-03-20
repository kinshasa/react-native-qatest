/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.3.20 下午 3:11
 * @Desc: 公共组件 - router
 * @Name: router.js
 * @LifeCycle：https://github.com/kinshasa/react-native-qatest
 */

const ACTIONS_ROUTER_SCENES_LIST = 'ROUTER_SCENES_LIST';


export function getScenesList(obj){
    console.log("router getScenesList()", obj);
    return (dispatch) => {
        setTimeout(() => {
            dispatch({ type: ACTIONS_ROUTER_SCENES_LIST });
        }, 1000);
    }
}
