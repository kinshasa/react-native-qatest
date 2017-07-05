package com.android.qatest.ui.home;

import android.content.Context;
import android.util.AttributeSet;
import android.view.Gravity;
import android.view.View;
import android.widget.FrameLayout;
import android.widget.LinearLayout;
import android.widget.TextView;

import com.android.log.L;
import com.android.qatest.R;
import com.android.qatest.ui.widget.NestGridView;
import com.android.qatest.ui.widget.NestViewPager;
import com.blankj.utilcode.utils.ConvertUtils;
import com.facebook.drawee.view.SimpleDraweeView;
import com.viewpagerindicator.CirclePageIndicator;
import com.zhy.adapter.abslistview.CommonAdapter;
import com.zhy.adapter.abslistview.ViewHolder;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by lshaobocsu@gmail.com on 2017.7.4.
 */

public abstract class ActionsGridViewPagerLayout<T> extends LinearLayout {

    private Context mContext;
    private LinearLayout mView;

    public int mActionPageNum = 10;

    public NestViewPager mActionsPager;
    public ActionsPagerAdapter mActionsPagerAdapter;
    public CirclePageIndicator mActionPagerIndicator;
    public List<View> mActionsViewList;
    public List<T> mActionsData;

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
        mActionsPager.setId(R.id.actions_pager);
        mActionsPager.setBackgroundColor(0XFFEEEEEE);
        mActionPagerIndicator = new CirclePageIndicator(mContext);
        mActionPagerIndicator.setBackgroundColor(0XFFEEEEEE);
        mActionPagerIndicator.setPageColor(0xFF999999);
        mActionPagerIndicator.setFillColor(0xFF000000);
        mActionPagerIndicator.setPadding(ConvertUtils.dp2px(10), ConvertUtils.dp2px(10), ConvertUtils.dp2px(10), ConvertUtils.dp2px(10));

        mActionsViewList = new ArrayList<>();
        mActionsData = new ArrayList<>();

        //通过XLM文件初始化组件
        //addView(mView);

        //通过new初始化组件
        addView(mActionsPager, new LayoutParams(LayoutParams.MATCH_PARENT, LayoutParams.WRAP_CONTENT));
        addView(mActionPagerIndicator, new LayoutParams(LayoutParams.MATCH_PARENT, LayoutParams.WRAP_CONTENT));
    }

    public void initData(ArrayList<T> data) {
        //初始化数据
        mActionsViewList.clear();
        mActionsData.clear();
        mActionsData.addAll(data);
        double pageNum = mActionsData.size() / (double) mActionPageNum;
        for (int i = 0; i < pageNum; i++) {
            NestGridView mActionsGridView = new NestGridView(mContext);
            mActionsGridView.setLayoutParams(new FrameLayout.LayoutParams(FrameLayout.LayoutParams.MATCH_PARENT, LayoutParams.WRAP_CONTENT));
            mActionsGridView.setNumColumns(mActionPageNum/2);
            mActionsGridView.setStretchMode(NestGridView.STRETCH_COLUMN_WIDTH);
            mActionsGridView.setGravity(Gravity.CENTER_VERTICAL);
            mActionsGridView.setForegroundGravity(Gravity.CENTER_VERTICAL);
            int start = i * mActionPageNum;
            int end = (i + 1) * mActionPageNum;
            if (end > mActionsData.size()) {
                end = mActionsData.size();
            }
            mActionsGridView.setAdapter(new CommonAdapter<T>(mContext,
                    R.layout.item_image_text_vertical,
                    mActionsData.subList(start, end)) {
                @Override
                protected void convert(ViewHolder viewHolder, T item, int position) {
                    viewHolder.setText(R.id.textView, getName(item));
                    SimpleDraweeView simpleDraweeView = viewHolder.getView(R.id.imageView);
                    //SimpleDraweeView simpleDraweeView = (SimpleDraweeView)viewHolder.getConvertView().findViewById(R.id.imageView);
                    simpleDraweeView.setImageURI(getImageUrl(item));
                }
            });
            mActionsViewList.add(mActionsGridView);
        }
        //拿到数据后再初始化适配器，可以解决无法notifyDataChanged的更新问题
        //初始化适配器并绑定到ViewPager
        mActionsPagerAdapter = new ActionsPagerAdapter(mContext, mActionsViewList);
        mActionsPager.setAdapter(mActionsPagerAdapter);
        //绑定ViewPager到Indicator上
        mActionPagerIndicator.setViewPager(mActionsPager);
        //如果没有App数据，则隐藏小圆点
        if(mActionsViewList.size() == 0){
            mActionPagerIndicator.setVisibility(View.GONE);
        }else{
            mActionPagerIndicator.setVisibility(View.VISIBLE);
        }
    }

    public abstract String getName(T o);

    public abstract String getImageUrl(T o);

    public abstract String onClick(T o);

}
