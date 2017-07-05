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
import com.android.qatest.ui.category.CateModel;
import com.android.qatest.ui.home.model.HomePageResponse;
import com.android.qatest.ui.widget.BannerLayout;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Objects;


public class HomeFragment extends Fragment implements HomeView {

    private Context mContext;

    private View mView;
    private LinearLayout mHomeLayout;


    //Banner图
    private BannerLayout mBannerLayout;
    private ArrayList<String> mImgList;

    //金刚位
    private ArrayList<CateModel> mActionsData;
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
        mHomeLayout = (LinearLayout) mView.findViewById(R.id.homeLayout);

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

        //添加金刚位到视图中
        mHomeLayout.addView(mActionsGridViewPagerLayout);



    }

    /**
     * 数据处理
     */
    private void initData(){

        List data = new ArrayList<>();
        data.add(1);
        data.add((float)2);
        data.add(new ArrayList<>());
        data.add(new HashMap<String,String>());

        //初始化Banner数据
        mImgList.add("http://img.ds.cn/none.png");
        mImgList.add("http://img.ds.cn/none.png");
        mImgList.add("http://img.ds.cn/none.png");
        mBannerLayout.addData(mImgList);

        //初始化Actions数据
        mActionsData = CateModel.initArrayData(12);
        mActionsGridViewPagerLayout.initData(mActionsData);

        //网络请求
        mPresenter = new HomePresenterImpl(this);
        mPresenter.getHomeFloorList(mContext, new Http.onHttpListener<HomePageResponse>() {
            @Override
            public void onComplete(HomePageResponse values) {

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
