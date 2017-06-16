package com.android.qatest.ui.category;

import android.content.Context;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.FrameLayout;
import android.widget.ImageView;
import android.widget.TextView;

import com.android.log.L;
import com.android.qatest.R;
import com.android.qatest.ui.base.Fragment;

import java.util.ArrayList;

/**
 * Created by lshaobocsu@gmail.com on 2017.5.17.
 */

public class ClassifyMoreAdapter extends BaseAdapter {

    private String[] listMore;
    private Context mContext;

    private int selectPosition = 0;
    private Holder holder;
    private ArrayList<CategoryItemModel> categoryItemModels;

//    private CategoryItemsLinearLayout mCategoryItemsLayout ;

    public ClassifyMoreAdapter(Context context, String[] list) {
        this.listMore = list;
        this.mContext = context;
//        mCategoryItemsLayout = new CategoryItemsLinearLayout(context);
        categoryItemModels = new ArrayList<>();
        categoryItemModels.add(new CategoryItemModel("img1","name1"));
        categoryItemModels.add(new CategoryItemModel("img2","name2"));
        categoryItemModels.add(new CategoryItemModel("img3","name3"));
    }

    private View item;

    public void setSelectItem(int position) {
        this.selectPosition = position;
    }

    public int getSelectItem() {
        return this.selectPosition;
    }

    @Override
    public int getCount() {
        return listMore.length;
    }

    @Override
    public Object getItem(int position) {
        return listMore[position];
    }

    @Override
    public long getItemId(int position) {
        return position;
    }

    @Override
    public View getView(int position, View convertView, ViewGroup parent) {

        if (convertView == null) {
            convertView = View.inflate(mContext, R.layout.item_classify_morelist, null);
            holder = new Holder(convertView);
            convertView.setTag(holder);
        } else {
            holder = (Holder) convertView.getTag();
        }
        holder.textView.setText(listMore[position]);
        holder.textView.setTextColor(0xFF666666);
        if (position == selectPosition) {
            holder.textView.setTextColor(0xFFFF8C00);
        }
//        mCategoryItemsLayout.addItemsView(categoryItemModels);
//        holder.layout.addView(mCategoryItemsLayout);
        try{
            if(item == null){
                item = View.inflate(mContext, R.layout.item_category_image, null);
                item.setTag(position);
            }else {

            }
            holder.layout.addView(item);
        }catch (Exception e){
            L.e(e.getMessage());
        }
        return convertView;
    }

    private static class Holder {
        private TextView textView;
        private ViewGroup layout;

        public Holder(View view) {
            textView = (TextView) view.findViewById(R.id.moreItem_text);
            layout = (ViewGroup) view.findViewById(R.id.category_list_layout);
        }
    }
}
