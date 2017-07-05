package com.android.qatest.ui.home;

import android.content.Context;

import com.android.http.Http;

import com.android.qatest.ui.home.model.AppCenterContent;
import com.android.qatest.ui.home.model.BannerContent;
import com.android.qatest.ui.home.model.Floor;
import com.android.qatest.ui.home.model.FloorObjContent;
import com.android.qatest.ui.home.model.HomePageResponse;

import java.util.ArrayList;

/**
 * Created by lshaobocsu@gmail.com on 2017.4.18.
 */

public class HomePresenterImpl implements HomePresenter {

    private HomeInteractor mInteractor;
    private HomePageResponse mHomePageResponse;
    private HomeView homeView;


    HomePresenterImpl(HomeView view) {
        homeView = view;
        mInteractor = new HomeInteractorImpl();
    }

    @Override
    public void getHomeFloorList(Context context, final Http.onHttpListener<HomePageResponse> listener) {

        mInteractor.fetchHomeFloorList(context, new Http.onHttpListener<HomePageResponse>() {
            @Override
            public void onComplete(HomePageResponse values) {
                //取到数据模型后，根据当前业务环境，对数据做一定处理后返回
                mHomePageResponse = values;
                listener.onComplete(values);
            }

            @Override
            public void onException(Object exceptionInfo) {
                listener.onException(exceptionInfo);
            }
        });
    }

    @Override
    public ArrayList<String> getBannerImageList() {
        if (mHomePageResponse == null
                || mHomePageResponse.floorLists == null
                || mHomePageResponse.floorLists.bannerContentFloor == null
                || mHomePageResponse.floorLists.bannerContentFloor.content == null
                || mHomePageResponse.floorLists.bannerContentFloor.content.size() == 0) {
            return null;
        }

        ArrayList<String> imageList = new ArrayList<>();
        ArrayList<BannerContent> content = mHomePageResponse.floorLists.bannerContentFloor.content;
        for (int i = 0; i < content.size(); i++) {
            imageList.add(content.get(i).horizontalImag);
        }

        imageList.add("http://img.ds.cn/none.png");
        imageList.add("");
        //Url不能为null，否则报异常
        //imageList.add(null);
        return imageList;
    }

    @Override
    public Floor<BannerContent> getBannerContent() {

        return null;
    }


    public ArrayList<AppCenterContent.Data> getAppContent() {
        if (mHomePageResponse == null
                || mHomePageResponse.floorLists == null
                || mHomePageResponse.floorLists.appCenterContentFloor == null
                || mHomePageResponse.floorLists.appCenterContentFloor.content == null
                || mHomePageResponse.floorLists.appCenterContentFloor.content.data != null
                || mHomePageResponse.floorLists.appCenterContentFloor.content.data.size() == 0) {
            return null;
        }

        return mHomePageResponse.floorLists.appCenterContentFloor.content.data;
    }

    @Override
    public void onBannerClick(int pos) {

    }
}
