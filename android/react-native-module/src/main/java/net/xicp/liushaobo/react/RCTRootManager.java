package net.xicp.liushaobo.react;

import android.app.Activity;
import android.support.annotation.NonNull;
import android.text.TextUtils;
import android.widget.FrameLayout;

import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactRootView;
import com.facebook.react.common.LifecycleState;
import com.facebook.react.shell.MainReactPackage;

/**
 * Created by lshaobocsu@gmail.com on 2017.7.12.
 */

public class RCTRootManager extends FrameLayout {

    private ReactInstanceManager mReactInstanceManager;
    private ReactRootView mReactRootView;

    public RCTRootManager(@NonNull Activity activity, String moduleName) {
        super(activity, null);
        initView(activity, moduleName);
    }

    public void initView(Activity activity, String moduleName) {
        //初始化
        initRootView(activity, moduleName);
    }

    public void initRootView(Activity context, String moduleName) {
        if (TextUtils.isEmpty(moduleName)) {
            moduleName = "QATest";
        }

        if (mReactRootView == null) {
            mReactRootView = new ReactRootView(context);
            mReactInstanceManager = ReactInstanceManager.builder()
                    .setApplication(context.getApplication())
                    .setBundleAssetName("index.android.bundle")
                    .setJSMainModuleName("index.android")
                    .addPackage(new MainReactPackage())
                    .setUseDeveloperSupport(BuildConfig.DEBUG)
                    .setInitialLifecycleState(LifecycleState.RESUMED)
                    .build();

            // 注意这里的HelloWorld必须对应“index.android.js”中的
            // “AppRegistry.registerComponent()”的第一个参数
            mReactRootView.startReactApplication(mReactInstanceManager, moduleName, null);
        }
        addView(mReactRootView, new LayoutParams(-1, -2));
    }

    public ReactRootView getReactRootView(){
        return mReactRootView;
    }

    public ReactInstanceManager getReactInstanceManager(){
        return mReactInstanceManager;
    }

}
