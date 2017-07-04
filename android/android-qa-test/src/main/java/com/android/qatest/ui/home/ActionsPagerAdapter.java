package com.android.qatest.ui.home;

import android.content.Context;
import android.support.v4.view.PagerAdapter;
import android.view.View;
import android.view.ViewGroup;

import com.android.qatest.ui.widget.NestGridView;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by lshaobocsu@gmail.com on 2017.7.3.
 */

public class ActionsPagerAdapter extends PagerAdapter {

    public List<View> mListViews;
    protected Context mContext;

    ActionsPagerAdapter(Context context, List<View> views) {
        mContext = context;
        mListViews = new ArrayList<>();
        if(views == null){
            return;
        }
        mListViews.addAll(views);
    }

    public void setDatas(List<View> views){
        if(views == null){
            return;
        }
        mListViews = views;
    }


    @Override
    public int getCount() {
        return mListViews.size();
    }

    @Override
    public boolean isViewFromObject(View view, Object object) {
        return view == object;
    }

    @Override
    public void destroyItem(ViewGroup container, int position, Object object) {
        container.removeView(mListViews.get(position));//删除页卡
    }

    @Override
    public Object instantiateItem(ViewGroup container, int position) {
        container.addView(mListViews.get(position), 0);
        return mListViews.get(position);
    }
}
