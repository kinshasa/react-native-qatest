package com.android.qatest;

/**
 * Created by lshaobocsu@gmail.com on 2017.4.11.
 * <p>
 * 全局配置文件
 */

public class Config {

    /**
     * 点击扩展ListView筛选页，用于商品列表筛选
     */
    static final String GoodsListMenu = "https://github.com/JayFang1993/DropDownMenu";

    /**
     * 点击浮出列表按钮
     */
    static final String BoomMenu = "https://github.com/Nightonke/BoomMenu";

    public static class UrlList {
        public static final String[] catelogyList = new String[]{
                //name=母婴玩具
                "http://api.m.jd.com/client.action?functionId=newSubCatalog&area=19_1601_3633_0&body=%7B%22catelogyId%22%3A%22300000009%22%7D&build=139045&client=apple&clientVersion=6.1.0&d_brand=apple&d_model=iPhone7%2C2&isBackground=N&networkType=wifi&networklibtype=JDNetworkBaseAF&openudid=7394f89a346949e58908ae7b0f63a4dbba4b6e3e&osVersion=10.3.2&partner=apple&screen=750%2A1334&sign=2502609ea4556cdaabdf26269824349c&st=1498184535076&sv=110&uuid=hjudwgohxzVu96krv/T6Hg%3D%3D",
                //name=热卖选购
                "http://api.m.jd.com/client.action?functionId=newSubCatalog&area=19_1601_3633_0&body=%7B%22catelogyId%22%3A%22100001852%22%7D&build=139045&client=apple&clientVersion=6.1.0&d_brand=apple&d_model=iPhone7%2C2&isBackground=N&networkType=wifi&networklibtype=JDNetworkBaseAF&openudid=7394f89a346949e58908ae7b0f63a4dbba4b6e3e&osVersion=10.3.2&partner=apple&screen=750%2A1334&sign=a6f14cfb6df00e633f0b8fc4f866936e&st=1498185853100&sv=120&uuid=hjudwgohxzVu96krv/T6Hg%3D%3D",
                //name=时尚女装
                "http://api.m.jd.com/client.action?functionId=newSubCatalog&area=19_1601_3633_0&body=%7B%22catelogyId%22%3A%22100001851%22%7D&build=139045&client=apple&clientVersion=6.1.0&d_brand=apple&d_model=iPhone7%2C2&isBackground=N&networkType=wifi&networklibtype=JDNetworkBaseAF&openudid=7394f89a346949e58908ae7b0f63a4dbba4b6e3e&osVersion=10.3.2&partner=apple&screen=750%2A1334&sign=28bf067a993686d711523b242290dc07&st=1498186017769&sv=111&uuid=hjudwgohxzVu96krv/T6Hg%3D%3D",
                // "name": "二手优品",
                "http://api.m.jd.com/client.action?functionId=newSubCatalog&area=19_1601_3633_0&body=%7B%22catelogyId%22%3A%22300014870%22%7D&build=139045&client=apple&clientVersion=6.1.0&d_brand=apple&d_model=iPhone7%2C2&isBackground=N&networkType=wifi&networklibtype=JDNetworkBaseAF&openudid=7394f89a346949e58908ae7b0f63a4dbba4b6e3e&osVersion=10.3.2&partner=apple&screen=750%2A1334&sign=2b339f8d7c1ae717c9f4d51352dac9f7&st=1498186802053&sv=112&uuid=hjudwgohxzVu96krv/T6Hg%3D%3D",
        };
    }


}
