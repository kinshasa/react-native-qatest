package com.android.qatest.ui.home;

import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import android.support.v4.app.Fragment;
import android.support.v4.view.ViewPager;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.RelativeLayout;

import com.android.log.L;
import com.android.qatest.R;
import com.android.qatest.ui.home.model.HomePage;
import com.facebook.drawee.generic.GenericDraweeHierarchy;
import com.rd.Orientation;
import com.rd.PageIndicatorView;
import com.rd.RtlMode;
import com.rd.animation.AnimationType;
import com.youth.banner.Banner;
import com.youth.banner.listener.OnBannerListener;

import java.util.ArrayList;
import java.util.List;


public class HomeFragment extends Fragment implements HomeView {

    private View view;
    private Banner banner;

    private HomePresenter presenter;
    private HomeAdapter adapter = new HomeAdapter();
    private ArrayList<String> imgs;
    GenericDraweeHierarchy hierarchy;

    public static HomeFragment instance() {
        HomeFragment view = new HomeFragment();
        return view;
    }

    @Nullable
    @Override
    public View onCreateView(LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        L.v();
        view = inflater.inflate(R.layout.fragment_home, null);
        initViews();
        return view;
    }

    private void initViews() {

        HomeAdapter adapter = new HomeAdapter();
        adapter.setData(createPageList());

        ViewPager pager = (ViewPager) view.findViewById(R.id.viewPager);
        pager.setAdapter(adapter);

        PageIndicatorView indicatorView = (PageIndicatorView) view.findViewById(R.id.pageindicatorview);
        indicatorView.setViewPager(pager);
        indicatorView.setOrientation(Orientation.HORIZONTAL);
        indicatorView.setAnimationType(AnimationType.WORM);
        indicatorView.setAutoVisibility(true);
        indicatorView.setRtlMode(RtlMode.Auto);

        presenter = new HomePresenterImpl(this);
        presenter.fetch(getContext());

        imgs = new ArrayList<>();
        imgs.add("http://img.ds.cn/none.png");
        imgs.add("http://img.ds.cn/none.png");
        imgs.add("http://img.ds.cn/none.png");
        banner = (Banner) view.findViewById(R.id.banner);
        //简单使用
        banner.setImages(imgs)
                .setImageLoader(new FrescoImageLoader())
                .setOnBannerListener(new OnBannerListener() {
                    @Override
                    public void OnBannerClick(int position) {
                    }
                })
                .start();
    }

    @NonNull
    private List<View> createPageList() {
        List<View> pageList = new ArrayList<>();
        pageList.add(createPageView(R.color.red));
        pageList.add(createPageView(android.R.color.holo_blue_bright));
        pageList.add(createPageView(android.R.color.darker_gray));
        pageList.add(createPageView(android.R.color.holo_green_dark));

        return pageList;
    }

    @NonNull
    private View createPageView(int color) {
        View view = new View(getContext());
        view.setBackgroundColor(getResources().getColor(color));

        return view;
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
        adapter.setData(createPageList());
    }

    @Override
    public void onResume() {
        super.onResume();
        banner.startAutoPlay();
    }

    @Override
    public void onDestroy() {
        super.onDestroy();
        banner.stopAutoPlay();
    }

}
