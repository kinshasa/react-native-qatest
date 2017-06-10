package com.pay;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.text.TextUtils;
import android.widget.Toast;

import com.pay.module.PayModule;
import com.unionpay.UPPayAssistEx;

import org.json.JSONException;
import org.json.JSONObject;

/**
 * Created by liusp@gagc.com.cn on 2016.9.21.
 * 微信支付页面
 */
public class UniPayActivity extends Activity {

    public static final String EXTRA = "payInfo";

    private String payInfo = "";
    /*****************************************************************
     * mMode参数解释： "00" - 启动银联正式环境 ，"01" - 连接银联测试环境
     *****************************************************************/
    private String mMode = "00";


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        payInfo = getIntent().getStringExtra(EXTRA);
        if (TextUtils.isEmpty(payInfo)) {
            finish();
        }
        UniPay(payInfo);

    }

    @Override
    protected void onStart() {
        super.onStart();
    }

    @Override
    protected void onPause() {
        super.onPause();
    }

    @Override
    protected void onRestart() {
        super.onRestart();
    }

    @Override
    protected void onResume() {
        super.onResume();
    }

    /**
     * 银联支付
     *
     * @param payInfo
     */
    private void UniPay(final String payInfo) {
        String price = "99";
        try {
            UPPayAssistEx.startPay(this, /*"0009"*/null, /*price*/null, payInfo, mMode);// total_price和tn码需要更改
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
            Toast.makeText(this, e.getMessage(), Toast.LENGTH_SHORT).show();
            if (PayModule.promise != null) {
                PayModule.promise.reject("0", e.getMessage());
                PayModule.promise = null;
            }
        }
    }


    @Override
    protected void onStop() {
        super.onStop();
    }

    @Override
    protected void onDestroy() {

        super.onDestroy();
    }

    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);

        /**处理银联手机支付控件返回的支付结果*/
        /**设置银联支付回调*/
        if (data != null && !TextUtils.isEmpty(data.getExtras().getString("pay_result"))) {
            String msg = "";
            /*
             * 支付控件返回字符串:success、fail、cancel 分别代表支付成功，支付失败，支付取消
             */
            String str = data.getExtras().getString("pay_result");
            if (TextUtils.isEmpty(str)) {
                return;
            }
            if (str.equalsIgnoreCase("success")) {
                // 支付成功后，extra中如果存在result_data，取出校验
                // result_data结构见c）result_data参数说明
                if (data.hasExtra("result_data")) {
                    String result = data.getExtras().getString("result_data");
                    try {
                        JSONObject resultJson = new JSONObject(result);
                        String sign = resultJson.getString("sign");
                        String dataOrg = resultJson.getString("data");
                        // 验签证书同后台验签证书
                        // 此处的verify，商户需送去商户后台做验签
                        boolean ret = verify(dataOrg, sign, mMode);
                        if (ret) {
                            // 验证通过后，显示支付结果
                            msg = "支付成功！";
                        } else {
                            // 验证不通过后的处理
                            // 建议通过商户后台查询支付结果
                            msg = "支付失败！";
                        }
                    } catch (JSONException e) {
                    }
                } else {
                    // 未收到签名信息
                    // 建议通过商户后台查询支付结果
                    msg = "支付成功！";
                }
                if (PayModule.promise != null){
                    PayModule.promise.resolve(msg);
                    PayModule.promise = null;
                }
            } else if (str.equalsIgnoreCase("fail")) {
                msg = "支付失败！";
                if (PayModule.promise != null){
                    PayModule.promise.reject("0", msg);
                    PayModule.promise = null;
                }
            } else if (str.equalsIgnoreCase("cancel")) {
                msg = "用户取消了支付";
                if (PayModule.promise != null) {
                    PayModule.promise.reject("0", msg);
                    PayModule.promise = null;
                }
            }else{
                msg = "服务器异常";
                if (PayModule.promise != null) {
                    PayModule.promise.reject("0", msg);
                    PayModule.promise = null;
                }
            }
            //回调成功后，关闭页面
            finish();
        }
    }

    private boolean verify(String msg, String sign64, String mode) {
        // 此处的verify，商户需送去商户后台做验签
        return true;
    }

}
