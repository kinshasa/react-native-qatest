package com.android.qatest.ui.home.model;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.TypeReference;
import com.android.log.L;
import com.android.qatest.model.Response;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;

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
    //public Map<Integer, Object> floorListss;
    public ArrayList<String> floorList;//ArrayList<JSONObject> JSONObject.getString("type");

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
        int floorId = 0;
        for (String floor : floorList) {
            String type = "";
            try {
                JSONObject jsonObj = new JSONObject(floor);
                if (jsonObj.has("type")) type = jsonObj.getString("type");
                if (jsonObj.has("jsonObj")) floorId = jsonObj.getInt("floorId");
            } catch (JSONException e) {
                e.printStackTrace();
            }
            switch (type) {
                case "banner":
                    //0 京东首页-Banner banner
                    floorLists.bannerContentFloor = Response.parseObject(floor, new TypeReference<Floor<BannerContent>>() {
                    });
                    break;
                //1 京东首页-功能区 appcenter
                case "appcenter":
                    floorLists.appCenterContentFloor = Response.parseObject(floor, new TypeReference<FloorObjContent<AppCenterContent>>() {
                    });
                    break;
                case "announcement":
                    //2 京东首页-京东快报 announcement
                    floorLists.announcementContentFloor = Response.parseObject(floor, new TypeReference<Floor<AnnouncementContent>>() {
                    });
                    break;
                case "hybrid":
                    if (floorId == 2796){
                        //3 京东首页-京东秒杀 hybrid
                        floorLists.miaoShaContentFloor = Response.parseObject(floor, new TypeReference<FloorMiaoshaContent<MiaoShaContent>>() {
                        });
                    }
                    break;
                default:
                    L.v(type);
                    break;
            }
        }

        /*try {
            //0 京东首页-Banner banner
            floorLists.bannerContentFloor = Response.parseObject(floorList.get(0), new TypeReference<Floor<BannerContent>>() {
            });
            //1 京东首页-功能区 appcenter
            floorLists.appCenterContentFloor = Response.parseObject(floorList.get(1), new TypeReference<FloorObjContent<AppCenterContent>>() {
            });
            //2 京东首页-京东快报 announcement
            floorLists.announcementContentFloor = Response.parseObject(floorList.get(2), new TypeReference<Floor<AnnouncementContent>>() {
            });
            //3 京东首页-京东秒杀 hybrid
            floorLists.miaoShaContentFloor = Response.parseObject(floorList.get(3), new TypeReference<FloorMiaoshaContent<MiaoShaContent>>() {
            });
        } catch (Exception e) {
            e.printStackTrace();
        }*/
    }
}
