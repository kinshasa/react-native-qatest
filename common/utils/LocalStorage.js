/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.6.12 上午 10:55
 * @Desc: 公共组件 - LocalStorage
 * @Name: const js
 * @LifeCycle：https://github.com/kinshasa/react-native-qatest
 */
import {AsyncStorage} from "react-native";
import Storage from 'react-native-storage';

var storage;


const initStorage = function () {

    return new Storage({
        size: 1000,
        storageBackend: AsyncStorage,
        defaultExpires: null,
        //defaultExpires: 1000 * 3600 * 24,
        enableCache: true
    });
};

const getStorage = function () {
    if (!storage) {
        storage = initStorage();
    }

    return storage;
};

const save = async function (key, data, expires = 1000 * 3600 * 24) {

    console.log('LocalStorage::save() key value:', key, data);
    await getStorage().save({
        key, data, expires
    });

};

const saveById = function (key, data, id = 0, expires = 1000 * 3600 * 24) {

    console.log('LocalStorage::saveById() key value:', key, data,id);
    getStorage().save({
        key, id, data, expires
    });

};


const load = async function (key) {
    let data = '';
    await getStorage().load({
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
    }).then(ret => {
        data = ret;
        console.log("LocalStorage::load() data:", data);
    }).catch(err => {
        // any exception including data not found
        // goes to catch()
        console.log("LocalStorage::load() err:", err.name);
        switch (err.name) {
            case 'NotFoundError':
                // TODO;
                break;
            case 'ExpiredError':
                // TODO
                break;
        }
    });
    //同步处理返回，需要在调用处使用 let data = await load(key)
    console.log("LocalStorage::load() return:", data);
    return data;
};

const loadById = async function (key, id = 0) {
    let data = '';
    await getStorage().load({
        key,
        id,
        autoSync: true,
        syncInBackground: true,
        syncParams: {
            extraFetchOptions: {},
            someFlag: true,
        },
    }).then(ret => {
        data = ret;
        console.log("LocalStorage::load() data:", data);
    }).catch(err => {
        console.log("LocalStorage::load() err:", err.name);
    });
    //同步处理返回，需要在调用处使用 let data = await load(key)
    console.log("LocalStorage::load() return:", data);
    return data;
};


const getIdsForKey = async function (key) {
    // getIdsForKey
    let data = [];
    await getStorage().getIdsForKey(key).then(ids => {
        data = ids;
    });
    return data;
};
const getAllDataForKey = async function (key) {
    // getAllDataForKey
    let data = [];
    await getStorage().getAllDataForKey(key).then(ret => {
        data = ret;
    });
    return data;
};

const clearMapForKey = async function (key) {
    // !! clear all data under a key
    await getStorage().clearMapForKey(key);
};


const clear = function () {
    getStorage().clearMap();
};
export default {save, saveById, load, loadById, getIdsForKey, getAllDataForKey, clearMapForKey, clear};
