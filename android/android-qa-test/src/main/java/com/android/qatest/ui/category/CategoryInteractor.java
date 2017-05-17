package com.android.qatest.ui.category;

import java.util.List;
import java.util.Map;

/**
 * Created by lshaobocsu@gmail.com on 2017.5.17.
 */

public interface CategoryInteractor {

    interface onCategoryRequestListener{
        void onFail();
        void onSuccess(List<Map<String, Object>> list);
    }

    void onRequest(onCategoryRequestListener listener);
}
