package com.android.qatest.ui.category;

import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.AdapterView;
import android.widget.ListView;

import com.android.log.L;
import com.android.qatest.Config;
import com.android.qatest.R;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import butterknife.BindView;
import butterknife.ButterKnife;


/**
 * Created by lshaobo@gmai.com on 2017/5/16.
 * <p>
 * 商品二级分类
 */
public class CategoryFragment extends Fragment implements CategoryView {

    private View view;
    private List<Map<String, Object>> mCategoryList;
    private ClassifyMoreAdapter classifyMoreAdapter;
    private ClassifyMainAdapter classifyMainAdapter;

    private CategoryPresenter presenter;

    private int mainSelectPostion = 0;


    @BindView(R.id.mainListView)
    ListView mainListView;

    @BindView(R.id.moreListView)
    ListView moreListView;

    public static CategoryFragment instance() {
        CategoryFragment view = new CategoryFragment();

        return view;
    }

    @Nullable
    @Override
    public View onCreateView(LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        view = inflater.inflate(R.layout.fragment_category_list, null);
        ButterKnife.bind(this, view);
        initData();
        initView();
        return view;
    }

    private void initView() {
        L.v();
        // 默认选中第一个选项
        mainListView.setSelection(0);
        // 建立数据适配
        mainListView.setAdapter(classifyMainAdapter);

        // 设置listView当中的每个单项点击的事件变化逻辑处理
        mainListView.setOnItemClickListener(new AdapterView.OnItemClickListener() {

            // 主目录的点击事件发生后，就要为侧目进行数据的交互
            @Override
            public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
                L.v();
                mainSelectPostion = position;
                // 主目录一位数组的大小和侧目录二维数组的行的数目是一致的
                // 点击传入二维数组的一行的数据
                inintAdapter(Config.MORELISTVIEWTXT[position]);
                // 设置选中的选的id
                classifyMainAdapter.setSelectItem(position);
                // 更新数据的变更
                classifyMainAdapter.notifyDataSetChanged();

            }

        });
    }

    /**
     * 为侧目录(详细目录)进行数据的匹配处理
     *
     * @param array
     */
    private void inintAdapter(String[] array) {
        L.v();
        classifyMoreAdapter = new ClassifyMoreAdapter(getContext(), array);
        moreListView.setAdapter(classifyMoreAdapter);
        classifyMoreAdapter.notifyDataSetChanged();
    }

    private void initData() {
        L.v();
        mCategoryList = new ArrayList<Map<String, Object>>();
        classifyMainAdapter = new ClassifyMainAdapter(getContext(), mCategoryList);
        presenter = new CategoryPresenterImp(this);
        presenter.getCategoryData(new CategoryInteractor.onCategoryRequestListener() {
            @Override
            public void onFail() {

            }

            @Override
            public void onSuccess(List<Map<String, Object>> list) {
                L.v(list);
                mCategoryList.addAll(list);
                classifyMainAdapter.notifyDataSetChanged();
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
    public void setRightListView() {

    }
}