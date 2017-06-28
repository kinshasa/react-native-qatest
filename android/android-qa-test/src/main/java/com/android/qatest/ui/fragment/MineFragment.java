package com.android.qatest.ui.fragment;

import android.view.View;

import com.android.qatest.R;
import com.android.qatest.ui.base.LazyFragment;


/**
 * Created by linhonghong on 2015/8/11.
 */
public class MineFragment extends LazyFragment {

    public static MineFragment instance() {
        MineFragment view = new MineFragment();
        return view;
    }

    @Override
    public View createLoadingView() {
        return null;
    }

    @Override
    public View setContextView() {
        View view = mInflater.inflate(R.layout.fragment_base, null);
        return view;
    }
}