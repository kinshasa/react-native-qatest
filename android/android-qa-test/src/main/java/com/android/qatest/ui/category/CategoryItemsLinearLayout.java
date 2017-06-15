package com.android.qatest.ui.category;

import android.content.Context;
import android.support.annotation.Nullable;
import android.util.AttributeSet;
import android.view.View;
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

    public CategoryItemsLinearLayout(Context context) {
        super(context);
    }

    public CategoryItemsLinearLayout(Context context, @Nullable AttributeSet attrs) {
        super(context, attrs);
    }

    public CategoryItemsLinearLayout(Context context, @Nullable AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);
    }

    public CategoryItemsLinearLayout(Context context, AttributeSet attrs, int defStyleAttr, int defStyleRes) {
        super(context, attrs, defStyleAttr, defStyleRes);
        init();
    }

    public void init() {
        mCategoryItems = new ArrayList<>();
        mCateItemsLayout = (LinearLayout) View.inflate(getContext(), R.layout.item_category_image, null);
        holder = new CategoryItemsHolder(mCateItemsLayout);
        mCateItemsLayout.setTag(mCateItemsLayout);
    }

    public void addItemsView(ArrayList<CategoryItemModel> data) {
        mCategoryItems.addAll(data);
        for(CategoryItemModel item : mCategoryItems){
            holder = (CategoryItemsHolder)mCateItemsLayout.getTag();
            holder.textView.setText(item.name);
            addView(mCateItemsLayout);
        }
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

