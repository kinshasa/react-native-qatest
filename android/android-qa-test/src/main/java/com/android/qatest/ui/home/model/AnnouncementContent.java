package com.android.qatest.ui.home.model;


import java.util.ArrayList;

/**
 * Created by lshaobocsu@gmail.com on 2017.4.18.
 */

public class AnnouncementContent extends Content {

    ArrayList<Announcement> announcement;

    public String img;
    public int rotate;
    public AnnouncementContent(){}
    public AnnouncementContent(String str) {
    }

    public class Announcement {
        public String slogan;
        public String content;

        public Jump jump;
    }
}
