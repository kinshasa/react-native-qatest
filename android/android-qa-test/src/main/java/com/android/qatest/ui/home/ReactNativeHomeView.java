package com.android.qatest.ui.home;

import android.content.Context;

import com.android.log.application.MyApplication;
import com.android.qatest.BuildConfig;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactRootView;
import com.facebook.react.common.LifecycleState;
import com.facebook.react.shell.MainReactPackage;

/**
 * Created by lshaobocsu@gmail.com on 2017.5.25.
 */

public class ReactNativeHomeView {

    private static ReactInstanceManager mReactInstanceManager;
    private static ReactRootView mReactRootView;

    ReactNativeHomeView() {

    }

    public static ReactRootView getInstants(Context context) {

        if (mReactRootView == null) {
            mReactRootView = new ReactRootView(context);
            mReactInstanceManager = ReactInstanceManager.builder()
                    .setApplication(MyApplication.getInstance())
                    .setBundleAssetName("index.android.bundle")
                    .setJSMainModuleName("index.android")
                    .addPackage(new MainReactPackage())
                    .setUseDeveloperSupport(BuildConfig.DEBUG)
                    .setInitialLifecycleState(LifecycleState.RESUMED)
                    .build();

            // 注意这里的HelloWorld必须对应“index.android.js”中的
            // “AppRegistry.registerComponent()”的第一个参数
            mReactRootView.startReactApplication(mReactInstanceManager, "QATest", null);
        }

        return mReactRootView;
    }
}
