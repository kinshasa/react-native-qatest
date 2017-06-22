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

    private ArrayList<CateModel> mCategoryItems;
    private LinearLayout mCateItemsLayout;
    private CategoryItemsHolder holder;
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
        setPadding(2,2,2,2);
        setOrientation(LinearLayout.HORIZONTAL);

    }

    public void addItemsView(ArrayList<CateModel> data) {

        if(data == null){
            return;
        }

        mCategoryItems.addAll(data);
        //必须remove，不然会内存泄漏
        removeAllViews();

        for(CateModel item : mCategoryItems){
            /*if(mCateItemsLayout == null){
                mCateItemsLayout = (LinearLayout) View.inflate(getContext(), R.layout.item_category_image, null);
                holder = new CategoryItemsHolder(mCateItemsLayout);
                mCateItemsLayout.setTag(holder);
            }else{
                holder = (CategoryItemsHolder)mCateItemsLayout.getTag();
            }

            holder.textView.setText(item.name);*/
            mCateItemsLayout = (LinearLayout) View.inflate(getContext(), R.layout.item_category_image, null);
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

