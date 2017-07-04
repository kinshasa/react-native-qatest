package com.android.qatest.ui.category;

import java.util.ArrayList;

public class CateModel {

    public String icon;
    public String isIndividual;
    public String searchKey;
    public String name;
    public String isMerger;
    public String path;
    public String virtualFlag;
    public String cid;

    public CateModel() {
    }

    public CateModel(String a, String b) {
        icon = a;
        name = b;
    }

    public static ArrayList<CateModel> initArrayData(int length) {
        ArrayList<CateModel> cateModels = new ArrayList<>();
        for (int i = 6; i < length; i++) {
            cateModels.add(new CateModel("img" + length, "Cate" + length + "" + i));
        }
        return cateModels;
    }
}
