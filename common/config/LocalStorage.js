/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.6.12 上午 10:55
 * @Desc: 公共组件 - LocalStorage
 * @Name: const js
 * @LifeCycle：https://github.com/kinshasa/react-native-qatest
 */
import {AsyncStorage} from "react-native";

let storage;


const initStorage = function () {

    return new Storage({
        size: 1000,
        storageBackend: AsyncStorage,
        defaultExpires: null,
        enableCache: true
    });
};

const getStorage =function () {
    if(!storage){
        storage = initStorage();
    }

    return storage;
};

const save = function (key,value,expires=1000 * 3600) {

    getStorage().save({
        key: 'loginState',   // Note: Do not use underscore("_") in key!
        data: {
            from: 'some other site',
            userid: 'some userid',
            token: 'some token'
        },

        // if not specified, the defaultExpires will be applied instead.
        // if set to null, then it will never expire.
        expires
    });

};


const load = async function (key,callback,exception) {
    let ret = await getStorage().load({
        key,

        // autoSync(default true) means if data not found or expired,
        // then invoke the corresponding sync method
        autoSync: true,

        // syncInBackground(default true) means if data expired,
        // return the outdated data first while invoke the sync method.
        // It can be set to false to always return data provided by sync method when expired.(Of course it's slower)
        syncInBackground: true,

        // you can pass extra params to sync method
        // see sync example below for example
        syncParams: {
            extraFetchOptions: {
                // blahblah
            },
            someFlag: true,
        },
    }).catch(err => {
        // any exception including data not found
        // goes to catch()
        exception(err.message);
        switch (err.name) {
            case 'NotFoundError':
                // TODO;
                break;
            case 'ExpiredError':
                // TODO
                break;
        }
    });
    if(ret){
        callback && callback(ret);
    }
};

const clear = function () {

};

export default LocalStorage = {save,load,clear};
