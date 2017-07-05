package com.android.qatest.ui.home.model;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.TypeReference;
import com.android.qatest.model.Response;
import com.facebook.react.bridge.SupportsWebWorkers;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by lshaobocsu@gmail.com on 2017.4.18.
 */

@SuppressWarnings("unused")
public class HomePageResponse {

    //请求的正确码
    public static String CODE_SUCCESS = "0";

    public String naviVer;
    public int tipsIdleTime;
    public String toTopBtnImg;
    public int cycNum;
    public int firework;
    public String tipsShowTime;
    public String cycFirstTimeStamp;
    public String code;
    public int executeTime;
    public int appCenterAnimations;
    public int tipsFunction;
    public String personalSourceValue;
    public int tagAnimations;
    public Boolean canBeDefault;
    public int tipsShowType;

    public FloorList floorLists;
    public ArrayList<Floor> floorList;

    public int lazy;
    public String toBottomBtnImg;

    //错误返回的错误信息
    public String echo;

    public HomePageResponse() {

    }

    public HomePageResponse(String str) {
        try {
            JSONObject jsonObject = new JSONObject(str);
            this.naviVer = jsonObject.getString("naviVer");
            JSONArray floorArr = jsonObject.getJSONArray("floorList");

            JSONObject floorStr = jsonObject.getJSONObject("floorList");

        } catch (JSONException e) {
            e.printStackTrace();
        }
    }

    /**
     * 因floorList数组不同对象，需要做二次解析
     */
    public void parseFloorArr() {

        floorLists = new FloorList();
        if (floorList == null) {
            return;
        }

        for (int i = 0; i < floorList.size(); i++) {
            switch (floorList.get(i).type) {
                case "banner":
                    floorLists.bannerContentFloor = Response.parseObject(floorList.get(i).toString(),
                            new TypeReference<Floor<BannerContent>>() {
                            });
                    /*(Floor<BannerContent>)floorList.get(i) = Response.parseObject(floorList.get(i).toString(),
                            new TypeReference<Floor<BannerContent>>() {
                            });*/
                    break;
            }
        }
    }
}
