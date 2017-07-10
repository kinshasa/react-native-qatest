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
    public void fetchCategoryData(final Context context, final Http.onHttpListener<ArrayList<DivisionModel>> listener) {

        //如果有缓存数据，取缓存
        if (isCachedCategoryData()) {
            listener.onComplete(cacheCategoryData());
            return;
        }
        HttpBase.getDefaultInstance().request(context, CallAPIs.CategoryList, null, new Http.onHttpListener<String>() {
            @Override
            public void onComplete(String values) {
                //解析为Response中Data为ArrayList的对象，使用FastJso中的TypeRef方法
                DivisionList res = Response.parseObject(values, new TypeReference<DivisionList>() {
                });
                if (HttpResponseHelper.isEspecialCode(context, res.code)) {
                    //如果是特殊错误信息，统一处理后不需要返回
                    return;
                }
                if (DivisionList.RES_CODE_SUCCESS.equals(res.code)) {
                    L.v("请求成功");
                    //如果成功，保存起来
                    listener.onComplete(res.catelogyList);
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

    @Override
    public void fetchSectionDataById(final Context context, int cateId, final Http.onHttpListener<ArrayList<SectionModel>> listener) {

        //判断商品类型范围，防止数据越界
        if (cateId >= CallAPIs.categoryArray.length || cateId < 0) {
            cateId = 0;
        }

        //如果有缓存数据，取缓存
        if (isCachedSectionData(cateId)) {
            listener.onComplete(cacheSectionDataById());
            return;
        }
        //如果没有缓存数据，则需要网络请求
        HttpBase.getDefaultInstance().request(context, CallAPIs.categoryArray[cateId], null, new Http.onHttpListener<String>() {
            @Override
            public void onComplete(String values) {
                //仅解析为Response中Data为String的对象
                //Response<String> response = Response.getResponseStr(values);
                //解析为Response中Data为ArrayList的对象，使用FastJso中的TypeRef方法
                Response<ArrayList<SectionModel>> res = Response.parseObject(values, new TypeReference<Response<ArrayList<SectionModel>>>() {
                });

                //可以统一做错误代码处理
                //TODO 后期可以通过@linker{HttpResponseHelper}在Http中统一处理
                if (HttpResponseHelper.isEspecialCode(context, res.getCode())) {
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

    public boolean isCachedCategoryData() {
        return false;
    }

    public ArrayList<DivisionModel> cacheCategoryData() {
        ArrayList<DivisionModel> data = DivisionModel.initArrayData(10);
        return data;
    }

    public boolean isCachedSectionData(int id) {
        return false;
    }

    public ArrayList<SectionModel> cacheSectionDataById() {
        ArrayList<SectionModel> data = new ArrayList<>();
        return data;
    }

    public boolean isEspecialCode(String code) {
        return false;
    }
}
