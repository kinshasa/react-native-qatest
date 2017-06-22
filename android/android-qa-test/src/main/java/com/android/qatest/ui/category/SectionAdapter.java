package com.android.qatest.ui.category;

import android.content.Context;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.GridView;
import android.widget.LinearLayout;
import android.widget.LinearLayout.LayoutParams;
import android.widget.TextView;

import com.android.log.L;
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
            L.v(position);

            convertView = View.inflate(mContext, R.layout.item_classify_morelist, null);
            holder = new Holder(convertView, mContext);
            convertView.setTag(holder);

            //嵌套girdView
            //holder.gridView.setAdapter(new CategoryItemsAdapter(mContext, categoryItemModels));

            //布局拷贝
            //holder.mCategoryItemsLayout.addItemsView(categoryItemModels);

            //自定义view嵌套GridView
            //holder.imageTextItemsLayout.setData(categoryItemModels);
        } else {
            holder = (Holder) convertView.getTag();
        }
        L.v(position+";"+sectionModels.get(position).cateModels.size());
        holder.imageTextItemsLayout.setData(sectionModels.get(position).cateModels);

        /*holder.mCategoryItemsLayout.post(new Runnable() {
            @Override
            public void run() {
                holder.imageTextItemsLayout.setData(sectionModels.get(position).cateModels);
            }
        });*/
        holder.textView.setText(sectionModels.get(position).title);
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

        public Holder(View view, Context context) {
            textView = (TextView) view.findViewById(R.id.moreItem_text);
            layout = (LinearLayout) view.findViewById(R.id.category_list_layout);

            mCategoryItemsLayout = new CategoryItemsLinearLayout(context);

            gridView = (NestGridView) view.findViewById(R.id.category_grid_view);
            imageTextItemsLayout = new ImageTextItemsLayout<CateModel>(context) {
                @Override
                public String getCateName(CateModel data) {
                    return data.name;
                }
            };
            TextView textView = new TextView(context);
            textView.setText("京东淘宝的布局拷贝");
            textView.setTextSize(14);
            layout.addView(textView);
            layout.addView(mCategoryItemsLayout, new LayoutParams(LayoutParams.MATCH_PARENT, LayoutParams.MATCH_PARENT));

            layout.addView(imageTextItemsLayout, new LayoutParams(LayoutParams.MATCH_PARENT, LayoutParams.MATCH_PARENT));


        }
    }
}
