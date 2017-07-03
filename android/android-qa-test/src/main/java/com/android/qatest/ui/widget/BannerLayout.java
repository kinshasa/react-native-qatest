package com.android.qatest.ui.widget;

import android.content.Context;
import android.support.annotation.Nullable;
import android.util.AttributeSet;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.FrameLayout;

import com.android.qatest.R;
import com.android.qatest.ui.home.FrescoImageLoader;
import com.blankj.utilcode.utils.ConvertUtils;
import com.youth.banner.Banner;
import com.youth.banner.BannerConfig;
import com.youth.banner.listener.OnBannerListener;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by lshaobocsu@gmail.com on 2017.7.3.
 */
@SuppressWarnings("unused")
public abstract class BannerLayout extends FrameLayout {

    private View mView;
    private Context mContext;
    private Banner mBanner;
    private int height;
    private int width;
    public List mImageList;

    public BannerLayout(Context context) {
        this(context, null);
    }

    public BannerLayout(Context context, @Nullable AttributeSet attrs) {
        this(context, attrs, 0);
    }

    public BannerLayout(Context context, @Nullable AttributeSet attrs, int defStyleAttr) {
        this(context, attrs, defStyleAttr, 0);
    }

    public BannerLayout(Context context, @Nullable AttributeSet attrs, int defStyleAttr, int defStyleRes) {
        super(context, attrs, defStyleAttr, defStyleRes);

        initViews(context);
    }

    private void initViews(Context context) {
        mContext = context;
        //暂时不能new方式创建，因为在handleTypedArray时无法初始化组件属性，导致mIndicator高宽为0，不显示了。
        //mBanner = new Banner(context);
        mBanner = (Banner) LayoutInflater.from(context).inflate(R.layout.item_banner, null);
        width = LayoutParams.MATCH_PARENT;
        height = ConvertUtils.dp2px(200);//LayoutParams.WRAP_CONTENT;
        mBanner.setLayoutParams(new LayoutParams(width, height));
        addView(mBanner);
    }

    public void addData(List<?> data) {
        if (mImageList == null) {
            mImageList = new ArrayList<>();
        }
        if (data == null) {
            return;
        }
        mImageList.addAll(data);
        mBanner.setImages(mImageList)
                .isAutoPlay(false)
                .setIndicatorGravity(BannerConfig.CENTER)
                .setImageLoader(new FrescoImageLoader())
                .setOnBannerListener(new OnBannerListener() {
                    @Override
                    public void OnBannerClick(int position) {
                        OnBannerLayoutClick(position);
                    }
                })
                .start();
    }

    public abstract void OnBannerLayoutClick(int pos);


    public void startAutoPlay() {
        if (mBanner != null) {
            mBanner.startAutoPlay();
        }
    }

    public void stopAutoPlay() {
        if (mBanner != null) {
            mBanner.stopAutoPlay();
        }
    }

}
