package com.android.qatest.ui.category;

import android.os.AsyncTask;

import java.util.ArrayList;

/**
 * Created by lshaobocsu@gmail.com on 2017.5.17.
 */

public class CategoryInteractorImp implements CategoryInteractor {

    private ArrayList<DivisionModel> divisionModels;

    @Override
    public void onRequest(final onCategoryRequestListener listener) {

        divisionModels = DivisionModel.initArrayData(10);

        /*new AsyncTask<String, Integer, String>() {

            @Override
            protected String doInBackground(String... params) {
                Thread.sleep(20);
                return null;
            }
        }.execute();
        new Thread(new Runnable() {
            @Override
            public void run() {
                listener.onSuccess(divisionModels);

            }
        }).start();*/
        listener.onSuccess(divisionModels);
    }
}
