package com.android.qatest.wxapi;


import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;

import com.android.qatest.R;
import com.pay.event.WXPayCompletedEvent;
import com.tencent.mm.sdk.constants.ConstantsAPI;
import com.tencent.mm.sdk.modelbase.BaseReq;
import com.tencent.mm.sdk.modelbase.BaseResp;
import com.tencent.mm.sdk.openapi.IWXAPI;
import com.tencent.mm.sdk.openapi.IWXAPIEventHandler;
import com.tencent.mm.sdk.openapi.WXAPIFactory;

import org.greenrobot.eventbus.EventBus;

public class WXPayEntryActivity extends Activity implements IWXAPIEventHandler {


    private IWXAPI api;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        //setContentView(R.layout.pay_wx);
        api = WXAPIFactory.createWXAPI(this, "wx2429b4a5a943e5b0");
        api.handleIntent(getIntent(), this);
    }

    @Override
    protected void onNewIntent(Intent intent) {
        super.onNewIntent(intent);
        setIntent(intent);
        api.handleIntent(intent, this);
    }

    @Override
    public void onReq(BaseReq req) {
    }

    /**
     * 0    成功	展示成功页面
     * -1	错误	可能的原因：签名错误、未注册APPID、项目设置APPID不正确、注册的APPID与设置的不匹配、其他异常等。
     * -2	用户取消	无需处理。发生场景：用户不支付了，点击取消，返回APP。
     */
    @Override
    public void onResp(BaseResp resp) {
        Log.i("WXPayEntryActivity", "onPayFinish, errCode = " + resp.errCode);

        if (resp.getType() == ConstantsAPI.COMMAND_PAY_BY_WX) {
            /*AlertDialog.Builder builder = new AlertDialog.Builder(this);
            builder.setTitle(R.string.app_tip);
            builder.setMessage(getString(R.string.pay_result_callback_msg, String.valueOf(resp.errCode)));
            builder.show();*/
            String msg = "";
            switch (resp.errCode){
                case BaseResp.ErrCode.ERR_OK:
                    //0 -交易成功 展示成功页面
                    msg = "交易成功";
                    break;
                case BaseResp.ErrCode.ERR_COMM:
                    //-1 -交易失败 可能的原因：签名错误、未注册APPID、项目设置APPID不正确、注册的APPID与设置的不匹配、其他异常等。
                    msg = "交易失败";
                    break;
                case BaseResp.ErrCode.ERR_USER_CANCEL:
                    //-2 -交易取消 无需处理。发生场景：用户不支付了，点击取消，返回APP。
                    msg = "交易取消";
                    break;
                case BaseResp.ErrCode.ERR_AUTH_DENIED:
                    //-4 -交易拒绝
                    msg = "交易拒绝";
                    break;
                default:
                    msg = "交易异常";
                    break;
            }
            EventBus.getDefault().post(new WXPayCompletedEvent("WxPay",resp.errCode,msg));
            finish();
        }
    }
}