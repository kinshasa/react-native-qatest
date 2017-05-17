package com.android.qatest.ui.category;

import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ListView;

import com.android.qatest.R;

import butterknife.BindView;
import butterknife.ButterKnife;


/**
 * Created by lshaobo@gmai.com on 2017/5/16.
 *
 * 商品二级分类
 */
public class CategoryFragment extends Fragment {


    @BindView(R.id.main_view)
    ListView mainlist;

    @BindView(R.id.more_view)
    ListView morelist;

    public static CategoryFragment instance() {
        CategoryFragment view = new CategoryFragment();


        return view;
    }

    @Nullable
    @Override
    public View onCreateView(LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_category_list, null);
        ButterKnife.bind(view);
        return view;
    }
}