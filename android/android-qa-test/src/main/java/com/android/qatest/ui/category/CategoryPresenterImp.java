package com.android.qatest.ui.category;

import android.content.Context;

import com.android.http.Http;
import com.android.log.L;
import com.android.qatest.model.Response;

import java.util.ArrayList;

/**
 * Created by lshaobocsu@gmail.com on 2017.5.17.
 */

public class CategoryPresenterImp implements CategoryPresenter {

    private CategoryView categoryView;
    private CategoryInteractor categoryInteractor;

    CategoryPresenterImp(CategoryView v) {
        categoryView = v;
        categoryInteractor = new CategoryInteractorImp();

    }


    @Override
    public void getCategoryData(Context context, int cateId, CategoryInteractor.onCategoryRequestListener listener) {
        categoryInteractor.onRequest(context, listener);
    }

    @Override
    public void getSectionDataById(Context context, int cateId, final Http.onHttpListener<ArrayList<SectionModel>> listener) {
        categoryInteractor.fetchCateDataById(context, cateId, new Http.onHttpListener<String>() {
            @Override
            public void onComplete(String values) {
                L.v();
                ArrayList<SectionModel> res = CategoryInteractorImp.parseArray(values);
                listener.onComplete(res);
                categoryView.updateSectionList();
            }

            @Override
            public void onException(Object exceptionInfo) {

            }
        });
    }


    @Override
    public void onDestroy() {
        categoryView = null;
    }
}
