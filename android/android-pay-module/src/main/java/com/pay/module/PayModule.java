package com.pay.module;

import android.content.Context;
import android.content.Intent;
import android.util.Log;
import android.widget.Toast;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableNativeArray;
import com.pay.AliPayActivity;
import com.pay.UniPayActivity;
import com.pay.WxPayActivity;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by liusp@gagc.com.cn on 2016/8/10.
 * <p/>
 * http://wiki.jikexueyuan.com/project/react-native/NativeModulesAndroid.html
 * <p/>
 */

public class PayModule extends ReactContextBaseJavaModule {

    private static final String DURATION_SHORT_KEY = "SHORT";
    private static final String DURATION_LONG_KEY = "LONG";
    public static Callback callback;
    public static Callback exception;

    public static class PayResult {

        public int code;//0成功，非0失败，-1异常
        public String data;//成功后返回的数据
        public String msg;//失败返回的错误信息

        @Override
        public String toString() {
            return "{"+
                    "code:"+code+
                    "data:"+data+
                    "msg:"+msg+
                    "}";
        }

        public WritableNativeArray toNativeArray(){
            WritableNativeArray arr = new WritableNativeArray();
            arr.pushInt(code);
            arr.pushString(data);
            arr.pushString(msg);
            return arr;
        }

        public PayResult(int c, String info){
            code = c;
            if(code == 0){
                data = info;
            }else{
                msg = info;
            }
        }

    }

    public PayModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "Pay";
    }

    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put(DURATION_SHORT_KEY, Toast.LENGTH_SHORT);
        constants.put(DURATION_LONG_KEY, Toast.LENGTH_LONG);
        return constants;
    }

    @ReactMethod
    public void trade(final String order, final String type, final Callback successCallback, final Callback errorCallback) {
    }


    /**
     * 唤起三方支付
     * @param prePayMsg
     * @param type
     * @param cb
     * @param exp
     */
    @ReactMethod
    public void start3rdPay(final String prePayMsg, final String type, final Callback cb,final Callback exp) {
        //public void switchPayMethod(final String prePayNo, final String type, final Promise promise) {
        Log.v("PayModule", "prePayNo:" + prePayMsg);
        Log.v("PayModule", "type:" + type);
        PayModule.callback = cb;
        PayModule.exception = exp;
        if ("alipay".equals(type)) {
            Alipay(prePayMsg);
        } else if ("unionpay".equals(type)) {
            UniPay(prePayMsg);
        } else if ("wechat".equals(type)) {
            WXPay(prePayMsg);
        } else {
            Toast.makeText(getReactApplicationContext(), "无法找到“" + type + "”的支付方式" + type, Toast.LENGTH_SHORT).show();
            if (PayModule.exception != null) {
                PayModule.exception.invoke(new PayResult(-1,"无法找到“" + type + "”的支付方式"));
                PayModule.callback = PayModule.exception = null;
            }
        }
    }


    /**
     * 支付宝支付方法
     *
     * @param payInfo
     */
    private void Alipay(final String payInfo) {
        Context context = getCurrentActivity();
        Intent intent = new Intent();
        intent.setClass(getCurrentActivity(), AliPayActivity.class);
        intent.putExtra(AliPayActivity.EXTRA, payInfo);
        context.startActivity(intent);

    }

    /**
     * 微信支付
     *
     * @param payInfo
     */
    private void WXPay(final String payInfo) {
        Context context = getCurrentActivity();
        Intent intent = new Intent();
        intent.setClass(getCurrentActivity(), WxPayActivity.class);
        intent.putExtra(WxPayActivity.EXTRA, payInfo);
        context.startActivity(intent);
    }

    /**
     * 银联支付
     *
     * @param payInfo
     */
    private void UniPay(final String payInfo) {

        Context context = getCurrentActivity();
        Intent intent = new Intent();
        intent.setClass(getCurrentActivity(), UniPayActivity.class);
        intent.putExtra(UniPayActivity.EXTRA, payInfo);
        context.startActivity(intent);

    }

}
