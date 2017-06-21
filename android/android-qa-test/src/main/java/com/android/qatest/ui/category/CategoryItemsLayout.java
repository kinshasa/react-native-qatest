package com.android.qatest.ui.category;

import android.content.Context;
import android.util.AttributeSet;
import android.widget.GridView;
import android.widget.ListAdapter;

import java.util.ArrayList;

/**
 * Created by lshaobocsu@gmail.com on 2017.6.21.
 */

public class CategoryItemsLayout<T> extends GridView {

    private Context mContext;

    private ArrayList<T> datas;

    public CategoryItemsLayout(Context context) {
        this(context,null);
    }

    public CategoryItemsLayout(Context context, AttributeSet attrs) {
        super(context, attrs);
    }

    public CategoryItemsLayout(Context context, AttributeSet attrs, int defStyleAttr) {
        this(context, attrs, defStyleAttr,0);
    }

    public CategoryItemsLayout(Context context, AttributeSet attrs, int defStyleAttr, int defStyleRes) {
        super(context, attrs, defStyleAttr, defStyleRes);
        init(context);
    }

    @Override
    public ListAdapter getAdapter() {
        return super.getAdapter();
    }

    public void init(Context context){
        mContext = context;


    }
}
