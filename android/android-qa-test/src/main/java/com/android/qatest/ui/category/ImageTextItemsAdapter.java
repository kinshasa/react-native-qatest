package com.android.qatest.ui.category;

import android.content.Context;
import android.net.Uri;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.TextView;

import com.android.qatest.R;
import com.facebook.drawee.view.SimpleDraweeView;

import java.util.ArrayList;

/**
 * Created by lshaobocsu@gmail.com on 2017.6.23.
 */
public abstract class ImageTextItemsAdapter<T> extends BaseAdapter {

    private ArrayList<T> arrayList;
    private Context mContext;
    private Holder holder;

    ImageTextItemsAdapter(Context context, ArrayList<T> models) {
        mContext = context;
        if (models == null) {
            models = new ArrayList<>();
        }
        arrayList = models;
    }

    @Override
    public int getCount() {
        return arrayList.size();
    }

    @Override
    public T getItem(int position) {
        return arrayList.get(position);
    }

    abstract String getName(T data);

    abstract String getImage(T data);

    @Override
    public long getItemId(int position) {
        return 0;
    }

    @Override
    public View getView(final int position, View convertView, ViewGroup parent) {


        if (convertView == null) {
            holder = new Holder();
            convertView = View.inflate(mContext, R.layout.item_category_image, null);
            holder.textView = (TextView) convertView.findViewById(R.id.text);
            holder.image = (SimpleDraweeView) convertView.findViewById(R.id.image);
            convertView.setTag(holder);
        } else {
            holder = (Holder) convertView.getTag();
        }
        String text = getName(arrayList.get(position));
        holder.textView.setText(text);
        Uri uri = Uri.parse(getImage(arrayList.get(position)));
        holder.image.setImageURI(uri);
        return convertView;
    }

    private static class Holder {
        TextView textView;
        SimpleDraweeView image;
    }
}

