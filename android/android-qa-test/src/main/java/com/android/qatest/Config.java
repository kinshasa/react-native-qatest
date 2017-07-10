package com.android.qatest;

import java.util.HashMap;
import java.util.Map;

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

    public static class CallAPIs {
        public static final String[] categoryList = new String[]{
                //name=母婴玩具
                "http://api.m.jd.com/client.action?functionId=newSubCatalog&area=19_1601_3633_0&body=%7B%22catelogyId%22%3A%22300000009%22%7D&build=139045&client=apple&clientVersion=6.1.0&d_brand=apple&d_model=iPhone7%2C2&isBackground=N&networkType=wifi&networklibtype=JDNetworkBaseAF&openudid=7394f89a346949e58908ae7b0f63a4dbba4b6e3e&osVersion=10.3.2&partner=apple&screen=750%2A1334&sign=2502609ea4556cdaabdf26269824349c&st=1498184535076&sv=110&uuid=hjudwgohxzVu96krv/T6Hg%3D%3D",
                //name=热卖选购
                "http://api.m.jd.com/client.action?functionId=newSubCatalog&area=19_1601_3633_0&body=%7B%22catelogyId%22%3A%22100001852%22%7D&build=139045&client=apple&clientVersion=6.1.0&d_brand=apple&d_model=iPhone7%2C2&isBackground=N&networkType=wifi&networklibtype=JDNetworkBaseAF&openudid=7394f89a346949e58908ae7b0f63a4dbba4b6e3e&osVersion=10.3.2&partner=apple&screen=750%2A1334&sign=a6f14cfb6df00e633f0b8fc4f866936e&st=1498185853100&sv=120&uuid=hjudwgohxzVu96krv/T6Hg%3D%3D",
                //name=时尚女装
                "http://api.m.jd.com/client.action?functionId=newSubCatalog&area=19_1601_3633_0&body=%7B%22catelogyId%22%3A%22100001851%22%7D&build=139045&client=apple&clientVersion=6.1.0&d_brand=apple&d_model=iPhone7%2C2&isBackground=N&networkType=wifi&networklibtype=JDNetworkBaseAF&openudid=7394f89a346949e58908ae7b0f63a4dbba4b6e3e&osVersion=10.3.2&partner=apple&screen=750%2A1334&sign=28bf067a993686d711523b242290dc07&st=1498186017769&sv=111&uuid=hjudwgohxzVu96krv/T6Hg%3D%3D",
                // "name": "二手优品",
                "http://api.m.jd.com/client.action?functionId=newSubCatalog&area=19_1601_3633_0&body=%7B%22catelogyId%22%3A%22300014870%22%7D&build=139045&client=apple&clientVersion=6.1.0&d_brand=apple&d_model=iPhone7%2C2&isBackground=N&networkType=wifi&networklibtype=JDNetworkBaseAF&openudid=7394f89a346949e58908ae7b0f63a4dbba4b6e3e&osVersion=10.3.2&partner=apple&screen=750%2A1334&sign=2b339f8d7c1ae717c9f4d51352dac9f7&st=1498186802053&sv=112&uuid=hjudwgohxzVu96krv/T6Hg%3D%3D",
                //商品分类
                "http://api.m.jd.com/client.action?functionId=entranceCatalog&area=19_1601_3633_0&body=%7B%22isDescription%22%3Atrue%2C%22isIcon%22%3Atrue%2C%22level%22%3A%220%22%2C%22catelogyId%22%3A%220%22%7D&build=139045&client=apple&clientVersion=6.1.0&d_brand=apple&d_model=iPhone7%2C2&isBackground=N&networkType=wifi&networklibtype=JDNetworkBaseAF&openudid=7394f89a346949e58908ae7b0f63a4dbba4b6e3e&osVersion=10.3.2&partner=apple&screen=750%2A1334&sign=ac4e0ff1ee495d3da1c9170903c21395&st=1499400826846&sv=120&uuid=hjudwgohxzVu96krv/T6Hg%3D%3D",
                //常用分类
                "http://api.m.jd.com/client.action?functionId=commonCatalogs&area=19_1601_3633_0&body=%7B%22clear%22%3A0%2C%22method%22%3A%22bp.category%22%2C%22uid%22%3A%226%2BGqKoL049xWnh3DQferKg%3D%3D%22%2C%22token%22%3A%22e9fcc188cf49dc175e18a369fc5cc2b5%22%2C%22guid%22%3A%227394f89a346949e58908ae7b0f63a4dbba4b6e3e%22%7D&build=139045&client=apple&clientVersion=6.1.0&d_brand=apple&d_model=iPhone7%2C2&isBackground=N&networkType=wifi&networklibtype=JDNetworkBaseAF&openudid=7394f89a346949e58908ae7b0f63a4dbba4b6e3e&osVersion=10.3.2&partner=apple&screen=750%2A1334&sign=850f59f477355d022f13e418d06931de&st=1499400827332&sv=100&uuid=hjudwgohxzVu96krv/T6Hg%3D%3D",
        };

        //首页数据
        public static final String HomeFloorList = "http://api.m.jd.com/client.action?functionId=welcomeHome&area=19_1601_3633_0&body=%7B%22identity%22%3A%227394f89a346949e58908ae7b0f63a4dbba4b6e3e%22%2C%22cycNum%22%3A2%2C%22poz%22%3A%7B%22city%22%3A%22%E5%B9%BF%E4%B8%9C%3A%E5%B9%BF%E5%B7%9E%22%2C%22time%22%3A1495190247674%7D%2C%22cycFirstTimeStamp%22%3A%221499243226272%22%2C%22geo%22%3A%7B%22lng%22%3A%220.000000%22%2C%22lat%22%3A%220.000000%22%7D%7D&build=139045&client=apple&clientVersion=6.1.0&d_brand=apple&d_model=iPhone7%2C2&isBackground=N&networkType=wifi&networklibtype=JDNetworkBaseAF&openudid=7394f89a346949e58908ae7b0f63a4dbba4b6e3e&osVersion=10.3.2&partner=apple&screen=750%2A1334&sign=c042303e5e7ef35405e923010eb6921c&st=1499243372901&sv=102&uuid=hjudwgohxzVu96krv/T6Hg%3D%3D";


    }


}
