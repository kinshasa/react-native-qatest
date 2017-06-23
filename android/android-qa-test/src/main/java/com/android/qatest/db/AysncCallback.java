package com.android.qatest.db;

import java.util.Objects;

/**
 * Created by lshaobocsu@gmail.com on 2017.6.23.
 */

public interface AysncCallback<T> {

    void onSuccess(T values);
    void onFail(Objects exceptionInfo);
}
