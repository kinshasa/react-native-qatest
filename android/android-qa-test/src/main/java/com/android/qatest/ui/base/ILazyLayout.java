package com.android.qatest.ui.base;

import android.view.View;

/**
 * Created by lshaobocsu@gmail.com on 2017.6.28.
 * 懒加载布局接口 用于Activity，Fragment，LinearLayout等
 */

public interface ILazyLayout {

    public enum State {
        NONE,
        VISIBLE,
        INVISIBLE
    }

    interface OnVisibleListener {

        void onVisible();

        void onInvisible();
    }


    void setState(State state);

    State getState();

    /**
     * 1. 设置初始化时显示的LoadingView
     *
     * @return view null则表示使用系统默认Loading
     */
    View createLoadingView();

    /**
     * 2. 设置可见后加载的View
     *
     * @return view
     */
    View setContextView();


}
