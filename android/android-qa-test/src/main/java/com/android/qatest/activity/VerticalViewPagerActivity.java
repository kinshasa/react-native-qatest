package com.android.qatest.activity;

import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.View;

import com.android.qatest.R;

import me.kaelaela.verticalviewpager.VerticalViewPager;

public class VerticalViewPagerActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_vertical_view_page);
        setTitle("");
        initViewPager();

        Intent intent = getIntent();
        String action = intent.getAction();
        if(Intent.ACTION_VIEW.equals(action)) {
            Uri uri = intent.getData();
            if (uri != null) {
                String password = uri.getQueryParameter("password");
                String username = uri.getQueryParameter("username");
                Log.v("MainActivity age", username);
                Log.v("MainActivity name", password);
            }
        }
    }

    private void initViewPager() {
        VerticalViewPager viewPager = (VerticalViewPager) findViewById(R.id.vertical_viewpager);
        //viewPager.setPageTransformer(false, new ZoomOutTransformer());
        //viewPager.setPageTransformer(true, new StackTransformer());
        String title = "ContentFragment";
        viewPager.setAdapter(new ContentFragmentAdapter.Holder(getSupportFragmentManager())
                .add(ContentFragment.newInstance(title, 1))
                .add(ContentFragment.newInstance(title, 2))
                .add(ContentFragment.newInstance(title, 3))
                .add(ContentFragment.newInstance(title, 4))
                .add(ContentFragment.newInstance(title, 5))
                .set());
        //If you setting other scroll mode, the scrolled fade is shown from either side of display.
        viewPager.setOverScrollMode(View.OVER_SCROLL_NEVER);
    }

}
