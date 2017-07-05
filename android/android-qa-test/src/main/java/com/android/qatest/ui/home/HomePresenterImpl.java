package com.android.qatest.ui.home;

import android.content.Context;

import com.android.http.Http;
import com.android.log.L;

import com.android.qatest.ui.home.model.HomePage;

/**
 * Created by lshaobocsu@gmail.com on 2017.4.18.
 */

public class HomePresenterImpl implements HomePresenter {

    private HomeInteractor interactor;
    private HomeView homeView;


    HomePresenterImpl(HomeView view) {
        homeView = view;
        interactor = new HomeInteractorImpl();
    }

    @Override
    public void getHomeFloorList(Context context, final Http.onHttpListener<HomePage> listener) {

        interactor.fetchHomeFloorList(context, new Http.onHttpListener<HomePage>() {
            @Override
            public void onComplete(HomePage values) {
                //取到数据模型后，根据当前业务环境，对数据做一定处理后返回
                listener.onComplete(values);
            }

            @Override
            public void onException(Object exceptionInfo) {
                listener.onException(exceptionInfo);
            }
        });
    }
}
