package com.android.qatest.ui.category;

/**
 * Created by lshaobocsu@gmail.com on 2017.5.17.
 */

public class CategoryPresenterImp implements CategoryPresenter{

    private CategoryView view;
    private CategoryInteractor categoryPresenter;

    CategoryPresenterImp(CategoryView v){
        view = v;
        categoryPresenter= new CategoryInteractorImp();

    }


    @Override
    public void getCategoryData(CategoryInteractor.onCategoryRequestListener listener) {
        categoryPresenter.onRequest(listener);
    }

    @Override
    public void onDestory() {

    }
}
