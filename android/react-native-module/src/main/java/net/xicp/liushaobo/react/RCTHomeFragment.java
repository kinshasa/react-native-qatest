package net.xicp.liushaobo.react;

import android.app.Fragment;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

/**
 * Created by lshaobocsu@gmail.com on 2017.7.12.
 */

public class RCTHomeFragment extends Fragment {

    private RCTRootManager mRCTRootManager;

    @Override
    public View onCreateView(LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {

        mRCTRootManager = new RCTRootManager(getActivity(), "QATest");
        return mRCTRootManager.getReactRootView();
    }

    @Override
    public void onPause() {
        super.onPause();

        mRCTRootManager.onPause();
    }

    @Override
    public void onResume() {
        super.onResume();
        mRCTRootManager.onResume();
    }

    @Override
    public void onDestroy() {
        super.onDestroy();
        mRCTRootManager.onDestroy();
    }
}
