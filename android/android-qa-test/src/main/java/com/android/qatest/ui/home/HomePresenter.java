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

public interface HomePresenter {

    void getHomeFloorList(Context context, Http.onHttpListener<HomePageResponse> listener);

    /**
     * 获取首页Banner ImageList
     * @return
     */
    ArrayList<String> getBannerImageList();
    /**
     * 获取首页BannerContent
     * @return
     */
    Floor<BannerContent> getBannerContent();
    /**
     * 获取首页AppContent
     * @return
     */
    ArrayList<AppCenterContent.Data> getAppContent();

    /**
     * 当用户点击了
     * @param pos
     */
    void onBannerClick(int pos);
}
