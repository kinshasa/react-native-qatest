package com.android.qatest.ui.category;

import android.content.Context;
import android.graphics.Color;
import android.util.AttributeSet;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.LinearLayout;
import android.widget.TextView;

import com.android.qatest.R;
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
        setBackgroundColor(Color.RED);
        setOrientation(LinearLayout.VERTICAL);

        TextView textView = new TextView(mContext);
        textView.setText("自定义view嵌套GridView");
        textView.setTextSize(14);
        setPadding(2,2,2,2);
        addView(textView);

        gridView = new NestGridView(context);
        gridView.setBackgroundColor(Color.GREEN);
        gridView.setLayoutParams(new LayoutParams(LayoutParams.MATCH_PARENT, LayoutParams.WRAP_CONTENT));
        gridView.setColumnWidth(80);
        gridView.setNumColumns(NestGridView.AUTO_FIT);
        gridView.setStretchMode(NestGridView.STRETCH_COLUMN_WIDTH);
        arrayData = new ArrayList<>();
        /*adapter = new ImageTextItemsAdapter<T>(context, arrayData) {
            @Override
            String getName(T data) {
                return getCateName(data);
            }
        };
        gridView.setAdapter(adapter);*/

        addView(gridView);
    }

    public abstract String getCateName(T data);

    public void setData(ArrayList<T> datas) {
        arrayData.clear();
        arrayData.addAll(datas);
        adapter = new ImageTextItemsAdapter<T>(mContext, arrayData) {
            @Override
            String getName(T data) {
                return getCateName(data);
            }
        };
        gridView.setAdapter(adapter);
        adapter.notifyDataSetChanged();

    }

    public int addData(ArrayList<T> datas) {
        arrayData.addAll(datas);
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

    public abstract class ImageTextItemsAdapter<T> extends BaseAdapter {

        private ArrayList<T> arrayList;
        private Context mContext;

        ImageTextItemsAdapter(Context context, ArrayList<T> models) {
            mContext = context;
            if (models == null) {
                models = new ArrayList<>();
            }
            arrayList = models;
        }

        @Override
        public int getCount() {
            return arrayList.size();
        }

        @Override
        public T getItem(int position) {
            return arrayList.get(position);
        }

        abstract String getName(T data);

        @Override
        public long getItemId(int position) {
            return 0;
        }

        @Override
        public View getView(int position, View convertView, ViewGroup parent) {

            if (convertView == null) {
                convertView = View.inflate(mContext, R.layout.item_category_image, null);
            }
            TextView textView = (TextView) convertView.findViewById(R.id.cateItemText);
            String text = getName(arrayList.get(position));
            textView.setText(text);

            return convertView;
        }

    }
}
