/*
package com.android.qatest.ui.react;

*/
/**
 * Created by lshaobocsu@gmail.com on 2017.7.25.
 *//*


import android.app.Activity;
import android.os.Bundle;
import android.view.ViewParent;

import com.facebook.react.ReactNativeHost;
import com.facebook.react.common.LifecycleState;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactPackage;
import com.facebook.react.ReactRootView;

import java.lang.reflect.Field;

*/
/**
 * 缓存view管理
 *//*

public class RNCacheViewManager {

    private static ReactRootView mRootView = null;
    private static ReactInstanceManager mManager = null;
    private static ReactNativeHost mRnInfo = null;

    //初始化
    public static void init(Activity act, ReactNativeHost rnInfo) {
        init(act, rnInfo, null);
    }

    public static void init(Activity act, ReactNativeHost rnInfo, Bundle launchOptions) {
        if (mManager == null) {
            updateCache(act, rnInfo, launchOptions);
        }
    }

    public static void updateCache(Activity act, ReactNativeHost rnInfo) {
        updateCache(act, rnInfo, null);
    }

    //更新cache，适合于版本升级时候更新cache
    public static void updateCache(Activity act, ReactNativeHost rnInfo, Bundle launchOptions) {
        mRnInfo = rnInfo;
        mManager = createReactInstanceManager(act);
        mRootView = new ReactRootView(act);
        mRootView.startReactApplication(mManager, rnInfo.getMainComponentName(), launchOptions);
    }

    //设置模块名称，因为是private，只能通过反射赋值
    public static void setModuleName(String moduleName) {
        try {
            Field field = ReactRootView.class.getDeclaredField("mJSModuleName");
            field.setAccessible(true);
            field.set(getReactRootView(), moduleName);
        } catch (Throwable e) {
            throw new RuntimeException(e);
        }
    }

    //设置启动参数，因为是private，只能通过反射赋值
    public static void setLaunchOptions(Bundle launchOptions) {
        try {
            Field field = ReactRootView.class.getDeclaredField("mLaunchOptions");
            field.setAccessible(true);
            field.set(getReactRootView(), launchOptions);
        } catch (Throwable e) {
            throw new RuntimeException(e);
        }
    }

    public static ReactRootView getReactRootView() {
        if(mRootView==null){
            throw new RuntimeException("缓存view管理器尚未初始化！");
        }
        return mRootView;
    }

    public static ReactInstanceManager getReactInstanceManager() {
        if(mManager==null){
            throw new RuntimeException("缓存view管理器尚未初始化！");
        }
        return mManager;
    }

    public static ReactNativeHost getRnInfo() {
        if(mRnInfo==null){
            throw  new RuntimeException("缓存view管理器尚未初始化！");
        }
        return mRnInfo;
    }

    public static void onDestroy() {
        try {
            ViewParent parent = getReactRootView().getParent();
            if (parent != null)
                ((android.view.ViewGroup) parent).removeView(getReactRootView());
        } catch (Throwable e) {
            e.printStackTrace();
        }
    }

    public static void clear() {
        try {
            if (mManager != null) {
                mManager.destroy();
                mManager = null;
            }
            if (mRootView != null) {
                onDestroy();
                mRootView = null;
            }
            mRnInfo = null;
        } catch (Throwable e) {
            e.printStackTrace();
        }
    }

    private static ReactInstanceManager createReactInstanceManager(Activity act) {

        ReactInstanceManager.Builder builder = ReactInstanceManager.builder()
                .setApplication(act.getApplication())
                .setJSMainModuleName(getRnInfo().getJSMainModuleName())
                .setUseDeveloperSupport(getRnInfo().getUseDeveloperSupport())
                .setInitialLifecycleState(LifecycleState.BEFORE_RESUME);

        for (ReactPackage reactPackage : getRnInfo().getPackages()) {
            builder.addPackage(reactPackage);
        }

        String jsBundleFile = getRnInfo().getJSBundleFile();

        if (jsBundleFile != null) {
            builder.setJSBundleFile(jsBundleFile);
        } else {
            builder.setBundleAssetName(getRnInfo().getBundleAssetName());
        }
        return builder.build();
    }
}*/
