package com.android.qatest.ui.widget;

import android.content.Context;
import android.util.AttributeSet;
import android.widget.GridView;

/**
 * Created by lshaobocsu@gmail.com on 2017.6.21.
 */

public class NestGridView extends GridView {
    public NestGridView(Context context) {
        super(context);
    }

    public NestGridView(Context context, AttributeSet attrs) {
        super(context, attrs);
    }

    public NestGridView(Context context, AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);
    }

    public NestGridView(Context context, AttributeSet attrs, int defStyleAttr, int defStyleRes) {
        super(context, attrs, defStyleAttr, defStyleRes);
    }

    /**
     * 一个MeasureSpec由大小和模式组成。
     * @param widthMeasureSpec
     * @param heightMeasureSpec
     */
    @Override
    protected void onMeasure(int widthMeasureSpec, int heightMeasureSpec) {
        //super.onMeasure(widthMeasureSpec, heightMeasureSpec);
        /**
         * UNSPECIFIED(未指定)，父元素不对子元素施加任何束缚，子元素可以得到任意想要的大小；
         * EXACTLY(完全)，父元素决定自元素的确切大小，子元素将被限定在给定的边界里而忽略它本身大小；
         * AT_MOST(至多)，子元素至多达到指定大小的值。
         *
         * 这里我们的MeasureSpec.AT_MOST代表高度自适应，也就是GridView能多大就有多大。而”size” 就是提供一个可测量的最大值。我们取Integer的最大值并使用位运算右移两位，是因为：

         MeasureSpec是一个32位的int值，其中高2位为测量的模式，低30位为测量的大小。在计算中使用位运算的原因是为了提高并优化效率。

         */
        int expandSpec = MeasureSpec.makeMeasureSpec(Integer.MAX_VALUE >> 2, MeasureSpec.AT_MOST);
        super.onMeasure(widthMeasureSpec, expandSpec);
    }
}
