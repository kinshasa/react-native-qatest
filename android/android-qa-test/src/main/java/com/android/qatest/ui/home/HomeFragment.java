package com.android.qatest.ui.home;

import android.content.Context;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v4.app.Fragment;
import android.support.v4.view.ViewPager;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;
import android.widget.LinearLayout;
import android.widget.TextView;

import com.android.log.L;
import com.android.qatest.R;
import com.android.qatest.ui.home.model.HomePage;
import com.android.qatest.ui.widget.BannerLayout;
import com.viewpagerindicator.CirclePageIndicator;

import org.w3c.dom.Text;

import java.util.ArrayList;
import java.util.List;


public class HomeFragment extends Fragment implements HomeView {

    private View mView;
    private Context mContext;
    private HomePresenter mPresenter;

    //Banner图
    private FrameLayout mFrameLayout;
    private BannerLayout mBannerLayout;
    private ArrayList<String> mImgList;

    //金刚位
    private ViewPager mViewPager;
    private GridViewPageAdapter mGridViewPageAdapter;
    private List<View> viewList;
    private CirclePageIndicator mIndicator;


    public static HomeFragment instance() {
        HomeFragment view = new HomeFragment();
        return view;
    }

    @Nullable
    @Override
    public View onCreateView(LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        L.v();
        mView = inflater.inflate(R.layout.fragment_home, null);
        initViews();
        return mView;
    }

    private void initViews() {

        mContext = getContext();

        //Banner图
        mFrameLayout = (FrameLayout) mView.findViewById(R.id.bannerLayout);
        mBannerLayout = new BannerLayout(mContext) {
            @Override
            public void OnBannerLayoutClick(int pos) {
            }
        };
        mFrameLayout.addView(mBannerLayout);
        mImgList = new ArrayList<>();
        mImgList.add("http://img.ds.cn/none.png");
        mImgList.add("http://img.ds.cn/none.png");
        mImgList.add("http://img.ds.cn/none.png");
        mBannerLayout.addData(mImgList);

        //金刚位
        mViewPager = (ViewPager) mView.findViewById(R.id.viewPager);
        viewList = new ArrayList<>();
        for(int i=0;i<5;i++){
            FrameLayout view = new FrameLayout(mContext);
            TextView textView = new TextView(mContext);
            textView.setText("测试"+i);
            view.addView(textView);
            viewList.add(view);
        }
        mGridViewPageAdapter = new GridViewPageAdapter(mContext,viewList);
        mViewPager.setAdapter(mGridViewPageAdapter);
        mPresenter = new HomePresenterImpl(this);
        mPresenter.fetch(mContext);
        mIndicator = (CirclePageIndicator)mView.findViewById(R.id.indicator);
        mIndicator.setViewPager(mViewPager);

    }

    @Override
    public void showLoading() {

    }

    @Override
    public void HideLoading() {

    }

    @Override
    public void onPullDownToRefresh() {

    }

    @Override
    public void onPullUpToRefresh() {

    }

    @Override
    public void getHomeData(HomePage homePage) {
        List<View> pageList = new ArrayList<>();
        /*for(int i=0;i<homePage.floorList.bannerContentFloor.content.size();i++){
            String img = "https://m.360buyimg.com/mobilecms/s720x351_jfs/t4936/90/1261251670/94339/a0a0d32b/58eee702N5669681d.jpg!q70.jpg.webp";
            homePage.floorList.bannerContentFloor.content.get(i);
            pageList.add(createPageView(img));

        }*/
    }

    @Override
    public void onResume() {
        super.onResume();
        mBannerLayout.startAutoPlay();

    }

    @Override
    public void onDestroy() {
        super.onDestroy();
        mBannerLayout.stopAutoPlay();
    }

}
