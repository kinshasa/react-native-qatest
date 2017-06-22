package com.android.qatest.ui.category;

import android.content.Context;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;


import com.android.qatest.R;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * author：anumbrella
 * Date:17/2/23 下午1:24
 * 左侧的数据适配器
 */

public class DivisionAdapter extends BaseAdapter {


    private Context mContext;

    private ArrayList<DivisionModel> list;

    private Hoder hoder;
    /**
     * 是否要加载显示图片
     */
    private boolean isLoadingImage = true;

    /**
     * 默认第一个图片是选中了的
     */
    private int selectPosition = 0;


    public DivisionAdapter(Context context, ArrayList<DivisionModel> list) {
        this.mContext = context;
        this.list = list;
    }

    public DivisionAdapter(Context context, ArrayList<DivisionModel> list, boolean isLoadingImage) {
        this.mContext = context;
        this.list = list;
        this.isLoadingImage = isLoadingImage;
    }




    @Override
    public int getCount() {
        return list.size();
    }

    @Override
    public Object getItem(int position) {
        return list.get(position);
    }

    @Override
    public long getItemId(int position) {
        return position;
    }

    @Override
    public View getView(int position, View convertView, ViewGroup viewGroup) {
        if (convertView == null) {
            convertView = View.inflate(mContext,
                    R.layout.item_classify_mainlist, null);
            hoder = new Hoder(convertView);
            // 把数据存储到convertView当中去
            convertView.setTag(hoder);
        } else {
            hoder = (Hoder) convertView.getTag();
        }

        if (isLoadingImage == true) {
           /* hoder.imageView.setImageResource(Integer.parseInt(list
                    .get(position).get("img").toString()));*/
        }


        hoder.textView.setText(list.get(position).title);
        /*if (position == selectPosition) {
            hoder.layout.setBackgroundColor(0xFF999999);
        }else{
            hoder.layout.setBackgroundColor(0xFFEEEEEE);
        }*/
        return convertView;

    }

    public void setSelectItem(int position) {
        this.selectPosition = position;
    }

    public int getSelectItem() {
        return this.selectPosition;
    }


    private static class Hoder {

        private ImageView imageView;
        private TextView textView;
        private LinearLayout layout;

        public Hoder(View view) {
            imageView = (ImageView) view.findViewById(R.id.mainItem_img);
            textView = (TextView) view.findViewById(R.id.mainItem_txt);
            layout = (LinearLayout) view.findViewById(R.id.mainList_layout);

        }

    }


}
