package com.android.qatest.ui;

import android.os.Bundle;
import android.support.annotation.Nullable;

import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactRootView;
import com.facebook.react.common.LifecycleState;
import com.facebook.react.shell.MainReactPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.react.rnspinkit.RNSpinkitPackage;

import net.xicp.liushaobo.react.RCTRootActivity;

import cn.reactnative.modules.update.UpdatePackage;

/**
 * Created by lshaobocsu@gmail.com on 2017.5.25.
 */

public class ReactRootViewActivity extends RCTRootActivity {

    @Override
    public void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        mReactRootView = new ReactRootView(this);
        mReactInstanceManager = ReactInstanceManager.builder()
                .setApplication(getApplication())//如果在lib module中可能获取不到。
                .setBundleAssetName("index.android.bundle")
                .setJSMainModuleName("index.android")
                .addPackage(new MainReactPackage())
                .addPackage(new VectorIconsPackage())
                .addPackage(new UpdatePackage())
                .addPackage(new net.xicp.liushaobo.react.RCTImagePackage())
                .addPackage(new net.xicp.liushaobo.react.RCTViewPackage())
                .addPackage(new RNSpinkitPackage())
                .setUseDeveloperSupport(net.xicp.liushaobo.react.BuildConfig.DEBUG)
                .setInitialLifecycleState(LifecycleState.RESUMED)
                .build();

        // 注意这里的HelloWorld必须对应“index.android.js”中的
        // “AppRegistry.registerComponent()”的第一个参数
        Bundle bundle = new Bundle();
        bundle.putString("key1", "value1");
        mReactRootView.startReactApplication(mReactInstanceManager, "QATest", bundle);

        setContentView(mReactRootView);
    }
}
