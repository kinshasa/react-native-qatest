package com.android.qatest.ui.category;

import java.util.ArrayList;

public class CateModel {

    public String img;
    public String name;

    CateModel(String a, String b) {
        img = a;
        name = b;
    }

    static ArrayList<CateModel> initArrayData(int length) {
        ArrayList<CateModel> cateModels = new ArrayList<>();
        for (int i = 6; i < length; i++) {
            cateModels.add(new CateModel("img" + length, "CateName" + length));
        }
        return cateModels;
    }
}
