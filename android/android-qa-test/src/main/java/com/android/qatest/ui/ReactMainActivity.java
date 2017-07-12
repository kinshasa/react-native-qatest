package com.android.qatest.ui;

import android.app.Activity;

public class ReactMainActivity extends Activity {

    /*private Context context = this;

    *//**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     *//*
    @Override
    protected String getMainComponentName() {
        return "QATest";
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        *//*Intent intent = new Intent();
        intent.setClass(this, VerticalPagerActivity.class);
        context.startActivity(intent);*//*

        //bugly自动升级初始化
        //Bugly.init(getApplicationContext(), "f130c8d4d9", false);

        Toast.makeText(this, "onCreate", Toast.LENGTH_LONG).show();
        *//*Intent intent = getIntent();
        String action = intent.getAction();
        if(Intent.ACTION_VIEW.equals(action)) {
            Uri uri = intent.getData();
            if (uri != null) {
                String password = uri.getQueryParameter("password");
                String username = uri.getQueryParameter("username");
                Log.v("MainActivity age", username);
                Log.v("MainActivity name", password);
            }
        }*//*
    }



    @Override
    protected void onDestroy() {
        super.onDestroy();

        Toast.makeText(getApplicationContext(), "onDestroy", Toast.LENGTH_LONG).show();
    }*/
}
