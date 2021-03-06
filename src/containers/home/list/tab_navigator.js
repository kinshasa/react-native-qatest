/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.4.6 上午 11:57
 * @Desc: 公共组件 - ReactNavigationContainer
 * @Name: ReactNavigationContainer.js
 * @LifeCycle：https://github.com/kinshasa/react-native-qatest
 */
import React from "react";

import {TabNavigator} from "react-navigation";
import HomePage from "../HomePage";
import QATest from "../../test/QATest";
import Setting from "../../set/Setting";
import Icon from "react-native-vector-icons/Ionicons";


const LAUNCHER_IMG_HOME = <Icon name="ios-compass-outline" size={25} color="black"/>;
const LAUNCHER_IMG_HOME_SELECT = <Icon name="ios-compass" size={25} color="#166AF6"/>;
const LAUNCHER_IMG_TEST = <Icon name="ios-cloud-circle-outline" size={25} color="black"/>;
const LAUNCHER_IMG_TEST_SELECT = <Icon name="ios-cloud-circle" size={25} color="#166AF6"/>;
const LAUNCHER_IMG_SETTING = <Icon name="ios-contact-outline" size={25} color="black"/>;
const LAUNCHER_IMG_SETTING_SELECT = <Icon name="ios-contact" size={25} color="#166AF6"/>;

export default tab_navigator = TabNavigator({
        HomePage: {
            screen: HomePage,
            navigationOptions: {
                tabBarLabel: ({focused, tintColor}) => ('HomePage'),
                title: 'HomePage',
                tabBarIcon: ({focused, tintColor}) => focused ? LAUNCHER_IMG_HOME_SELECT :LAUNCHER_IMG_HOME,
            }
        },
        QATest: {
            screen: QATest,
            navigationOptions: {
                tabBarLabel: ({focused, tintColor}) => ('QATest'),
                title: 'QATest',
                tabBarIcon: ({focused, tintColor}) => focused ? LAUNCHER_IMG_TEST_SELECT :LAUNCHER_IMG_TEST,
            }
        },
        Setting: {
            // `Setting` is a React component that will be the main content of the screen.
            screen: Setting,

            // Optional: When deep linking or using react-navigation in a web app, this path is used:
            path: 'people/:username',

            // Optional: Override the `navigationOptions` for the screen
            navigationOptions: {
                tabBarLabel: ({focused, tintColor}) => ('Setting'),
                title: 'Setting',
                tabBarIcon: ({focused, tintColor}) => focused ? LAUNCHER_IMG_SETTING_SELECT :LAUNCHER_IMG_SETTING,
            }
        },
    },
    //configure the tab bar, see below.
    {
        //- component to use as the tab bar, e.g. TabBarBottom (this is the default on iOS),TabBarTop (this is the default on Android)
        //tabBarComponent:{},
        //- position of the tab bar, can be 'top' or 'bottom'
        tabBarPosition: 'bottom',
        // - whether to allow swiping between tabs
        swipeEnabled: true,
        //- whether to animate when changing tabs
        animationEnabled: true,
        //- whether to lazily render tabs as needed as opposed to rendering them upfront
        lazyLoad: false,
        tabBarOptions: {
            //tabBarOptions for TabBarBottom (default tab bar on iOS) #
            // - label and icon color of the active tab
            // activeTintColor:'#e91e63',
            // activeBackgroundColor:'blue',
            // inactiveTintColor:'white',
            // inactiveBackgroundColor:'green',
            // showLabel:'yellow',
            // style:{backgroundColor: 'blue',},
            // labelStyle:{backgroundColor: 'blue',},

            //tabBarOptions for TabBarTop (default tab bar on Android) #
            activeTintColor: '#166AF6',// - label and icon color of the active tab
            inactiveTintColor: 'black',// - label and icon color of the inactive tab
            showIcon: true,// - whether to show icon for tab, default is false
            showLabel: true,// - whether to show label for tab, default is true
            upperCaseLabel: false,// - whether to make label uppercase, default is true
            pressColor: '#000',// - color for material ripple (Android >= 5.0 only)
            pressOpacity: 1,// - opacity for pressed tab (iOS and Android < 5.0 only)
            scrollEnabled: false,// - whether to enable scrollable tabs
            tabStyle: {backgroundColor: '#aaa', height: 60},// - style object for the tab
            indicatorStyle: {backgroundColor: 'green', height: 1},// - style object for the tab indicator (line at the bottom of the tab)
            labelStyle: {backgroundColor: 'transparent',marginBottom:5},// - style object for the tab label
            iconStyle: {backgroundColor: 'transparent',marginTop:5},// - style object for the tab icon
            style: {backgroundColor: 'white', height: 64,justifyContent:'center'},// - style object for the tab bar
        },
        // - The routeName for the initial tab route when first loading
        //initialRoute:'Setting',

    });