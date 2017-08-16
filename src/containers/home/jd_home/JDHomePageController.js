/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.8.14 下午 6:02
 * @Desc: 公共组件 - JDHomePageController
 * @Name: JDHomePageController.js
 * @LifeCycle：https://github.com/kinshasa/react-native-qatest
 */

import React, {Component, PropTypes} from 'react';


class JDHomePageController {


    data = {};

    /**
     * 获取首页数据
     * @param success
     * @param fail
     */
    static getHomeData(success, fail) {

        //TODO 添加网络请求的逻辑
        this.data = require('./jd_home.json');
        Loggers.s('JDHomePageController$getHomeData()',this.data);
        setTimeout(() => {
            success(this.data);
        }, 2000)
    }

    static getFloorList() {
        if (this.data && this.data.floorList && this.data.floorList.length > 0) {
            return this.data.floorList;
        }
        return [];
    }

    /**
     * 根据楼层唯一类型获取楼层数据
     * @param type
     * @returns {*}
     */
    static getFloorListByType(type = '') {
        if (!type) {
            return {};
        }
        let floorList = this.getFloorList();
        for (let key in floorList) {
            if (type === floorList[key].type) {
                return floorList[key];
            }
        }
        return {};
    }

    static getBannerData() {
        let image = [];
        let content = this.getFloorListByType('banner').content||[];
        for (let i = 0; i < content.length; i++) {
            image.push(content[i].horizontalImag)
        }
        if(image.length === 0){
            image.push(LOGO_URI);
        }
        Loggers.s('JDHomePageController$getHomeData()',image);
        return image;
    }
}

export default JDHomePageController;