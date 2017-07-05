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

import com.android.log.L;
import com.android.qatest.R;
import com.android.qatest.ui.category.CateModel;
import com.android.qatest.ui.home.model.HomePage;
import com.android.qatest.ui.widget.BannerLayout;
import com.viewpagerindicator.CirclePageIndicator;

import java.util.ArrayList;
import java.util.List;


public class HomeFragment extends Fragment implements HomeView {

    private View mView;
    private LinearLayout homeLayout;
    private Context mContext;
    private HomePresenter mPresenter;

    //Banner图
    private FrameLayout mBannerFrameLayout;
    private BannerLayout mBannerLayout;
    private ArrayList<String> mImgList;

    //金刚位
    private ArrayList<CateModel> mActionsData;
    private ActionsGridViewPagerLayout mActionsGridViewPagerLayout;

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
        homeLayout = (LinearLayout) mView.findViewById(R.id.homeLayout);

        //Banner图
        mBannerFrameLayout = (FrameLayout) mView.findViewById(R.id.bannerLayout);
        mBannerLayout = new BannerLayout(mContext) {
            @Override
            public void OnBannerLayoutClick(int pos) {
            }
        };
        mBannerFrameLayout.addView(mBannerLayout);
        mImgList = new ArrayList<>();
        mImgList.add("http://img.ds.cn/none.png");
        mImgList.add("http://img.ds.cn/none.png");
        mImgList.add("http://img.ds.cn/none.png");
        mBannerLayout.addData(mImgList);

        //金刚位
        mActionsData = CateModel.initArrayData(12);
        mActionsGridViewPagerLayout = new ActionsGridViewPagerLayout<CateModel>(mContext) {
            @Override
            public String getName(CateModel o) {
                return o.name;
            }

            @Override
            public String getImageUrl(CateModel o) {
                return o.icon;
            }

            @Override
            public String onClick(CateModel o) {
                return null;
            }
        };
        mActionsGridViewPagerLayout.initData(mActionsData);
        //添加金刚位到视图中
        homeLayout.addView(mActionsGridViewPagerLayout);


        //网络请求
        mPresenter = new HomePresenterImpl(this);
        mPresenter.fetch(mContext);

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
