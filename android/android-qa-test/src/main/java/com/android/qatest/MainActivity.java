package com.android.qatest;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.widget.Toast;

import com.android.qatest.activity.LoginActivity;
import com.facebook.react.ReactActivity;
import com.tencent.bugly.Bugly;

public class MainActivity extends ReactActivity {

    private Context context = this;

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "QATest";
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        Intent intent = new Intent();
        intent.setClass(this, LoginActivity.class);
        context.startActivity(intent);

        //bugly自动升级初始化
        //Bugly.init(getApplicationContext(), "f130c8d4d9", false);

        Toast.makeText(this,"onCreate",Toast.LENGTH_LONG).show();
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();

        Toast.makeText(getApplicationContext(),"onDestroy",Toast.LENGTH_LONG).show();
    }
}
