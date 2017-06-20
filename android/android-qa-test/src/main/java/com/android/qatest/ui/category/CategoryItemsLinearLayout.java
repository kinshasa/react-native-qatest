package com.android.qatest.ui.category;

import android.content.Context;
import android.support.annotation.Nullable;
import android.util.AttributeSet;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;

import com.android.qatest.R;

import java.util.ArrayList;

/**
 * Created by lshaobocsu@gmail.com on 2017.6.15.
 */

public class CategoryItemsLinearLayout extends LinearLayout {

    private ArrayList<CategoryItemModel> mCategoryItems;
    private LinearLayout mCateItemsLayout;
    private CategoryItemsHolder holder;
    private LinearLayout view;
    private Context mContext;

    public CategoryItemsLinearLayout(Context context) {
        this(context,null);
    }

    public CategoryItemsLinearLayout(Context context, @Nullable AttributeSet attrs) {
        this(context, attrs,0);
    }

    public CategoryItemsLinearLayout(Context context, @Nullable AttributeSet attrs, int defStyleAttr) {
        this(context, attrs, defStyleAttr,0);
    }

    public CategoryItemsLinearLayout(Context context, AttributeSet attrs, int defStyleAttr, int defStyleRes) {
        super(context, attrs, defStyleAttr, defStyleRes);
        init(context);
    }

    public void init(Context context) {
        mContext = context;
        mCategoryItems = new ArrayList<>();
        view = new LinearLayout(context);
    }

    public void addItemsView(ArrayList<CategoryItemModel> data) {

        if(data == null){
            return;
        }
        mCategoryItems.addAll(data);
        for(CategoryItemModel item : mCategoryItems){
            mCateItemsLayout = (LinearLayout) View.inflate(getContext(), R.layout.item_category_image, null);
            ((TextView)mCateItemsLayout.findViewById(R.id.cateItemText)).setText(item.name);
            view.addView(mCateItemsLayout);
        }
        addView(view);
    }


    public static class CategoryItemsHolder{
        public ImageView imageView;
        public TextView textView;

        CategoryItemsHolder(View view){
            imageView = (ImageView)view.findViewById(R.id.cateItemImage);
            textView = (TextView)view.findViewById(R.id.cateItemText);
        }
    }
}

