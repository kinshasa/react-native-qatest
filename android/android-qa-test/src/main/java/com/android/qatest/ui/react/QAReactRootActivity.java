package com.android.qatest.ui.react;

import android.content.Intent;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.provider.Settings;
import android.support.annotation.Nullable;

import com.android.log.L;
import com.android.qatest.BuildConfig;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactRootView;
import com.facebook.react.common.LifecycleState;
import com.facebook.react.shell.MainReactPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.react.rnspinkit.RNSpinkitPackage;

import net.xicp.liushaobo.react.RCTImagePackage;
import net.xicp.liushaobo.react.RCTViewPackage;
import net.xicp.liushaobo.react.ReactRootActivity;

import cn.reactnative.modules.update.UpdatePackage;

/**
 * Created by lshaobocsu@gmail.com on 2017.5.25.
 */

public class QAReactRootActivity extends ReactRootActivity {

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        mReactRootView = new ReactRootView(this);
        mReactInstanceManager = ReactInstanceManager.builder()
                .setApplication(getApplication())
                //设置打包后的bundle文件名
                .setBundleAssetName("index.qatest.bundle")
                //设置入口文件名
                .setJSMainModuleName("index.android")
                .addPackage(new MainReactPackage())
                .addPackage(new VectorIconsPackage())
                .addPackage(new UpdatePackage())
                .addPackage(new RCTImagePackage())
                .addPackage(new RCTViewPackage())
                .addPackage(new RNSpinkitPackage())
                .setUseDeveloperSupport(BuildConfig.DEBUG)
                .setInitialLifecycleState(LifecycleState.RESUMED)
                .build();

        L.v(mReactRootView);
        Bundle bundle = new Bundle();
        bundle.putString("type", "qatest");
        mReactRootView.startReactApplication(mReactInstanceManager, "QATest", bundle);
        L.v(mReactRootView);
        setContentView(mReactRootView);
        L.v(mReactRootView);
        //手动加载js,目前是在debug实现多模块加载启动startReactApplication
        //mReactInstanceManager.getDevSupportManager().handleReloadJS();

        //String bundleURL = mDevServerHelper.getDevServerBundleURL(Assertions.assertNotNull(mJSAppBundleName));
        //mReactInstanceManager.getDevSupportManager().reloadJSFromServer();
    }

}

