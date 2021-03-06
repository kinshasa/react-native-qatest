package com.pay;

import android.app.Activity;
import android.os.Bundle;
import android.text.TextUtils;
import android.util.Log;
import android.widget.Toast;

import com.pay.event.WXPayCompletedEvent;
import com.pay.module.PayModule;
import com.pay.module.PayModule.PayResult;
import com.tencent.mm.sdk.modelbase.BaseResp;
import com.tencent.mm.sdk.modelpay.PayReq;
import com.tencent.mm.sdk.openapi.IWXAPI;
import com.tencent.mm.sdk.openapi.WXAPIFactory;

import org.greenrobot.eventbus.EventBus;
import org.greenrobot.eventbus.Subscribe;
import org.json.JSONObject;

/**
 * Created by liusp@gagc.com.cn on 2016.9.21.
 * 微信支付页面
 */
public class WxPayActivity extends Activity {

    public static final String EXTRA = "prePayMsg";

    private String prePayMsg = "";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        prePayMsg = getIntent().getStringExtra(EXTRA);
        if (TextUtils.isEmpty(prePayMsg)) {
            finish();
        }

        WXPay(prePayMsg);

    }

    @Override
    protected void onStart() {
        super.onStart();
        if (!EventBus.getDefault().isRegistered(this)) {
            EventBus.getDefault().register(this);
        }
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
     * 微信支付
     *
     * @param payInfo
     */
    private void WXPay(final String payInfo) {
        IWXAPI api;
        api = WXAPIFactory.createWXAPI(getApplicationContext(), "wx2429b4a5a943e5b0");
        try {
            JSONObject json = new JSONObject(payInfo);
            PayReq req = new PayReq();
            //req.appId = "wxf8b4f85f3a794e77";  // 测试用appId
            req.appId = json.getString("appid");
            req.partnerId = json.getString("partnerid");
            req.prepayId = json.getString("prepayid");
            req.nonceStr = json.getString("noncestr");
            req.timeStamp = json.getString("timestamp");
            req.packageValue = json.getString("package");
            req.sign = json.getString("sign");
            req.extData = "app data"; // optional
            Toast.makeText(getApplicationContext(), "正常调起支付", Toast.LENGTH_SHORT).show();
            // 在支付之前，如果应用没有注册到微信，应该先调用IWXMsg.registerApp将应用注册到微信
            api.sendReq(req);

        } catch (Exception e) {
            Log.e("WxPay", "异常：" + e.getMessage());
            Toast.makeText(getApplicationContext(), "异常：" + e.getMessage(), Toast.LENGTH_SHORT).show();
            if (PayModule.exception != null){
                PayModule.exception.invoke(new PayResult(-1,"支付异常:“"+e.getMessage()+"”").toString());
                PayModule.callback = PayModule.exception = null;
            }
            finish();
        }
    }

    /**
     * 监听WXPayEntryActivity支付结果后关闭
     * @param event
     */
    @Subscribe
    public void onWXPayCompletedEvent(WXPayCompletedEvent event) {
        Log.i("WxPayActivity", "onWXPayCompletedEvent, message = " + event.getMessage());
        if (event.getCode() == BaseResp.ErrCode.ERR_OK) {
            if (PayModule.callback != null){
                PayModule.callback.invoke(new PayResult(0,event.getMessage()).toString());
                PayModule.callback = PayModule.exception = null;
            }
        } else {
            if (PayModule.callback != null){
                PayModule.callback.invoke(new PayResult(event.getCode(),event.getMessage()).toString());
                PayModule.callback = PayModule.exception = null;
            }
        }
        finish();
    }

    @Override
    protected void onStop() {
        super.onStop();
    }

    @Override
    protected void onDestroy() {
        if (EventBus.getDefault().isRegistered(this)) {
            EventBus.getDefault().unregister(this);
        }
        super.onDestroy();
    }
}
