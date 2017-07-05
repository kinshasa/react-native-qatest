package com.android.qatest.ui.home.model;

import java.util.ArrayList;

/**
 * Created by lshaobocsu@gmail.com on 2017.4.18.
 */

public class FloorMiaoshaContent<T extends Content> {


    public ArrayList<SubFloors> subFloors;
    public int subFloorNum;


    public int bottomMargin = 0;
    //public T content;
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

    public FloorMiaoshaContent() {
    }

    public FloorMiaoshaContent(String str) {
    }

    public class SubFloors {
        public T content;

    }

}
