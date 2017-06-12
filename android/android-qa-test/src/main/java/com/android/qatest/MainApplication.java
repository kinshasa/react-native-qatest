package com.android.qatest;

import android.app.Application;
import android.content.Context;

import com.android.qatest.rct.RCTImagePackage;
import com.android.qatest.rct.RCTViewPackage;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.oblador.vectoricons.VectorIconsPackage;
import com.pay.module.PayReactPackage;
import com.react.rnspinkit.RNSpinkitPackage;
import com.tencent.bugly.Bugly;
import com.tencent.bugly.beta.Beta;

import java.util.Arrays;
import java.util.List;

import cn.reactnative.modules.update.UpdateContext;
import cn.reactnative.modules.update.UpdatePackage;

public class MainApplication extends Application implements ReactApplication {

    private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
        @Override
        protected boolean getUseDeveloperSupport() {
            return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
            return Arrays.<ReactPackage>asList(
                    new MainReactPackage(),
                    new VectorIconsPackage(),
                    new UpdatePackage(),//react-native-pushy
                    new RCTImagePackage(),
                    new RCTViewPackage(),
                    new RNSpinkitPackage(),
                    new PayReactPackage()
                    );
        }

        @Override
        protected String getJSBundleFile() {
            return UpdateContext.getBundleUrl(MainApplication.this);
        }
    };

    @Override
    public ReactNativeHost getReactNativeHost() {
        return mReactNativeHost;
    }

    @Override
    public void onCreate() {
        super.onCreate();
        SoLoader.init(this, /* native exopackage */ false);

        // 这里实现SDK初始化，appId替换成你的在Bugly平台申请的appId
        // 调试时，将第三个参数改为true
        Bugly.init(this, "f130c8d4d9", false);
    }

    @Override
    protected void attachBaseContext(Context base) {
        super.attachBaseContext(base);
        // you must install multiDex whatever tinker is installed!
//        MultiDex.install(base);


        // 安装tinker
        Beta.installTinker();
    }
}
