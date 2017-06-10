package com.pay.module;

import android.content.Context;
import android.content.Intent;
import android.util.Log;
import android.widget.Toast;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
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
    public static Promise promise;


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

    public void trade(final String order, final String type, final Callback successCallback, final Callback errorCallback) {
    }

    /**
     * 切换支付方式
     *
     * @param prePayNo
     * @param type
     */
    @ReactMethod
    public void switchPayMethod(final String prePayNo, final String type, final Promise promise) {
        Log.v("PayModule", "prePayNo:" + prePayNo);
        Log.v("PayModule", "type:" + type);

        if ("alipay".equals(type)) {
            Alipay(prePayNo, promise);
        } else if ("unionpay".equals(type)) {
            UniPay(prePayNo, promise);
        } else if ("wechat".equals(type)) {
            WXPay(prePayNo, promise);
        }else {
            Toast.makeText(getReactApplicationContext(), "无法找到支付方式" + type, Toast.LENGTH_SHORT).show();
            if (promise != null)
                promise.reject("0", "无法找到支付方式" + type);
        }
    }


    /**
     * 支付宝支付方法
     *
     * @param payInfo
     * @param promise
     */
    private void Alipay(final String payInfo, final Promise promise) {
        PayModule.promise = promise;
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
     * @param promise
     */
    private void WXPay(final String payInfo, final Promise promise) {
        PayModule.promise = promise;
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
     * @param promise
     */
    private void UniPay(final String payInfo, final Promise promise) {

        PayModule.promise = promise;
        Context context = getCurrentActivity();
        Intent intent = new Intent();
        intent.setClass(getCurrentActivity(), UniPayActivity.class);
        intent.putExtra(WxPayActivity.EXTRA, payInfo);
        context.startActivity(intent);

    }

}
