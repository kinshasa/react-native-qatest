package net.xicp.liushaobo.react;

import android.app.Activity;
import android.support.annotation.NonNull;
import android.text.TextUtils;
import android.view.KeyEvent;
import android.widget.FrameLayout;

import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactRootView;
import com.facebook.react.common.LifecycleState;
import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler;
import com.facebook.react.shell.MainReactPackage;

/**
 * Created by lshaobocsu@gmail.com on 2017.7.12.
 */

public class RCTRootManager extends FrameLayout implements DefaultHardwareBackBtnHandler {

    public ReactInstanceManager mReactInstanceManager;
    public ReactRootView mReactRootView;

    private Activity mActivity;

    public RCTRootManager(@NonNull Activity activity, String moduleName) {
        super(activity, null);
        initView(activity, moduleName);
    }

    public void initView(Activity activity, String moduleName) {
        //初始化
        initRootView(activity, moduleName);
    }

    public void initRootView(Activity activity, String moduleName) {
        if (TextUtils.isEmpty(moduleName)) {
            moduleName = "QATest";
        }
        mActivity = activity;
        if (mReactRootView == null) {
            mReactRootView = new ReactRootView(activity);
            mReactInstanceManager = ReactInstanceManager.builder()
                    .setApplication(activity.getApplication())
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


    protected void onPause() {
        if (getReactInstanceManager() != null) {
            getReactInstanceManager().onHostPause(mActivity);
        }
    }
    protected void onResume() {
        if (getReactInstanceManager() != null) {
            getReactInstanceManager().onHostResume(mActivity, this);
        }
    }

    protected void onDestroy() {
        if (getReactInstanceManager() != null) {
            getReactInstanceManager().onHostDestroy(mActivity);
        }
    }

    public void onBackPressed() {
        if (getReactInstanceManager() != null) {
            getReactInstanceManager().onBackPressed();
        } else {
            mActivity.onBackPressed();
        }
    }

    @Override
    public boolean onKeyUp(int keyCode, KeyEvent event) {
        if (keyCode == KeyEvent.KEYCODE_MENU && getReactInstanceManager() != null) {
            getReactInstanceManager().showDevOptionsDialog();
            return true;
        }
        return super.onKeyUp(keyCode, event);
    }

    @Override
    public void invokeDefaultOnBackPressed() {
        mActivity.onBackPressed();
    }
}
