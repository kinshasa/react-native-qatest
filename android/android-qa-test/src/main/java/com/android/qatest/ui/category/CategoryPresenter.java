package com.android.qatest.ui.category;

import android.content.Context;

import com.android.http.Http;
import com.android.qatest.db.AysncCallback;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * Created by lshaobocsu@gmail.com on 2017.5.17.
 */

public interface CategoryPresenter {

    public void getCategoryData(Context context, int cateId, CategoryInteractor.onCategoryRequestListener listener);

    void getSectionDataById(Context context, int cateId, Http.onHttpListener<ArrayList<SectionModel>> listener);

    public void onDestroy();
}
