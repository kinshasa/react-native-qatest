package com.android.qatest.ui.category;

import android.content.Context;

import com.android.http.Http;

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
    public void getCategoryData(final Context context, final Http.onHttpListener<ArrayList<DivisionModel>> listener) {
        categoryInteractor.fetchCategoryData(context, new Http.onHttpListener<ArrayList<DivisionModel>>() {
            @Override
            public void onComplete(ArrayList<DivisionModel> values) {
                listener.onComplete(values);
            }

            @Override
            public void onException(Object exceptionInfo) {

            }
        });
    }

    @Override
    public void getSectionDataById(final Context context, int cateId, final Http.onHttpListener<ArrayList<SectionModel>> listener) {
        categoryInteractor.fetchSectionDataById(context, cateId, new Http.onHttpListener<ArrayList<SectionModel>>() {

            @Override
            public void onComplete(ArrayList<SectionModel> values) {
                listener.onComplete(values);
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
