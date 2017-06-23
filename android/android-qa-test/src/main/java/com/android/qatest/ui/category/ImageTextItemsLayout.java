package com.android.qatest.ui.category;

import android.content.Context;
import android.util.AttributeSet;
import android.view.View;
import android.widget.AbsListView;
import android.widget.AbsListView.OnScrollListener;
import android.widget.LinearLayout;
import android.widget.TextView;

import com.android.log.L;
import com.android.qatest.ui.widget.NestGridView;

import java.util.ArrayList;

/**
 * Created by lshaobocsu@gmail.com on 2017.6.21.
 */

public abstract class ImageTextItemsLayout<T> extends LinearLayout {

    private Context mContext;
    private ArrayList<T> arrayData;
    private NestGridView gridView;
    private ImageTextItemsAdapter adapter;


    public ImageTextItemsLayout(Context context) {
        this(context, null);
    }

    public ImageTextItemsLayout(Context context, AttributeSet attrs) {
        this(context, attrs, 0);
    }

    public ImageTextItemsLayout(Context context, AttributeSet attrs, int defStyleAttr) {
        this(context, attrs, defStyleAttr, 0);
    }

    public ImageTextItemsLayout(Context context, AttributeSet attrs, int defStyleAttr, int defStyleRes) {
        super(context, attrs, defStyleAttr, defStyleRes);
        init(context);
    }

    public void init(Context context) {
        mContext = context;

        TextView textView = new TextView(mContext);
        textView.setText("自定义view嵌套GridView");
        textView.setTextSize(14);
        textView.setVisibility(View.GONE);
        addView(textView);

        gridView = new NestGridView(context);
        gridView.setBackgroundColor(0XFFFFFFFF);
        gridView.setLayoutParams(new LayoutParams(LayoutParams.MATCH_PARENT, LayoutParams.WRAP_CONTENT));
        gridView.setNumColumns(3);
        gridView.setOnScrollListener(new OnScrollListener() {
            @Override
            public void onScrollStateChanged(AbsListView view, int scrollState) {
                L.v("gridView");
            }

            @Override
            public void onScroll(AbsListView view, int firstVisibleItem, int visibleItemCount, int totalItemCount) {

            }
        });
        gridView.setStretchMode(NestGridView.STRETCH_COLUMN_WIDTH);
        arrayData = new ArrayList<>();
        adapter = new ImageTextItemsAdapter<T>(context, arrayData) {
            @Override
            String getName(T data) {
                return getTextName(data);
            }

            @Override
            String getImage(T data) {
                return getImageStr(data);
            }
        };

        gridView.setAdapter(adapter);

        addView(gridView);
    }

    public abstract String getTextName(T data);

    public abstract String getImageStr(T data);

    public void setScrollState(boolean isSCrolling){
        adapter.isScrolling = isSCrolling;
        L.v(adapter.isScrolling);
    }

    public void setData(ArrayList<T> data) {
        //使用addAll是不希望更改sectionData的内存地址，不然会解绑adapter数据。
        arrayData.clear();
        arrayData.addAll(data);
        adapter.notifyDataSetChanged();

    }

    public int addData(ArrayList<T> data) {
        arrayData.addAll(data);
        adapter.notifyDataSetChanged();
        return arrayData.size();
    }

    public void clearData() {
        arrayData.clear();
        adapter.notifyDataSetChanged();
    }

    public void initData() {
        if (arrayData == null) {
            arrayData = new ArrayList<>();
        }
    }

    public boolean isEmpty(ArrayList<T> datas) {
        return datas == null;
    }

}
