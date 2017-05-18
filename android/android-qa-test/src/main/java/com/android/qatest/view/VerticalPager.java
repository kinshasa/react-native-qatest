package com.android.qatest.view;

import android.content.Context;
import android.support.v7.app.AppCompatActivity;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.FrameLayout;

import com.android.qatest.R;
import com.android.qatest.ui.ContentFragment;
import com.android.qatest.ui.ContentFragmentAdapter;

import me.kaelaela.verticalviewpager.VerticalViewPager;

/**
 * Created by lshaobocsu@gmail.com on 2017.4.24.
 */

public class VerticalPager extends FrameLayout {

    private View view;
    private Context context;
    private AppCompatActivity activity;

    public VerticalPager(Context context, AppCompatActivity activity) {
        super(context);
        this.context = context;
        this.activity = activity;
        initViewPager();
    }


    private void initViewPager() {
        view = LayoutInflater.from(context).inflate(R.layout.activity_vertical_view_page, null);
        VerticalViewPager viewPager = (VerticalViewPager) view.findViewById(R.id.vertical_viewpager);
        //viewPager.setPageTransformer(false, new ZoomOutTransformer());
        //viewPager.setPageTransformer(true, new StackTransformer());
        String title = "ContentFragment";
        viewPager.setAdapter(new ContentFragmentAdapter.Holder(activity.getSupportFragmentManager())
                .add(ContentFragment.newInstance(title, 1))
                .add(ContentFragment.newInstance(title, 2))
                .add(ContentFragment.newInstance(title, 3))
                .add(ContentFragment.newInstance(title, 4))
                .add(ContentFragment.newInstance(title, 5))
                .set());
        //If you setting other scroll mode, the scrolled fade is shown from either side of display.
        viewPager.setOverScrollMode(View.OVER_SCROLL_NEVER);

        addView(view);
    }
}
