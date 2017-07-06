package com.android.qatest.ui.home;

import android.content.Context;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.LinearLayout;

import com.android.http.Http;
import com.android.log.L;
import com.android.qatest.R;
import com.android.qatest.ui.home.model.AppCenterContent;
import com.android.qatest.ui.home.model.Floor;
import com.android.qatest.ui.home.model.HomePageResponse;
import com.android.qatest.ui.widget.BannerLayout;

import java.util.ArrayList;


public class HomeFragment extends Fragment implements HomeView {

    private Context mContext;

    private View mView;
    private LinearLayout mHomeLayout;
    private HomePageResponse mHomePageResponse;

    //Banner图
    private BannerLayout mBannerLayout;
    private ArrayList<String> mImgList;

    //金刚位
    private Floor<AppCenterContent> mAppCenterContentFloor;
    private ActionsGridViewPagerLayout mActionsGridViewPagerLayout;

    //咨询头条

    //京东秒杀

    //发现好货

    //爱生活 品质时尚 特色推荐 逛商场 东家小店

    private HomePresenter mPresenter;

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
        initData();
        return mView;
    }

    /**
     * 视图处理
     */
    private void initViews() {

        mContext = getContext();
        mHomeLayout = (LinearLayout) mView.findViewById(R.id.home_layout);

        //Banner图
        mImgList = new ArrayList<>();
        mBannerLayout = new BannerLayout(mContext) {
            @Override
            public void OnBannerLayoutClick(int pos) {

            }
        };
        //添加Banner到视图中
        mHomeLayout.addView(mBannerLayout);

        //金刚位
        mActionsGridViewPagerLayout = new ActionsGridViewPagerLayout<AppCenterContent.Data>(mContext) {

            @Override
            public String getName(AppCenterContent.Data o) {
                return o.name;
            }

            @Override
            public String getImageUrl(AppCenterContent.Data o) {
                return o.icon;
            }

            @Override
            public String onClick(AppCenterContent.Data o) {
                return null;
            }
        };

        //添加金刚位到视图中
        mHomeLayout.addView(mActionsGridViewPagerLayout);

    }

    /**
     * 数据处理
     */
    private void initData() {

        //初始化Actions数据

        //网络请求
        mPresenter = new HomePresenterImpl(this);
        mPresenter.getHomeFloorList(mContext, new Http.onHttpListener<HomePageResponse>() {
            @Override
            public void onComplete(HomePageResponse values) {
                mHomePageResponse = values;

                //初始化Banner数据
                mBannerLayout.addData(mPresenter.getBannerImageList());
                //初始化AppCenter数据
                ArrayList<AppCenterContent.Data> dataList = mPresenter.getAppContent();
                if (dataList != null) {
                    mActionsGridViewPagerLayout.initData(dataList);
                }
            }

            @Override
            public void onException(Object exceptionInfo) {

            }
        });
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
    public void getHomeData(HomePageResponse homePage) {
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
