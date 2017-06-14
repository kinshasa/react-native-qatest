package com.android.qatest.ui.category;

import android.os.AsyncTask;

import com.android.qatest.R;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by lshaobocsu@gmail.com on 2017.5.17.
 */

public class CategoryInteractorImp implements CategoryInteractor {

    private List<Map<String, Object>> mCategoryList;
    public static String[] LISTVIEWTXT = new String[]{"热门分类", "美食", "购物",
            "休闲娱乐", "运动健身", "丽人", "结婚", "酒店", "爱车", "亲子"};
    public static int[] LISTVIEWIMG = new int[]{
            R.mipmap.ic_category_15, R.mipmap.ic_category_20,
            R.mipmap.ic_category_25, R.mipmap.ic_category_30,
            R.mipmap.ic_category_35, R.mipmap.ic_category_40,
            R.mipmap.ic_category_45, R.mipmap.ic_category_50,
            R.mipmap.ic_category_55, R.mipmap.ic_category_60
    };

    @Override
    public void onRequest(final onCategoryRequestListener listener) {

        mCategoryList = new ArrayList<>();
        for (int i = 0; i < CategoryInteractorImp.LISTVIEWTXT.length; i++) {
            Map<String, Object> map = new HashMap<>();
            // 根据键值对存储到HashMap中去
            map.put("img", CategoryInteractorImp.LISTVIEWIMG[i]);
            map.put("txt", CategoryInteractorImp.LISTVIEWTXT[i]);
            mCategoryList.add(map);
        }

        listener.onSuccess(mCategoryList);
    }
}
