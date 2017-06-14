package com.android.qatest.ui.category;

import android.content.Context;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.TextView;

import com.android.qatest.R;

/**
 * Created by lshaobocsu@gmail.com on 2017.5.17.
 */

public class ClassifyMoreAdapter extends BaseAdapter {

    private String[] listMore;
    private Context mContext;

    private int selectPosition = 0;
    private Hoder hoder;

    public ClassifyMoreAdapter(Context context, String[] list) {
        this.listMore = list;
        this.mContext = context;
    }

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
            hoder = new Hoder(convertView);
            convertView.setTag(hoder);
        } else {
            hoder = (Hoder) convertView.getTag();
        }
        hoder.textView.setText(listMore[position]);
        hoder.textView.setTextColor(0xFF666666);
        if (position == selectPosition) {
            hoder.textView.setTextColor(0xFFFF8C00);
        }

        return convertView;
    }

    private static class Hoder {
        private TextView textView;

        public Hoder(View view) {
            textView = (TextView) view.findViewById(R.id.moreItem_text);
        }

    }
}
