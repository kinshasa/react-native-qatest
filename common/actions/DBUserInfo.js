/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.3.6 下午 5:09
 * @Desc: 数据绑定 - 用户信息
 * @Name: DBUserInfo.js
 * @LifeCycle：http://www.tuicool.com/articles/nu6zInB
 */

const USER_REGISTER = 'USER_REGISTER';
const USER_LOGIN = 'USER_LOGIN';
const USER_LOGOUT = 'USER_LOGOUT';
const USER_GET_INFO = 'USER_GET_INFO';
const USER_UPDATE_INFO = 'USER_UPDATE_INFO';


function register(obj){
    return {
        type: USER_REGISTER,
        user: { obj }
    }
}

function login(obj){
    return {
        type: USER_LOGIN,
        user: { obj }
    }
}

function logout(obj,callback){
    return {
        type: USER_LOGOUT,
        user: { obj },
        callback:callback
    }
}

function getInfo(obj,callback){

    callback && callback();
    return {
        type: USER_GET_INFO,
        user: { obj }
    }
}

function updateInfo(text){

    return (dispatch) => {
        setTimeout(() => {
            dispatch({ type: USER_UPDATE_INFO,user: { text } });
        }, 1000);
        // fetch().then() => dispatch in promise
    }
}

module.exports = {
	register,
	login,
	logout,
	getInfo,
	updateInfo
}