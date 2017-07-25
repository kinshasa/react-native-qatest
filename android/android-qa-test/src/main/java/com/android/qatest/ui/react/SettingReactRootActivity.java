package com.android.qatest.ui.react;

import android.os.Bundle;
import android.support.annotation.Nullable;

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
 * Created by lshaobocsu@gmail.com on 2017.7.14.
 */

public class SettingReactRootActivity extends ReactRootActivity {

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        mReactRootView = new ReactRootView(this);
        mReactInstanceManager = ReactInstanceManager.builder()
                .setApplication(getApplication())
                //设置打包后的bundle文件名
                .setBundleAssetName("react-setting.android.bundle")
                //设置调试时入口文件名
                .setJSMainModuleName("index.setting")
                .addPackage(new MainReactPackage())
                .addPackage(new VectorIconsPackage())
                .addPackage(new UpdatePackage())
                .addPackage(new RCTImagePackage())
                .addPackage(new RCTViewPackage())
                .addPackage(new RNSpinkitPackage())
                .setUseDeveloperSupport(BuildConfig.DEBUG)
                .setInitialLifecycleState(LifecycleState.RESUMED)
                .build();

        Bundle bundle = new Bundle();
        bundle.putString("type", "setting");
        try{
            mReactRootView.startReactApplication(mReactInstanceManager, "ReactSetting", bundle);
        }catch (Exception e){}
        setContentView(mReactRootView);
    }

}
