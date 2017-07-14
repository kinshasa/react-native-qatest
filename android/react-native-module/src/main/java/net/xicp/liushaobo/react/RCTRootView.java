package net.xicp.liushaobo.react;

import android.app.Activity;
import android.content.Intent;
import android.os.Build;
import android.provider.Settings;
import android.view.KeyEvent;

import com.facebook.react.ReactInstanceManager;
import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler;

/**
 * Created by lshaobocsu@gmail.com on 2017.7.14.
 */

public class RCTRootView implements DefaultHardwareBackBtnHandler {

    protected static final int OVERLAY_PERMISSION_REQ_CODE = 1;
    protected com.facebook.react.ReactRootView mReactRootView;
    protected ReactInstanceManager mReactInstanceManager;
    protected Activity mActivity;


    RCTRootView(Activity activity) {
        mActivity = activity;
    }

    public Activity getActivity() {
        return mActivity;
    }

    @Override
    public void invokeDefaultOnBackPressed() {
        if (mActivity != null)
            mActivity.onBackPressed();
    }

    protected void onPause() {
        if (mReactInstanceManager != null) {
            mReactInstanceManager.onHostPause(getActivity());
        }
    }

    protected void onResume() {
        if (mReactInstanceManager != null) {
            mReactInstanceManager.onHostResume(getActivity(), this);
        }
    }

    protected void onDestroy() {
        if (mReactInstanceManager != null) {
            mReactInstanceManager.onHostDestroy(getActivity());
        }
    }

    public void onBackPressed() {
        if (mReactInstanceManager != null) {
            mReactInstanceManager.onBackPressed();
        } else {
            getActivity().onBackPressed();
        }
    }

    public boolean onKeyUp(int keyCode, KeyEvent event) {
        if (keyCode == KeyEvent.KEYCODE_MENU && mReactInstanceManager != null) {
            mReactInstanceManager.showDevOptionsDialog();
            return true;
        }
        return getActivity().onKeyUp(keyCode, event);
    }

    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        if (requestCode == OVERLAY_PERMISSION_REQ_CODE) {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
                if (!Settings.canDrawOverlays(getActivity())) {
                    // SYSTEM_ALERT_WINDOW permission not granted...
                }
            }
        }
    }
}
