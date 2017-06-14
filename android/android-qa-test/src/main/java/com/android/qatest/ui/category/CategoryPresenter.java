package com.android.qatest.ui.category;

import java.util.List;
import java.util.Map;

/**
 * Created by lshaobocsu@gmail.com on 2017.5.17.
 */

public interface CategoryPresenter {

    public void getCategoryData(CategoryInteractor.onCategoryRequestListener listener);
    public void onDestory();
}
