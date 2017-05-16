package com.android.qatest.ui.home;

import android.content.Context;

import com.android.qatest.ui.home.model.HomePage;

/**
 * Created by lshaobocsu@gmail.com on 2017.4.17.
 */

public interface HomeInteractor {

    interface onFetchListener {

        void onSuccess(HomePage homePage);

        void onFail(Object exceptionInfo);
    }

    void request(Context context, onFetchListener listener);
}
