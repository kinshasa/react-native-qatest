/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.8.14 下午 6:04
 * @Desc: 公共组件 - HttpRequest
 * @Name: HttpRequest.js
 * @LifeCycle：https://github.com/kinshasa/react-native-qatest
 */

import React, {Component, PropTypes} from 'react';

export default class HttpRequest {

    static propTypes = {

    };

    static defaultProps = {

    };

    constructor() {
        console.log("HttpRequest constructor()");
        this.state = {};
    }


    static async get(url,params,callback){


        return this.fetch(url);
    }

    static async fetch(url,headers){
        await fetch(url, headers).then((response)=>{

        },(fail)=>{

        }).catch((e)=>{

        });
        let res = new Promise((resolve, reject) => {});

        return res;
    }
}