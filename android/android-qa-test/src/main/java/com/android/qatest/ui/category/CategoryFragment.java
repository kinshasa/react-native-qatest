package com.android.qatest.ui.category;

import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.AbsListView;
import android.widget.AbsListView.OnScrollListener;
import android.widget.AdapterView;
import android.widget.ListView;
import android.widget.Toast;

import com.android.http.Http;
import com.android.log.L;
import com.android.qatest.R;
import com.android.qatest.ui.base.ILazyLayout;
import com.android.qatest.ui.base.LazyFragment;

import java.util.ArrayList;

import butterknife.BindView;
import butterknife.ButterKnife;


/**
 * Created by lshaobo@gmai.com on 2017/5/16.
 * <p>
 * 商品二级分类
 */
public class CategoryFragment extends LazyFragment implements CategoryView,ILazyLayout.OnVisibleListener {

    private View view;
    private int divisionPos = -1;
    private ArrayList<DivisionModel> divisionData;
    private ArrayList<SectionModel> sectionData;
    private SectionAdapter sectionAdapter;
    private DivisionAdapter divisionAdapter;
    private CategoryPresenter presenter;

    @BindView(R.id.divisionListView)
    ListView divisionListView;

    @BindView(R.id.sectionListView)
    ListView sectionListView;

    public static CategoryFragment instance() {
        CategoryFragment view = new CategoryFragment();

        return view;
    }

    @Override
    public View createLoadingView() {
        return null;
    }

    @Override
    public View setContextView() {
        view = mInflater.inflate(R.layout.fragment_category_list, null);
        ButterKnife.bind(this, view);
        initData();
        initView();
        return view;
    }

    private void initView() {
        L.v();
        // 建立左侧数据适配
        divisionListView.setAdapter(divisionAdapter);
        // 默认选中第一个选项
        //divisionListView.setSelection(0);

        // 建立右侧数据适配
        //sectionAdapter = new SectionAdapter(getContext(), sectionData);
        sectionListView.setAdapter(sectionAdapter);

        // 设置listView当中的每个单项点击的事件变化逻辑处理
        divisionListView.setOnItemClickListener(new AdapterView.OnItemClickListener() {

            @Override
            public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
                L.v();
                updateSectionAdapter(position);

            }

        });
        /**
         * android:descendantFocusability="blocksDescendants"
         * beforeDescendants：viewgroup会优先其子类控件而获取到焦点
         * afterDescendants：viewgroup只有当其子类控件不需要获取焦点时才获取焦点
         * blocksDescendants：viewgroup会覆盖子类控件而直接获得焦点
         */
        sectionListView.setOnItemClickListener(new AdapterView.OnItemClickListener() {

            @Override
            public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
                Toast.makeText(getContext(), position + "", Toast.LENGTH_LONG).show();
            }
        });

        sectionListView.setOnScrollListener(new OnScrollListener() {

            @Override
            public void onScrollStateChanged(AbsListView view, int scrollState) {
                //0离开并停止，1触摸并滚动，2离开并滚动
                sectionAdapter.isScrolling = scrollState != 0;
                //L.v("setScrollState:"+sectionAdapter.isScrolling);
                switch (scrollState) {
                    case AbsListView.OnScrollListener.SCROLL_STATE_FLING:
                        //syncImageLoader.lock();
                        break;
                    case AbsListView.OnScrollListener.SCROLL_STATE_IDLE:
                        //loadImage();
                        break;
                    case AbsListView.OnScrollListener.SCROLL_STATE_TOUCH_SCROLL:
                        //syncImageLoader.lock();
                        break;

                    default:
                        break;
                }
            }

            @Override
            public void onScroll(AbsListView view, int firstVisibleItem, int visibleItemCount, int totalItemCount) {

            }
        });
    }

    private void updateSectionAdapter(final int pos) {
        if(divisionPos == pos){
            return;
        }
        divisionPos = pos;

        // 更新右侧数据,使用addAll是不希望更改sectionData的内存地址，不然会解绑sectionAdapter数据。
        //获取数据
        presenter.getSectionDataById(getContext(), pos, new Http.onHttpListener<ArrayList<SectionModel>>() {
            @Override
            public void onComplete(ArrayList<SectionModel> values) {
                sectionData.clear();
                sectionData.addAll(values);
                sectionAdapter.notifyDataSetChanged();
            }

            @Override
            public void onException(Object exceptionInfo) {
                //如果更新失败，重置下标
                divisionPos = -1;
            }
        });

    }


    private void initData() {
        L.v();
        divisionData = new ArrayList<>();
        divisionAdapter = new DivisionAdapter(getContext(), divisionData);
        sectionData = new ArrayList<>();
        sectionAdapter = new SectionAdapter(getContext(), sectionData);

        //初始化presenter
        presenter = new CategoryPresenterImp(this);


        presenter.getCategoryData(getContext(), new Http.onHttpListener<ArrayList<DivisionModel>>() {
            @Override
            public void onComplete(ArrayList<DivisionModel> values) {
                values.add(0,new DivisionModel("常用分类"));

                divisionData.clear();
                divisionData.addAll(values);
                divisionAdapter.notifyDataSetChanged();
                //默认选中第一个
                divisionListView.requestFocusFromTouch();//获取焦点
                divisionListView.setSelection(0);//默认选中第一个选项

                updateSectionAdapter(0);
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
    public void hideLoading() {

    }

    @Override
    public void updateSectionList() {

    }

    @Override
    public void onDestroy() {
        super.onDestroy();
    }

    @Override
    public void onVisible() {

    }

    @Override
    public void onInvisible() {
        removeContextView();
    }
}