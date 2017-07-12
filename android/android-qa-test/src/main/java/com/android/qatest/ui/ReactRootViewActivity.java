package com.android.qatest.ui;

import com.android.qatest.BuildConfig;
import com.android.qatest.rct.RCTImagePackage;
import com.android.qatest.rct.RCTViewPackage;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.common.LifecycleState;
import com.facebook.react.shell.MainReactPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.react.rnspinkit.RNSpinkitPackage;

import net.xicp.liushaobo.react.ReactRootActivity;

import cn.reactnative.modules.update.UpdatePackage;

/**
 * Created by lshaobocsu@gmail.com on 2017.5.25.
 */

public class ReactRootViewActivity extends ReactRootActivity {
    @Override
    protected ReactInstanceManager getReactInstanceManager() {
        ReactInstanceManager manager = ReactInstanceManager.builder()
                .setApplication(getApplication())
                .setBundleAssetName("index.android.bundle")
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
