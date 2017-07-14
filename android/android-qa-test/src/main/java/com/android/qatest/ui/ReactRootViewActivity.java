package com.android.qatest.ui;

import android.os.Bundle;
import android.support.annotation.Nullable;

import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactRootView;
import com.facebook.react.common.LifecycleState;
import com.facebook.react.shell.MainReactPackage;

import net.xicp.liushaobo.react.BuildConfig;
import net.xicp.liushaobo.react.RCTRootActivity;

/**
 * Created by lshaobocsu@gmail.com on 2017.5.25.
 */

public class ReactRootViewActivity extends RCTRootActivity {

    @Override
    public void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        if (mReactRootView == null) {
            mReactRootView = new ReactRootView(this);
            mReactInstanceManager = ReactInstanceManager.builder()
                    .setApplication(getApplication())
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
    }

}
