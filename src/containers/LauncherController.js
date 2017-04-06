/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.3.28 下午 5:06
 * @Desc: 公共组件 - LauncherController
 * @Name: LauncherController.js
 * @LifeCycle：https://github.com/kinshasa/react-native-qatest
 */
import scenes from "../scenes";

export function getDataSource(key) {
    let list = {};
    Object.keys(scenes).map((item, i) => {
        if(scenes[item].role == key){
            list[item] = scenes[item].des || item;
        }
    });
    console.log('LauncherController getDataSource() ', list);
    return list;
}