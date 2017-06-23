package com.android.qatest.ui.category;

import android.content.Context;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.GridView;
import android.widget.LinearLayout;
import android.widget.LinearLayout.LayoutParams;
import android.widget.TextView;

import com.android.qatest.R;
import com.android.qatest.ui.widget.NestGridView;

import java.util.ArrayList;

/**
 * Created by lshaobocsu@gmail.com on 2017.5.17.
 */

public class SectionAdapter extends BaseAdapter {

    private Context mContext;

    private int selectPosition = 0;
    private Holder holder;
    private ArrayList<SectionModel> sectionModels;

    public SectionAdapter(Context context, ArrayList<SectionModel> data) {
        this.mContext = context;
        sectionModels = data;
    }

    public void setSelectItem(int position) {
        this.selectPosition = position;
    }

    public int getSelectItem() {
        return this.selectPosition;
    }

    @Override
    public int getCount() {
        return sectionModels.size();
    }

    @Override
    public Object getItem(int position) {
        return sectionModels.get(position);
    }

    @Override
    public long getItemId(int position) {
        return position;
    }

    @Override
    public View getView(final int position, View convertView, ViewGroup parent) {

        if (convertView == null) {
            convertView = View.inflate(mContext, R.layout.item_category_section, null);
            holder = new Holder();
            holder.textView = (TextView) convertView.findViewById(R.id.moreItem_text);
            holder.layout = (LinearLayout) convertView.findViewById(R.id.category_list_layout);

            //holder.mCategoryItemsLayout = new CategoryItemsLinearLayout(mContext);
            //holder.mCategoryItemsLayout.setVisibility(View.GONE);

            holder.gridView = (NestGridView) convertView.findViewById(R.id.category_grid_view);
            //holder.gridView.setVisibility(View.GONE);


            holder.imageTextItemsLayout = new ImageTextItemsLayout<CateModel>(mContext) {
                @Override
                public String getTextName(CateModel data) {
                    return data.name;
                }

                @Override
                public String getImageStr(CateModel data) {
                    return data.icon;
                }
            };


            TextView textView = new TextView(mContext);
            textView.setText("京东淘宝的布局拷贝");
            textView.setTextSize(14);
            textView.setVisibility(View.GONE);

            holder.layout.addView(textView);
            //holder.layout.addView(holder.mCategoryItemsLayout, new LayoutParams(LayoutParams.MATCH_PARENT, LayoutParams.MATCH_PARENT));
            holder.layout.addView(holder.imageTextItemsLayout, new LayoutParams(LayoutParams.MATCH_PARENT, LayoutParams.MATCH_PARENT));

            convertView.setTag(holder);

            //holder.gridView.setAdapter(new CategoryItemsAdapter(mContext, categoryItemModels));
            /****嵌套girdView****/
            /*holder.gridView.setAdapter(new ImageTextItemsAdapter<CateModel>(mContext, sectionModels.get(position).catelogyList) {

                @Override
                String getName(CateModel data) {
                    return data.name;
                }

                @Override
                String getImage(CateModel data) {
                    return data.icon;
                }
            });*/
            /****布局拷贝****/
            //holder.mCategoryItemsLayout.addItemsView(categoryItemModels);

            //自定义view嵌套GridView
            //holder.imageTextItemsLayout.setData(sectionModels.get(position).catelogyList);

        } else {
            holder = (Holder) convertView.getTag();
        }
        holder.imageTextItemsLayout.setData(sectionModels.get(position).catelogyList);

        holder.textView.setText(sectionModels.get(position).name);
        holder.textView.setTextColor(0xFF666666);
        if (position == selectPosition) {
            holder.textView.setTextColor(0xFFFF8C00);
        }
        return convertView;
    }

    private static class Holder {
        public TextView textView;
        //父组件
        public LinearLayout layout;
        //嵌套girdView
        public GridView gridView;

        //布局拷贝
        public CategoryItemsLinearLayout mCategoryItemsLayout;
        //自定义view嵌套GridView
        public ImageTextItemsLayout<CateModel> imageTextItemsLayout;

        public Holder() {

        }
    }
}
