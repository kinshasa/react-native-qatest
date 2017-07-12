package net.xicp.liushaobo.react;

import android.app.Fragment;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler;

/**
 * Created by lshaobocsu@gmail.com on 2017.7.12.
 */

public class RCTHomeFragment extends Fragment implements DefaultHardwareBackBtnHandler {

    private RCTRootManager mRCTRootManager;

    @Override
    public View onCreateView(LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {

        mRCTRootManager = new RCTRootManager(getActivity(), "QATest");

        return mRCTRootManager.getReactRootView();
    }

    @Override
    public void onPause() {
        super.onPause();

        if (mRCTRootManager.getReactInstanceManager() != null) {
            mRCTRootManager.getReactInstanceManager().onHostPause(getActivity());
        }
    }

    @Override
    public void onResume() {
        super.onResume();

        if (mRCTRootManager.getReactInstanceManager() != null) {
            mRCTRootManager.getReactInstanceManager().onHostResume(getActivity(), this);
        }
    }

    @Override
    public void onDestroy() {
        super.onDestroy();

        if (mRCTRootManager.getReactInstanceManager() != null) {
            mRCTRootManager.getReactInstanceManager().onHostDestroy(getActivity());
        }
    }

    @Override
    public void invokeDefaultOnBackPressed() {
        getActivity().onBackPressed();
    }
}
