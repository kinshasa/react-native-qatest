package com.android.http;

import android.content.Context;

/**
 * Created by lshaobocsu@gmail.com on 2017.7.5.
 */

public class HttpResponseHelper {


    /**
     * 是否是错误码
     * @param context
     * @param code
     * @return
     */
    public static boolean isEspecialCode(Context context, String code) {

        if ("true".equals(code)){
            doEspecialCode(context,code);
            return true;
        }
        return false;
    }

    /**
     * 处理错误码
     * @param context
     * @param code
     */
    public static void doEspecialCode(Context context, String code){
    }

    /**
     * 打开登录页面
     * @param context
     */
    public static void Login(Context context){

    }

    /**
     * 自动退出登录处理
     * @param context
     */
    public static void Logout(Context context){

    }


    /**
     * 自动登陆处理
     * @param context
     */
    public static void AutoLogin(Context context){

    }
}
