package com.android.qatest.ui.home;

import com.android.qatest.ui.home.model.HomePageResponse;

/**
 * Created by lshaobocsu@gmail.com on 2017.4.17.
 */

public interface HomeView {

    void showLoading();

    void HideLoading();

    void onPullDownToRefresh();

    void onPullUpToRefresh();

    void getHomeData(HomePageResponse homePage);

}
