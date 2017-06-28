package com.android.qatest.ui.fragment;

import android.view.View;

import com.android.qatest.R;
import com.android.qatest.ui.base.LazyFragment;


/**
 * Created by linhonghong on 2015/8/11.
 */
public class NewsFragment extends LazyFragment {

    public static NewsFragment instance() {
        NewsFragment view = new NewsFragment();
        return view;
    }

    @Override
    public View createLoadingView() {
        View view = mInflater.inflate(R.layout.fragment_base, null);
        return view;
    }

    @Override
    public View setContextView() {
        return null;
    }
}