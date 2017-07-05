package com.android.qatest.ui.category;

import android.content.Context;

import com.android.http.Http;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * Created by lshaobocsu@gmail.com on 2017.5.17.
 */

public interface CategoryInteractor {

    interface onCategoryRequestListener{
        void onFail();
        void onSuccess(ArrayList<DivisionModel> list);
    }

    void onRequest(Context context, onCategoryRequestListener listener);

    /**
     * 通过数据库，文件，网络等方式获取类型数据
     * @param context
     * @param listener
     */
    void fetchCateDataById(Context context,int cateId, Http.onHttpListener<ArrayList<SectionModel>> listener);
}
