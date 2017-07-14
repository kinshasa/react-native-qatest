package com.android.qatest.ui.home;

/**
 * Created by lshaobocsu@gmail.com on 2017.7.14.
 */

import android.os.Bundle;
import android.support.annotation.Nullable;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

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
import net.xicp.liushaobo.react.ReactRootFragment;

import cn.reactnative.modules.update.UpdatePackage;


public class ReactHomeFragment extends ReactRootFragment {


    public static ReactHomeFragment instance() {
        ReactHomeFragment view = new ReactHomeFragment();
        return view;
    }


    @Nullable
    @Override
    public View onCreateView(LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        L.v();
        mReactRootView = new ReactRootView(getActivity());
        mReactInstanceManager = ReactInstanceManager.builder()
                .setApplication(getActivity().getApplication())
                //设置打包后的bundle文件名
                .setBundleAssetName("index.android.bundle")
                //设置调试时入口文件名
                .setJSMainModuleName("index.home")
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
        bundle.putString("key1", "value1");
        mReactRootView.startReactApplication(mReactInstanceManager, "ReactHome", bundle);
        return mReactRootView;
    }

    @Override
    public void onResume() {
        super.onResume();

    }

    @Override
    public void onDestroy() {
        super.onDestroy();
    }

}
