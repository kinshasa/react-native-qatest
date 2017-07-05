package com.android.qatest.ui.home.model;

import com.android.qatest.ui.home.model.Content;
import com.android.qatest.ui.home.model.Jump;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;

/**
 * Created by lshaobocsu@gmail.com on 2017.4.18.
 * 图片轮播
 */

public class BannerContent extends Content{
    public String activityId;
    public String sortno;
    public String abt;
    public String title;
    public String wareDisplayType;
    public String horizontalImag;
    public String exposalUrl;
    public String clickUrl;
    public Jump jump;

    public BannerContent(){

    }

    public BannerContent(String str){
        super(str);
        try {
            JSONObject jsonObject = new JSONObject(str);
            this.activityId = jsonObject.getString("activityId");
        } catch (JSONException e) {
            e.printStackTrace();
        }
    }

    Content init(String str){
        try {
            JSONObject jsonObject = new JSONObject(str);
            this.activityId = jsonObject.getString("activityId");
            this.horizontalImag = jsonObject.getString("horizontalImag");
        } catch (JSONException e) {
            e.printStackTrace();
        }
        return this;
    }
}