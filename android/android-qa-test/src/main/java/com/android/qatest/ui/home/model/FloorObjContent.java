package com.android.qatest.ui.home.model;

/**
 * Created by lshaobocsu@gmail.com on 2017.4.18.
 */

public class FloorObjContent<T extends Content> {

    public int bottomMargin = 0;
    public T content;
    public boolean isShadow;
    public String showName;
    public String type;
    public String textColor;
    public String rightCorner;

    public String verticalInterval;
    public String floorOrder;
    public String head;
    public String innnerInterval;
    public String logoImage;

    public Jump jump;

    public Jump moreJump;

    public FloorObjContent() {
    }

    public FloorObjContent(String str) {
    }

}
