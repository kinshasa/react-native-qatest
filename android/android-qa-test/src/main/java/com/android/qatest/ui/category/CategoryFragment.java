package com.android.qatest.ui.category;

import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.AdapterView;
import android.widget.ListView;
import android.widget.Toast;

import com.android.http.Http;
import com.android.log.L;
import com.android.qatest.R;

import java.util.ArrayList;

import butterknife.BindView;
import butterknife.ButterKnife;


/**
 * Created by lshaobo@gmai.com on 2017/5/16.
 * <p>
 * 商品二级分类
 */
public class CategoryFragment extends Fragment implements CategoryView {

    private View view;
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
        divisionListView.setSelection(0);
        // 建立左侧数据适配
        divisionListView.setAdapter(divisionAdapter);

        // 建立右侧数据适配
        sectionAdapter = new SectionAdapter(getContext(), sectionData);
        sectionListView.setAdapter(sectionAdapter);

        // 设置listView当中的每个单项点击的事件变化逻辑处理
        divisionListView.setOnItemClickListener(new AdapterView.OnItemClickListener() {

            // 主目录的点击事件发生后，就要为侧目进行数据的交互
            @Override
            public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
                L.v();
                // 设置选中的选的id
                divisionAdapter.setSelectItem(position);
                // 更新左侧选中样式
                divisionAdapter.notifyDataSetChanged();

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
    }

    private void updateSectionAdapter(final int pos) {
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



        presenter.getCategoryData(getContext(),0,new CategoryInteractor.onCategoryRequestListener() {
            @Override
            public void onFail() {

            }

            @Override
            public void onSuccess(ArrayList<DivisionModel> list) {
                L.v(list);
                divisionData.clear();
                divisionData.addAll(list);
                divisionAdapter.notifyDataSetChanged();

                updateSectionAdapter(0);
                //divisionListView.performItemClick(divisionListView.getAdapter().getView(0, null, null), 0, divisionListView.getItemIdAtPosition(0));
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
}