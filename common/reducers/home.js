/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.3.7 下午 3:17
 * @Desc: 公共组件 - home
 * @Name: home.js
 * @LifeCycle：https://github.com/kinshasa/react-native-qatest
 */

module.exports = function (state, action) {
    state = state || {
            type: 'USER_INITIAL',
            data: [],
        };
    console.log("home", `action:${JSON.stringify(action)}`);
    switch (action.type) {

        case 'HOME_INFO': {
            return {
                ...state,
                ...action,
                data: "HOME_INFO",
            }
        }
    }

    return {
        ...state
    }
}