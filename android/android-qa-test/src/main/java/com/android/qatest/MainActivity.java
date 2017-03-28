package com.android.qatest;

import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.util.Log;
import android.widget.Toast;

import com.facebook.react.ReactActivity;

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

//        Intent intent = new Intent();
//        intent.setClass(this, LoginActivity.class);
//        context.startActivity(intent);

        //bugly自动升级初始化
        //Bugly.init(getApplicationContext(), "f130c8d4d9", false);

        Toast.makeText(this, "onCreate", Toast.LENGTH_LONG).show();
        Intent intent = getIntent();
        String action = intent.getAction();
        if(Intent.ACTION_VIEW.equals(action)) {
            Uri uri = intent.getData();
            if (uri != null) {
                String name = uri.getQueryParameter("name");
                String age = uri.getQueryParameter("age");
                Log.v("MainActivity age", age);
                Log.v("MainActivity name", name);
            }
        }
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();

        Toast.makeText(getApplicationContext(), "onDestroy", Toast.LENGTH_LONG).show();
    }
}
