package com.android.qatest.ui.home.model;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

/**
 * Created by lshaobocsu@gmail.com on 2017.4.18.
 */

public class FloorList {

    //0 京东首页-Banner banner
    public Floor<BannerContent> bannerContentFloor;

    //1 京东首页-功能区 appcenter
    public FloorObjContent<AppCenterContent> appCenterContentFloor;

    //2 京东首页-京东快报 announcement
    public Floor<AnnouncementContent> announcementContentFloor;

    //3 京东首页-京东秒杀 hybrid
    //https://m.360buyimg.com/mobilecms/jfs/t3841/79/4441552211/15788/da4b5eb5/58eddf3aN194e2a22.png
    public FloorMiaoshaContent<MiaoShaContent> miaoShaContentFloor;

    //4 京东首页-促销楼层 hybrid

    //5 京东首页-战略通栏(广告栏) hybrid

    //6 京东首页-爱生活-新版 hybrid
    //7 京东首页-6.0二楼通栏 hybrid
    //8~17 京东首页
    //18 京东首页-为你推荐(标题)


    public FloorList(){

    }

    public FloorList(String str){
        try {
            JSONArray jsonArray = new JSONArray(str);
            setBannerContentFloor(jsonArray.getString(0));
            setAppContentFloor(jsonArray.getString(1));



        } catch (JSONException e) {
            e.printStackTrace();
        }
    }

    FloorList(JSONArray jsonArray){

    }

    public void setBannerContentFloor(String str) {
        this.bannerContentFloor = new Floor<>(str);
        try {
            JSONArray jsonArray = new JSONObject(str).getJSONArray("content");
            for(int i=0;i<jsonArray.length();i++){
                BannerContent bannerContent = new BannerContent(jsonArray.getString(i));
                this.bannerContentFloor.content.add(bannerContent);
            }
        } catch (JSONException e) {
            e.printStackTrace();
        }

    }

    public void setAppContentFloor(String str) {
        this.appCenterContentFloor = new FloorObjContent<>(str);
        try {
            String appStr = new JSONObject(str).getString("content");
            //this.appContentFloor.content = new AppContent(appStr);
        } catch (JSONException e) {
            e.printStackTrace();
        }

    }
}
