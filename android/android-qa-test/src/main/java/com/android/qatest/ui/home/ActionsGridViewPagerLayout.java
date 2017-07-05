package com.android.qatest.ui.home;

import android.content.Context;
import android.util.AttributeSet;
import android.view.View;
import android.widget.FrameLayout;
import android.widget.LinearLayout;
import android.widget.RelativeLayout;

import com.android.qatest.R;
import com.android.qatest.ui.category.CateModel;
import com.android.qatest.ui.widget.NestGridView;
import com.android.qatest.ui.widget.NestViewPager;
import com.blankj.utilcode.utils.ConvertUtils;
import com.viewpagerindicator.CirclePageIndicator;
import com.zhy.adapter.abslistview.CommonAdapter;
import com.zhy.adapter.abslistview.ViewHolder;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by lshaobocsu@gmail.com on 2017.7.4.
 */

public class ActionsGridViewPagerLayout extends LinearLayout {

    private Context mContext;
    private LinearLayout mView;

    public NestViewPager mActionsPager;
    public ActionsPagerAdapter mActionsPagerAdapter;
    public CirclePageIndicator mActionPagerIndicator;
    public List<View> mActionsViewList;
    public ArrayList<CateModel> mActionsData;

    public ActionsGridViewPagerLayout(Context context) {
        this(context, null);
    }

    public ActionsGridViewPagerLayout(Context context, AttributeSet attrs) {
        super(context, attrs);

        initView(context);
    }

    private void initView(Context context) {
        mContext = context;
        mView = this;
        setOrientation(VERTICAL);

        //通过XLM文件初始化组件
        /*mView = (RelativeLayout) LayoutInflater.from(mContext).inflate(R.layout.item_actions_pager, null);
        mActionsPager = (NestViewPager)mView.findViewById(R.id.actions_pager);
        mActionPagerIndicator = (CirclePageIndicator)mView.findViewById(R.id.actions_pager_indicator);*/

        //通过new初始化组件
        mActionsPager = new NestViewPager(mContext);
        mActionsPager.setBackgroundColor(0XFF999999);
        mActionsPager.setId(R.id.actions_pager);
        mActionPagerIndicator = new CirclePageIndicator(mContext);
        mActionPagerIndicator.setBackgroundColor(0x11990000);
        mActionPagerIndicator.setPadding(ConvertUtils.dp2px(10), ConvertUtils.dp2px(10), ConvertUtils.dp2px(10), ConvertUtils.dp2px(10));

        mActionsViewList = new ArrayList<>();
        mActionsPagerAdapter = new ActionsPagerAdapter(mContext, mActionsViewList);
        mActionsPager.setAdapter(mActionsPagerAdapter);
        //绑定ViewPager到Indicator上
        mActionPagerIndicator.setViewPager(mActionsPager);

        //通过XLM文件初始化组件
        //addView(mView);

        //通过new初始化组件
        addView(mActionsPager, new LayoutParams(LayoutParams.MATCH_PARENT, LayoutParams.WRAP_CONTENT));
        addView(mActionPagerIndicator, new LayoutParams(LayoutParams.MATCH_PARENT, LayoutParams.WRAP_CONTENT));
    }

    public void initData() {
        mActionsData = CateModel.initArrayData(50);
        if (mActionsViewList == null) {
            mActionsViewList = new ArrayList<>();
        } else {
            mActionsViewList.clear();
        }
        int size = 8;
        int pageNum = (int) Math.ceil(mActionsData.size() / size);
        for (int i = 0; i < pageNum; i++) {
            NestGridView mActionsGridView = new NestGridView(mContext);
            mActionsGridView.setBackgroundColor(0XFF990AAA);
            mActionsGridView.setLayoutParams(new FrameLayout.LayoutParams(FrameLayout.LayoutParams.MATCH_PARENT, LayoutParams.WRAP_CONTENT));
            mActionsGridView.setNumColumns(4);
            mActionsGridView.setStretchMode(NestGridView.STRETCH_COLUMN_WIDTH);
            mActionsGridView.setAdapter(new CommonAdapter<CateModel>(mContext,
                    R.layout.item_image_text_vertical,
                    mActionsData.subList(i * size, (i + 1) * size < mActionsData.size() ? (i + 1) * size : mActionsData.size())) {
                @Override
                protected void convert(ViewHolder viewHolder, CateModel item, int position) {
                    viewHolder.setText(R.id.textView, item.name);
                }
            });
            mActionsViewList.add(mActionsGridView);
        }
        mActionsPagerAdapter.notifyDataSetChanged();
    }
}
