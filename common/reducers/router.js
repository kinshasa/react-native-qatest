/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.3.20 下午 3:11
 * @Desc: 公共组件 - router
 * @Name: router.js
 * @LifeCycle：https://github.com/kinshasa/react-native-qatest
 */
import scenes from '../../src/scenes';

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
            state.data.list = getDataSource();
            return {
                ...state,
                ...action,
            }
        }
        case 'ROUTER_HOME_SCENES_LIST': {
            state.data.home = getDataSource('Home');
            return {
                ...state,
                ...action,
            }
        }
        case 'ROUTER_QATEST_SCENES_LIST': {
            state.data.test = getDataSource('QATest');
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

getDataSource = (key='root') => {
    let list = {};
    Object.keys(scenes).map((item, i) => {
        //console.log("#router getDataSource() item:", item);
        if ((key == "root" || scenes[item].parent == key) && (item != key && item != 'root' && item != 'rootProps')) {
            list[item] = scenes[item].des || item;
        }else{
            //console.log(`#router getDataSource() scenes[${item}]:`, scenes[item]);
        }
    });
    //console.log("#router getDataSource() scenes:", list);
    return list;
}