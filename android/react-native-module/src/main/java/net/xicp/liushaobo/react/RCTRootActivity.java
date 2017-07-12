package net.xicp.liushaobo.react;

import android.content.Intent;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.provider.Settings;
import android.support.annotation.Nullable;
import android.support.v7.app.AppCompatActivity;
import android.view.KeyEvent;

import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler;

/**
 * Created by lshaobocsu@gmail.com on 2017.5.25.
 *     java.lang.RuntimeException: com.facebook.react.devsupport.JSException: Could not get BatchedBridge, make sure your bundle is packaged correctly
 *     at com.facebook.react.bridge.DefaultNativeModuleCallExceptionHandler.handleException(DefaultNativeModuleCallExceptionHandler.java:24)
 */

public abstract class RCTRootActivity extends AppCompatActivity{

    protected static final int OVERLAY_PERMISSION_REQ_CODE = 1;
    protected RCTRootManager mRCTRootManager;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        mRCTRootManager = new RCTRootManager(this,"QATest");
        setContentView(mRCTRootManager.getReactRootView());

        //打开悬浮窗口权限
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            if (!Settings.canDrawOverlays(this)) {
                Intent intent = new Intent(Settings.ACTION_MANAGE_OVERLAY_PERMISSION,
                        Uri.parse("package:" + getPackageName()));
                startActivityForResult(intent, OVERLAY_PERMISSION_REQ_CODE);
            }
        }
    }

    @Override
    protected void onPause() {
        super.onPause();
        mRCTRootManager.onPause();
    }

    @Override
    protected void onResume() {
        super.onResume();
        mRCTRootManager.onResume();
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        mRCTRootManager.onDestroy();
    }

    @Override
    public void onBackPressed() {
        mRCTRootManager.onBackPressed();
    }

    @Override
    public boolean onKeyUp(int keyCode, KeyEvent event) {
        if (keyCode == KeyEvent.KEYCODE_MENU) {
            return mRCTRootManager.onKeyUp(keyCode,event);
        }
        return super.onKeyUp(keyCode,event);

    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        if (requestCode == OVERLAY_PERMISSION_REQ_CODE) {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
                if (!Settings.canDrawOverlays(this)) {
                    // SYSTEM_ALERT_WINDOW permission not granted...
                }
            }
        }
    }
}
