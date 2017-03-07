/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.3.6 下午 5:09
 * @Desc: 数据绑定 - 用户信息
 * @Name: DBUserInfo.js
 * @LifeCycle：http://www.tuicool.com/articles/nu6zInB
 */

const HOME_INFO = 'HOME_INFO';


export function getHomeInfo(obj){
    console.log("home getHomeInfo()", obj);
    return (dispatch) => {
        setTimeout(() => {
            dispatch({ type: HOME_INFO });
        }, 1000);

        // fetch().then() => dispatch in promise
    }
}
