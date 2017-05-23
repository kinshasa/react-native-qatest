package com.android.qatest.ui.cart;

import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import com.android.log.L;
import com.android.qatest.R;

import butterknife.BindView;
import butterknife.ButterKnife;


/**
 * Created by linhonghong on 2015/8/11.
 */
public class CartFragment extends Fragment {

    protected View view;

    @BindView(R.id.tv_value)
    TextView tv_value;

    public static CartFragment instance() {
        CartFragment view = new CartFragment();
        return view;
    }

    @Nullable
    @Override
    public View onCreateView(LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        view = inflater.inflate(R.layout.fragment_cart, null);
        ButterKnife.bind(this, view);
        initView();
        initData();
        return view;
    }

    private void initData() {

        int x = 20, y = 30;
        boolean b;
        b = x > 50 && y > 60 || x > 50 && y < -60 || x < -50 && y > 60;
        L.v();
        System.out.println("'111111111111111111111111'");
        System.out.println(b);
        tv_value.setText(String.valueOf(b));

    }

    private void initView() {
    }
}