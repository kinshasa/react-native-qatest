package com.android.qatest.ui.category;

import android.content.Context;

import com.alibaba.fastjson.TypeReference;
import com.android.http.Http;
import com.android.http.HttpBase;
import com.android.http.HttpResponseHelper;
import com.android.log.L;
import com.android.qatest.model.Response;

import java.util.ArrayList;

import static com.android.qatest.Config.CallAPIs;

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
    public void fetchCateDataById(final Context context, int cateId, final Http.onHttpListener<ArrayList<SectionModel>> listener) {

        //判断商品类型范围，防止数据越界
        if (cateId > CallAPIs.categoryList.length || cateId < 0) {
            cateId = 0;
        }

        //如果有缓存数据，取缓存
        if(isCachedData()){
            listener.onComplete(getCacheData());
            return;
        }
        //如果没有缓存数据，则需要网络请求
        HttpBase.getDefaultInstance().request(context, CallAPIs.categoryList[cateId], null, new Http.onHttpListener<String>() {
            @Override
            public void onComplete(String values) {
                //仅解析为Response中Data为String的对象
                //Response<String> response = Response.getResponseStr(values);
                //解析为Response中Data为ArrayList的对象，使用FastJso中的TypeRef方法
                Response<ArrayList<SectionModel>> res = Response.parseObject(values, new TypeReference<Response<ArrayList<SectionModel>>>() {});

                //可以统一做错误代码处理
                //TODO 后期可以通过@linker{HttpResponseHelper}在Http中统一处理
                if(HttpResponseHelper.isEspecialCode(context,res.getCode())){
                    //如果是特殊错误信息，统一处理后不需要返回
                    return;
                }
                if (Response.RES_CODE_SUCCESS.equals(res.getCode())) {
                    L.v("请求成功");
                    //如果成功，保存起来
                    listener.onComplete(res.getData());
                } else {
                    onException(res);
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

    public boolean isCachedData(){
        return false;
    }

    public  ArrayList<SectionModel> getCacheData(){
        ArrayList<SectionModel> data = new ArrayList<>();
        return  data;
    }

    public boolean isEspecialCode(String code){
        return false;
    }
}
