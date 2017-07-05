package com.android.qatest.ui.home;

import android.content.Context;

import com.android.http.Http;
import com.android.qatest.ui.home.model.HomePageResponse;

/**
 * Created by lshaobocsu@gmail.com on 2017.4.17.
 */

public interface HomeInteractor {

    void fetchHomeFloorList(Context context, Http.onHttpListener<HomePageResponse> listener);
}
