package com.android.qatest.activity;

import android.content.Context;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v7.app.AppCompatActivity;

import com.android.qatest.view.VerticalPager;

/**
 * Created by lshaobocsu@gmail.com on 2017.4.25.
 */

public class VerticalPagerActivity extends AppCompatActivity {

    private VerticalPager verticalPager;
    private Context context;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        context = this;
        verticalPager = new VerticalPager(context,this);

        setContentView(verticalPager);
    }
}
