package com.pay;

import android.app.Activity;
import android.os.Bundle;
import android.os.Handler;
import android.os.Message;
import android.text.TextUtils;
import android.util.Log;
import android.widget.Toast;

import com.alipay.sdk.app.PayTask;
import com.pay.module.PayModule;

/**
 * Created by liusp@gagc.com.cn on 2016.9.21.
 * 微信支付页面
 */
public class AliPayActivity extends Activity {

    public static final String EXTRA = "payInfo";
    private String payInfo = "";

    private Handler payHandler = new Handler(/*getApplicationContext().getMainLooper()*/) {

        @Override
        public void handleMessage(Message msg) {
            // TODO Auto-generated method stub
            switch (msg.what) {
                case 1:
                    AliPayResult payResult = new AliPayResult((String) msg.obj);

                    // 支付宝返回此次支付结果及加签，建议对支付宝签名信息拿签约时支付宝提供的公钥做验签
                    String resultInfo = payResult.getResult();

                    String resultStatus = payResult.getResultStatus();
                    // 判断resultStatus 为“9000”则代表支付成功，具体状态码代表含义可参考接口文档
                    if (TextUtils.equals(resultStatus, "9000")) {
                        Toast.makeText(getApplicationContext(), "支付成功", Toast.LENGTH_SHORT).show();
                        if (PayModule.callback != null){
                            PayModule.callback.invoke(new PayModule.PayResult(0,"支付成功").toString());
                            PayModule.callback = null;
                        }

                        Toast.makeText(getApplicationContext(), "支付成功", Toast.LENGTH_SHORT).show();
                    } else {
                        String errmsg = "";
                        // 判断resultStatus 为非“9000”则代表可能支付失败
                        // “8000”代表支付结果因为支付渠道原因或者系统原因还在等待支付结果确认，最终交易是否成功以服务端异步通知为准（小概率状态）
                        if (TextUtils.equals(resultStatus, "8000")) {
                            Toast.makeText(getApplicationContext(), "支付结果确认中",
                                    Toast.LENGTH_SHORT).show();
                            errmsg = "支付结果确认中";

                        } else if (TextUtils.equals(resultStatus, "6001")) {//用户中途取消
                            errmsg = "用户中途取消";
                        } else {
                            if (TextUtils.equals(resultStatus, "4000")) {
                                Toast.makeText(getApplicationContext(), "您尚未安装支付宝客户端!",
                                        Toast.LENGTH_SHORT).show();
                                errmsg = "您尚未安装支付宝客户端!!!";
                            } else {
                                errmsg = "系统错误!";
                            }
                            // 其他值就可以判断为支付失败，包括用户主动取消支付，或者系统返回的错误
                        }
                        //支付失败后的操作
                        //CanclOder(order);

                        Toast.makeText(getApplicationContext(), errmsg, Toast.LENGTH_SHORT).show();
                        if (PayModule.callback != null){
                            PayModule.callback.invoke(new PayModule.PayResult(Integer.valueOf(resultStatus),errmsg).toString());
                            PayModule.callback = null;
                        }
                    }
                    finish();
                    break;
                default:
                    break;
            }
        }
    };

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);


        payInfo = getIntent().getStringExtra(EXTRA);
        if (TextUtils.isEmpty(payInfo)) {
            finish();
        }
        Alipay(payInfo);
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
     * 支付宝支付方法
     *
     * @param payInfo
     */
    private void Alipay(final String payInfo) {

        Runnable payRunnable = new Runnable() {

            @Override
            public void run() {
                // 构造PayTask 对象
                PayTask alipay = new PayTask(AliPayActivity.this);
                Log.v(this.getClass().getSimpleName(), alipay.getVersion());
                // 调用支付接口，获取支付结果
                String result = alipay.pay(payInfo);
                Message msg = new Message();
                msg.what = 1;
                msg.obj = result;
                payHandler.sendMessage(msg);
            }
        };

        // 必须异步调用
        Thread payThread = new Thread(payRunnable);
        payThread.start();


    }

    @Override
    protected void onStop() {
        super.onStop();
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
    }
}
