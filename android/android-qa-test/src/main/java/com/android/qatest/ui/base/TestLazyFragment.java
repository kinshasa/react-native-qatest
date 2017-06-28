package com.android.qatest.ui.base;

import android.view.View;

/**
 * Created by lshaobocsu@gmail.com on 2017.6.28.
 */

public class TestLazyFragment extends LazyFragment implements ILazyLayout.OnVisibleListener {

    @Override
    public View createLoadingView() {
        return null;
    }

    @Override
    public View setContextView() {
        return null;
    }


    @Override
    public void onVisible() {

    }

    @Override
    public void onInvisible() {

    }
}
