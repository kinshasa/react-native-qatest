package com.android.qatest.ui.category;

import android.content.Context;
import android.net.Uri;
import android.support.annotation.Nullable;
import android.util.AttributeSet;
import android.widget.LinearLayout;
import android.widget.TextView;

import com.facebook.drawee.view.SimpleDraweeView;

/**
 * Created by lshaobocsu@gmail.com on 2017.7.4.
 */

public class ImageTextView extends LinearLayout {

    private Context mContext;
    public String mImgUrl = "http://img.ds.cn/none.png";

    public SimpleDraweeView mImage;
    public int mImageWidth = 50;
    public int mImageHeight = 50;

    public TextView mTextView;
    public String mTextStr = "描述";
    public int mFontSize = 13;
    public int mFontColor = 0xFF000000;


    public ImageTextView(Context context) {
        this(context, null);
    }

    public ImageTextView(Context context, @Nullable AttributeSet attrs) {
        this(context, attrs, 0);
    }

    public ImageTextView(Context context, @Nullable AttributeSet attrs, int defStyleAttr) {
        this(context, attrs, defStyleAttr, 0);
    }

    public ImageTextView(Context context, AttributeSet attrs, int defStyleAttr, int defStyleRes) {
        super(context, attrs, defStyleAttr, defStyleRes);
        initView(context);
    }

    private void initView(Context context) {
        mContext = context;
        mImage = new SimpleDraweeView(mContext);
        mImage.setImageURI(Uri.parse(mImgUrl));
        mImage.setLayoutParams(new LayoutParams(mImageWidth, mImageHeight));
        mTextView = new TextView(mContext);
        mTextView.setText(mTextStr);
        mTextView.setPadding(3, 5, 3, 3);
        setOrientation(VERTICAL);
        setLayoutParams(new LayoutParams(LayoutParams.WRAP_CONTENT, LayoutParams.WRAP_CONTENT));
        addView(mImage);
        setPadding(5, 5, 5, 5);
        addView(mTextView);

    }


}
