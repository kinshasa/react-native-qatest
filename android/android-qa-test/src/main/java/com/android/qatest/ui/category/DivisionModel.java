package com.android.qatest.ui.category;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import static com.android.qatest.Config.UrlList.categoryList;

/**
 * Created by lshaobocsu@gmail.com on 2017.6.22.
 */

public class DivisionModel {

    public String title;//左侧标题
    public String adStr;//右侧顶部栏广告位
    public String reqUrl;//请求URL

    public ArrayList<SectionModel> sectionModels;//右侧section内容

    DivisionModel(){

    }

    DivisionModel(String a, String b, String c) {
        title = a;
        adStr = b;
        reqUrl = c;
    }

    static ArrayList<DivisionModel> initArrayData(int length) {

        ArrayList<DivisionModel> divisionModels = new ArrayList<>();
        divisionModels.add(new DivisionModel("母婴玩具", "DivisionAdStr", categoryList[0]));
        divisionModels.add(new DivisionModel("热卖选购", "DivisionAdStr", categoryList[1]));
        divisionModels.add(new DivisionModel("时尚女装", "DivisionAdStr", categoryList[2]));
        divisionModels.add(new DivisionModel("二手优品", "DivisionAdStr", categoryList[3]));
        return divisionModels;
    }



    //初始化Map方法：http://blog.csdn.net/dujianxiong/article/details/54849079
    public static final Map<String, String> categoryUrls = new HashMap<String, String>() {{
        put("母婴玩具", categoryList[0]);
        put("热卖选购", categoryList[1]);
        put("时尚女装", categoryList[2]);
        put("二手优品", categoryList[3]);
    }};
}
