package com.pay.event;

/**
 * Created by liusp@gagc.com.cn on 2016.9.22.
 */
public interface AsyncListener {
    /**
     * 当请求成功的时候执行该方法
     *
     * @param values
     */
    public void onComplete(String values);

    /**
     * 发生异常的时候执行该方法
     *
     * @param exceptionInfo
     */
    public void onException(Object exceptionInfo);
}
