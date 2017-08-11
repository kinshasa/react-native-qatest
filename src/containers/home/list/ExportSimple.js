/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.8.11 下午 5:39
 * @Desc: 公共组件 - ExportSimple
 * @Name: ExportSimple.js
 * @LifeCycle：https://github.com/kinshasa/react-native-qatest
 */


let value = 1110;


function changeValue() {
    value = 10;
}

function getValues() {
    return value;
}
//module.exports = {changeValue,getValues}; // address transfer

export default {changeValue,getValues}; //new object