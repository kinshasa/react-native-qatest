package com.android.qatest.ui.category;

import java.util.ArrayList;

public class CategoryItemModel{

    public String img;
    public String name;

    CategoryItemModel(String a,String b){
        img = a;
        name = b;
    }

    static ArrayList<CategoryItemModel> initArrayData(){
        ArrayList<CategoryItemModel> datas = new ArrayList<>();
        datas.add(new CategoryItemModel("img1", "name1"));
        datas.add(new CategoryItemModel("img2", "name2"));
        datas.add(new CategoryItemModel("img3", "name3"));
        datas.add(new CategoryItemModel("img3", "name4"));
        datas.add(new CategoryItemModel("img3", "name5"));
        datas.add(new CategoryItemModel("img3", "name6"));
        datas.add(new CategoryItemModel("img3", "name7"));
        return datas;
    }
}
