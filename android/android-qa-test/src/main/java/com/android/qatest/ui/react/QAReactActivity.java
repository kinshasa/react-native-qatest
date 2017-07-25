package com.android.qatest.ui.react;

import com.facebook.react.ReactActivity;

import javax.annotation.Nullable;

/**
 * Created by lshaobocsu@gmail.com on 2017.7.25.
 */

public class QAReactActivity extends ReactActivity {


    @Nullable
    @Override
    protected String getMainComponentName() {
        return "ReactHome";
    }
}
