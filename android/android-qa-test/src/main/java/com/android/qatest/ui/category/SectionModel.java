package com.android.qatest.ui.category;

import java.util.ArrayList;

/**
 * Created by lshaobocsu@gmail.com on 2017.6.22.
 */

public class SectionModel {

    public String title;

    public ArrayList<CateModel> cateModels;

    SectionModel(String a, ArrayList<CateModel> data) {
        title = a;
        cateModels = data;
    }

    static ArrayList<SectionModel> initArrayData(int length) {

        ArrayList<SectionModel> sectionModels = new ArrayList<>();
        for (int i = 3; i < length; i++) {
            sectionModels.add(new SectionModel("SectionTitle" + length + "" + i, CateModel.initArrayData(i + 10)));
        }
        return sectionModels;
    }
}
