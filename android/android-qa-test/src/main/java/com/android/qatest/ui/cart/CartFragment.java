package com.android.qatest.ui.cart;

import android.view.View;
import android.widget.TextView;

import com.android.log.L;
import com.android.qatest.R;
import com.android.qatest.ui.base.LazyFragment;

import butterknife.BindView;
import butterknife.ButterKnife;


/**
 * Created by linhonghong on 2015/8/11.
 */
public class CartFragment extends LazyFragment {

    protected View view;

    @BindView(R.id.tv_value)
    TextView tv_value;

    public static CartFragment instance() {
        CartFragment view = new CartFragment();
        return view;
    }


    @Override
    public View createLoadingView() {
        return null;
    }

    @Override
    public View setContextView() {
        view = mInflater.inflate(R.layout.fragment_cart, null);
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