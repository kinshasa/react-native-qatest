package com.android.qatest.ui.home;

import android.content.Context;

import com.android.http.Http;
import com.android.qatest.ui.home.model.HomePage;

/**
 * Created by lshaobocsu@gmail.com on 2017.4.18.
 */

public interface HomePresenter {

    void getHomeFloorList(Context context, Http.onHttpListener<HomePage> listener);
}
