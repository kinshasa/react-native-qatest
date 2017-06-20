package com.android.qatest.ui.category;

import android.content.Context;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.TextView;

import com.android.qatest.R;

import java.util.ArrayList;

/**
 * Created by lshaobocsu@gmail.com on 2017.6.20.
 */

public class CategoryItemsAdapter extends BaseAdapter{

    private ArrayList<CategoryItemModel> cates;
    private Context mContext;
    CategoryItemsAdapter(Context context,ArrayList<CategoryItemModel> models){
        mContext = context;
        if(models == null){
            models = new ArrayList<>();
        }
        cates = models;
    }

    public void setData(ArrayList<CategoryItemModel> models){
        cates.addAll(models);
    }

    @Override
    public int getCount() {
        return cates.size();
    }

    @Override
    public CategoryItemModel getItem(int position) {
        return cates.get(position);
    }

    @Override
    public long getItemId(int position) {
        return 0;
    }

    @Override
    public View getView(int position, View convertView, ViewGroup parent) {

        if(convertView == null){
            convertView = View.inflate(mContext, R.layout.item_category_image,null);
        }
        TextView textView = (TextView)convertView.findViewById(R.id.cateItemText);
        textView.setText(cates.get(position).name);

        return convertView;
    }
}
