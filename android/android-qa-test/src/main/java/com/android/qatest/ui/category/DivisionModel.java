package com.android.qatest.ui.category;

import java.util.ArrayList;

/**
 * Created by lshaobocsu@gmail.com on 2017.6.22.
 */

public class DivisionModel {

    String title;//左侧标题
    String adStr;//右侧顶部栏广告位

    ArrayList<SectionModel> sectionModels;//右侧section内容

    DivisionModel(){

    }

    DivisionModel(String a, String b, ArrayList<SectionModel> data) {
        title = a;
        adStr = b;
        sectionModels = data;
    }

    static ArrayList<DivisionModel> initArrayData(int length) {

        ArrayList<DivisionModel> divisionModels = new ArrayList<>();
        divisionModels.add(new DivisionModel("母婴玩具", "DivisionAdStr", null));
        divisionModels.add(new DivisionModel("热卖选购", "DivisionAdStr", null));
        divisionModels.add(new DivisionModel("时尚女装", "DivisionAdStr", null));
        divisionModels.add(new DivisionModel("二手优品", "DivisionAdStr", null));
 /*for (int i = 0; i < length; i++) {
            divisionModels.add(new DivisionModel("DivisionTitle"  + length + "" + i, "DivisionAdStr" + i, SectionModel.initArrayData(i+5)));
        }*/

        return divisionModels;
    }
}
