package com.android.qatest.ui.user;

import android.view.View;
import android.widget.TextView;

import com.android.qatest.R;
import com.android.qatest.ui.base.LazyFragment;


/**
 * Created by linhonghong on 2015/8/11.
 */
public class MineFragment extends LazyFragment {

    static {
        System.loadLibrary("native-lib");
    }

    public static MineFragment instance() {
        MineFragment view = new MineFragment();
        return view;
    }

    @Override
    public View createLoadingView() {
        return null;
    }

    @Override
    public View setContextView() {
        View view = mInflater.inflate(R.layout.fragment_base, null);
        ((TextView)view.findViewById(R.id.textView)).setText(stringFromJNI());
        ((TextView)view.findViewById(R.id.textView2)).setText(getSignStr());
        return view;
    }

    /**
     * A native method that is implemented by the 'native-lib' native library,
     * which is packaged with this application.
     */
    public native String stringFromJNI();

    public native String getSignStr();

}