package com.android.qatest.ui.fragment;

import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import com.android.qatest.R;


/**
 * Created by linhonghong on 2015/8/11.
 */
public class CategoryFragment extends Fragment {

    public static CategoryFragment instance() {
        CategoryFragment view = new CategoryFragment();
        return view;
    }

    @Nullable
    @Override
    public View onCreateView(LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_base, null);
        return view;
    }
}