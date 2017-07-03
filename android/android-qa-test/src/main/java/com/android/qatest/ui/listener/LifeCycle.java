package com.android.qatest.ui.listener;

/**
 * Created by lshaobocsu@gmail.com on 2017.7.3.
 */

@SuppressWarnings("unused")
interface LifeCycle {

    void onCreate();

    void onStart();

    void onPause();

    void onRestart();

    void onResume();

    void onStop();

    void onDestroy();
}
