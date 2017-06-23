package com.android.qatest.ui.category;

import android.content.Context;

import com.alibaba.fastjson.TypeReference;
import com.alibaba.fastjson.parser.deserializer.ObjectDeserializer;
import com.android.http.Http;
import com.android.http.HttpBase;
import com.android.log.L;
import com.android.qatest.Config;
import com.android.qatest.model.Response;

import java.util.ArrayList;

/**
 * Created by lshaobocsu@gmail.com on 2017.5.17.
 */

public class CategoryInteractorImp implements CategoryInteractor {

    @Override
    public void onRequest(Context context, final onCategoryRequestListener listener) {
        ArrayList<DivisionModel> divisionModels = DivisionModel.initArrayData(10);
        /*new AsyncTask<String, Integer, String>() {

            @Override
            protected String doInBackground(String... params) {
                Thread.sleep(20);
                return null;
            }
        }.execute();
        new Thread(new Runnable() {
            @Override
            public void run() {
                listener.onSuccess(divisionModels);

            }
        }).start();*/
        listener.onSuccess(divisionModels);
    }

    @Override
    public void fetchCateDataById(Context context, int cateId, final Http.onHttpListener listener) {

        //判断商品类型范围，防止数据越界
        if (cateId > Config.UrlList.catelogyList.length || cateId < 0) {
            cateId = 0;
        }

        //如果没有缓存数据，则需要网络请求
        HttpBase.getDefaultInstance().request(context, Config.UrlList.catelogyList[cateId], null, new Http.onHttpListener<String>() {
            @Override
            public void onComplete(String values) {
                Response<String> response = Response.getResponseStr(values);

                if (Response.RES_CODE_SUCCESS.equals(response.getCode())) {
                    L.v("请求成功");
                    //如果成功，保存起来
                    listener.onComplete(response.getData());
                } else {
                    onException(response);
                }

            }

            @Override
            public void onException(Object exceptionInfo) {
                //如果失败，获取缓存数据返回
                //listener.onComplete("");
                //如果没有缓存数据，则返回失败
                listener.onException(exceptionInfo);
            }
        });
    }

    public static ArrayList<SectionModel> parseArray(String data) {
        ArrayList<SectionModel> res = Response.parseObject(data, new TypeReference<ArrayList<SectionModel>>() {
        });
        return res;
    }
}
