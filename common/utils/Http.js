/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.3.6 下午 5:44
 * @Desc: 工具类 - 网络请求
 * @Name: Http.js
 * @LifeCycle：http://www.tuicool.com/articles/nu6zInB
 */

/**
 * 请求方式类型
 * @type {{GET: string, POST: string}}
 */
const HTTP_METHOD = {
    GET: "GET",
    POST: "POST",
};

/**
 * 数据类型
 * @type {{ROW: string, JSON: string}}
 */
const HTTP_DATA_TYPE = {
    ROW: "row",
    JSON: "json",
};

const HTTP_HELPER = {
    TIMEOUT: 10 * 1000,
    VERSION:"1.0"
};
const HTTP_HEADERS = {
    FORM: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    JSON: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
};


class Http {
    static propTypes = {};

    constructor(props) {

    }

    /**
     * 请求URL
     * @type {string}
     */
    url = "http://baidu.com";

    /**
     * 请求类型
     * @type {string}
     */
    method = HTTP_METHOD.GET;


    /**
     * 传参
     * @type {{}}
     */
    params = {};

    /**
     * 传参数据类型
     * @type {string}
     */
    params_type = HTTP_DATA_TYPE.JSON;


    /**
     * 参数头
     * @type {string}
     */
    headers = HTTP_HEADERS.JSON;


    /**
     * 请求方式
     * @type {{method: *, headers: *}}
     */
    option = {
        method: this.method,
        headers: this.headers
    };

    /**
     *最简单的GET请求
     * @param url 请求的URL,可以使用@getParamsToString()方法拼接成URL
     * @param success
     * @param fail
     * @return Json
     */
    get(url, success, fail) {

        this.send(url,success,fail)
    }

    /**
     * 特殊情况下，额外传入覆盖默认字段时请求使用(exp:api_version)
     * @param url
     * @param json 覆盖默认字段时使用
     * @param success
     * @param fail
     * @return Json
     */
    getWithParams(url, json, success, fail) {
        //根据json数据组装URL
        var resUrl = url + (url.indexOf("?") >= 0 ? "&" : "?") + this.JsonToRows(json);
        this.get(resUrl, success, fail);
    }

    /**
     * GET请求，用于直接返回字符串接口
     * @param url
     * @param success
     * @param fail
     * @return String
     */
    getRow(url, success, fail) {
        this.setUrl(url);
        this.setOption(this.const.METHOD_GET, null, null);
        //TODO:添加Row解析方法
    }

    /**
     * 普通POST请求，默认头为@link HEADERS_JSON
     * @param url
     * @param json 必须为JSON对象，可以使用@addParamsToJson(key,value):React.PropTypes.object
     * @param success
     * @param fail
     * @return Json
     */
    post(url, json, success, fail) {

        this.send(url, 'post_json', json, success, fail);
    }


    /**
     * 表单POST请求
     * @param url
     * @param json 必须为key=value格式 可以使用@JsonToRows(json):String
     * @param success
     * @param fail
     * @return Json
     * postForm(Constants.URL+"/api/login",{username:1300,password:1233},success,fail);
     */
    postForm(url, json, success, fail) {

    }


    /**
     * 表单的POST请求，返回为Row数据
     * @param url
     * @param json
     * @param success
     * @param fail
     * @return String
     * //设置请求参数
     */
    postFormRow(url, json, success, fail) {
        this.setUrl(url);
        this.setOption(this.const.METHOD_POST, this.const.HEADERS_FORM, json);
        //TODO:添加Row解析方法
    }

    /**
     * 发送请求
     */
    send(success, fail) {

        let url = this.state.URL;
        let isOk;

        try {
            //根据URL判断，如果是本地文件，则直接读取并返回
            if (this.isReadAssetsFile(url)) {
                this.readAssetsFile(url, success, fail);
                return;
            }

            //如果没有网络，则返回网络失败。
            if (!this.isValidNetwork()) {
                fail("[HTTP NETWORK ERROR!]" + "网络请求失败！");
                return;
            }
            fetch(url, this.state.OPTION)
            /*返回请求数据*/
                .then((response) => {
                    if (response.ok) {
                    }
                    return response.json();
                })
                /*处理数据*/
                .then((object) => {
                    if (isOk) {
                        /*如果返回成功且回调函数被定义*/
                        if (object.code === '0000') {
                            success && success(object);
                        }
                        /*如果返回失败且回调函数被定义*/
                        else {
                            success && success(object);
                        }
                    } else {
                        fail && fail(object);
                    }
                })
                /*如果解析失败且回调函数被定义*/
                .catch((error) => {
                    fail && fail(error);
                });
        }
        catch (error) {
            fail && fail(error);
        }
    }

    /**
     * 设置当前请求的URL
     * @param url
     */
    setUrl(url) {
        this.state.URL = url;
        return this;
    }

    setOption(method, header, body) {
        //如果是POST请求
        if (method == this.const.METHOD_POST) {
            let params = (header == this.const.HEADERS_JSON) ? JSON.stringify(body) : this.JsonToRows(body);
            this.state.OPTION = {
                headers: header,
                method: method,
                body: params
            };
            return;
        }
        //否则设置为GET请求
        this.state.OPTION = {
            method: method,
            headers: header,
        }
    }

    /**
     * JSON转为行参数key=value
     * @param json
     */
    JsonToRows(json) {

        var res = "";
        for (let item in json) {
            res += item + "=" + json[item] + "&";
        }
        if (res.length > 0 && res[res.length - 1] == "&") {
            res = res.substr(0, res.length - 1);
        }
        return res;
    }

    /**
     * 设置请求类型
     * {GET，POST}
     * @param method
     */
    /*setMethod(method) {
     if (type == this.const.METHOD_GET || type == this.const.METHOD_POST) {
     this.state.METHOD = method;
     } else {
     this.state.METHOD = this.const.METHOD_GET;
     }
     return this;
     }*/

    /**
     * 检测网络相关
     */
    isValidNetwork() {
        //TODO
        return true;
    }

    isReadAssetsFile(url) {
        //TODO
        if (url.startsWith("file://")) {
            return true;
        }
        return false;
    }

    /**
     *
     * @param url 请求文件的URL，以file://file.json格式返回
     * @param success 如果成功，则返回json数据
     * @param fail 如果失败或者异常，返回错误信息
     */
    readAssetsFile(url, success, fail) {
        //TODO
        //Uri uri_loacl_rn = Uri.parse("asset:///" + url.replaceAll("localimage://", ""));
        url = url.substring(7);
        let resURL = "../../assets/data/" + url;
        try {
            //var res = require(resURL);
            if (res && success) {
                success(res);
            } else if (fail) {
                fail("[FILE NOT EXIST!]" + object.msg);
            }
        } catch (e) {
            fail("[FILE NOT EXIST!]" + e.toString());
        } finally {

        }

    }

    isReadLocalFile() {
        //TODO
        return Constant.HTTP_REQUEST_LOCAL_FILE;
    }

}
export default Http = new Http();
