package com.android.qatest.ui.category;

import java.util.ArrayList;

/**
 * Created by lshaobocsu@gmail.com on 2017.6.22.
 */

public class SectionModel {

    public String icon;
    public String special_ui;
    public String name;
    public String columNum;
    public String cid;
    public String isBook;
    public String rankingFlag;

    public ArrayList<CateModel> catelogyList;

    SectionModel(){}

    SectionModel(String a, ArrayList<CateModel> data) {
        name = a;
        catelogyList = data;
    }

    static ArrayList<SectionModel> initArrayData(int length) {

        ArrayList<SectionModel> sectionModels = new ArrayList<>();
        for (int i = 3; i < length; i++) {
            sectionModels.add(new SectionModel("SectionTitle" + length + "" + i, CateModel.initArrayData(i + 10)));
        }
        return sectionModels;
    }
}
