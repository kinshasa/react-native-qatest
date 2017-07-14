package com.android.qatest.ui;

import android.os.Bundle;
import android.support.annotation.Nullable;

import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactRootView;
import com.facebook.react.common.LifecycleState;
import com.facebook.react.shell.MainReactPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.react.rnspinkit.RNSpinkitPackage;

import net.xicp.liushaobo.react.BuildConfig;
import net.xicp.liushaobo.react.RCTImagePackage;
import net.xicp.liushaobo.react.RCTViewPackage;
import net.xicp.liushaobo.react.ReactRootActivity;

import cn.reactnative.modules.update.UpdatePackage;

/**
 * Created by lshaobocsu@gmail.com on 2017.5.25.
 */

public class ReactRootViewActivity extends ReactRootActivity {

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        mReactRootView = new ReactRootView(this);
        mReactInstanceManager = getReactInstanceManager();

        Bundle bundle = new Bundle();
        bundle.putString("key1", "value1");
        mReactRootView.startReactApplication(mReactInstanceManager, "QATest", bundle);
        setContentView(mReactRootView);
    }

    protected ReactInstanceManager getReactInstanceManager() {
        ReactInstanceManager manager = ReactInstanceManager.builder()
                .setApplication(getApplication())
                //设置打包后的bundle文件名
                .setBundleAssetName("index.android.bundle")
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
        return manager;
    }
}

