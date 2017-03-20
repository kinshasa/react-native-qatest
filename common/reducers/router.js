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
            data: [],
        };
    console.log(`#router state:`,state);
    console.log(`#router action:`,action);
    switch (action.type) {

        case 'ROUTER_SCENES_LIST': {
            data = getDataSource();
            return {
                ...state,
                ...action,
                data,
            }
        }
    }

    return {
        ...state
    }
};

getDataSource = () => {
    let list = {};
    Object.keys(scenes).map((item, i) => {
        list[item] = scenes[item].des || item;
    });
    console.log('#router getDataSource() list:', list);
    return list;
}