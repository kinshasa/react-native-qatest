package com.android.qatest.ui.home;

import android.content.Context;

import com.alibaba.fastjson.TypeReference;
import com.android.http.Http;
import com.android.http.HttpBase;
import com.android.http.HttpResponseHelper;
import com.android.log.L;
import com.android.qatest.Config;
import com.android.qatest.model.Response;
import com.android.qatest.ui.home.model.HomePageResponse;

/**
 * Created by lshaobocsu@gmail.com on 2017.4.17.
 */

public class HomeInteractorImpl implements HomeInteractor{

    HomeInteractorImpl(){
    }

    @Override
    public void fetchHomeFloorList(final Context context, final Http.onHttpListener<HomePageResponse> listener) {


        //如果有缓存数据，取缓存
        if(isCachedData()){
            listener.onComplete(getCacheData());
            return;
        }

        //如果没有缓存数据，则需要网络请求
        HttpBase.getDefaultInstance().request(context, Config.CallAPIs.HomeFloorList, null, new Http.onHttpListener<String>() {

            @Override
            public void onComplete(String values) {
                //HomePageResponse res = Response.parseObject(values, new TypeReference<HomePageResponse>() {});
                HomePageResponse res = new HomePageResponse(values);

                //可以统一做错误代码处理
                //TODO 后期可以通过@linker{HttpResponseHelper}在Http中统一处理
                if(HttpResponseHelper.isEspecialCode(context,res.code)){
                    //如果是特殊错误信息，统一处理后不需要返回
                    return;
                }
                if (HomePageResponse.CODE_SUCCESS.equals(res.code)) {
                    L.v("请求成功");
                    //如果成功，保存起来
                    listener.onComplete(res);
                } else {
                    onException(res);
                }

            }

            @Override
            public void onException(Object exceptionInfo) {
                listener.onException(exceptionInfo);
            }
        });
    }

    public boolean isCachedData(){
        return false;
    }

    public HomePageResponse getCacheData(){
        HomePageResponse data = new HomePageResponse();
        return  data;
    }

}
