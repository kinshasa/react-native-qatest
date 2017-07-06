package com.android.qatest.model;

import com.alibaba.fastjson.JSONObject;
import com.alibaba.fastjson.TypeReference;

/**
 * Created by lshaobocsu@gmail.com on 2017.6.23.
 */
@SuppressWarnings("unused")
public class Response<T> {

    public String code;
    public String msg;
    public boolean success;
    public T data;

    public static final String RES_CODE_SUCCESS = "0";


    @SuppressWarnings("unused")
    public String getCode() {

        return code;
    }

    @SuppressWarnings("unused")
    public boolean getSuccess() {
        return success;
    }

    @SuppressWarnings("unused")
    public String getMsg() {

        return msg;
    }

    @SuppressWarnings("unused")
    public T getData() {
        return data;
    }

    @SuppressWarnings("unused")
    public boolean isSuccessCode() {
        return RES_CODE_SUCCESS.equals(code);
    }

    /**
     * 用于解析返回数据中的Data对象
     *
     * @param values 解析的json字符串
     * @param type   传入Data对象的FastJson Type类型
     *               例如：new TypeReference<BaseResponse<Model>>() {}
     *               new TypeReference<BaseResponse<Boolean>>() {}
     *               new TypeReference<BaseResponse<Integer>>() {}
     * @param <T>    返回Data对象
     * @return
     */
    //Response<String> res = Response.parseObject(values, new TypeReference<Response<String>>() {});
    public static <T> Response<T> parseResponseObj(String values, TypeReference<Response<T>> type) {
        Response<T> res = null;
        try{
            JSONObject.parseObject(values, type);
        }catch (Exception e){
            e.printStackTrace();
        }
        //Assert.assertFalse(res.getData() instanceof T);
        return res;
    }

    /**
     * 获取网络请求返回数据的String格式
     *
     * @param values
     * @return
     */
    public static Response<String> getResponseStr(String values) {
        Response<String> res = null;
        try{
            JSONObject.parseObject(values, new TypeReference<Response<String>>() {
            });
        }catch (Exception e){
            e.printStackTrace();
        }
        return res;
    }

    @Deprecated
    public static <T> Response<T> parseResponseObj(String values, Class<T> clazz) {
        TypeReference<Response<T>> type = new TypeReference<Response<T>>() {
        };
        Response<T> res = JSONObject.parseObject(values, type);
        //Assert.assertFalse(res.getData() instanceof T);
        return (Response<T>)res;
    }


    /**
     * 对象转换为字符串
     *
     * @param a
     * @return
     */
    public static String toString(Object a) {
        String str = JSONObject.toJSONString(a);
        return str;
    }

    /**
     * 字符串转换为T对象
     *
     * @param str
     * @return
     */
    public static <T> T parseObject(String str, TypeReference<T> type) {
        T res = null;
        try{
            JSONObject.parseObject(str, type);
        }catch (Exception e){
            e.printStackTrace();
        }
        return res;
    }
}