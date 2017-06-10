package com.pay.event;

/**
 * Created by liusp@gagc.com.cn on 2016/7/1.
 */
public class WXPayCompletedEvent {
    public final String type;
    public final int code;
    public final String message;

    public WXPayCompletedEvent(String type, int code, String message) {
        this.type = type;
        this.code = code;
        this.message = message;
    }
}
