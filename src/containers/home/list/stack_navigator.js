/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.5.8 下午 2:29
 * @Desc: 公共组件 - stack_navigator
 * @Name: stack_navigator.js
 * @LifeCycle：https://github.com/kinshasa/react-native-qatest
 */

import {StackNavigator} from "react-navigation";

import Setting from "../../set/Setting";
import AnimationDemoContainer from './AnimationDemoContainer';
import CartAnimationContainer from './CartAnimationContainer';
import drawer_navigator from './drawer_navigator';
import DropDownAlertContainer from './DropDownAlertContainer';
import FlatListContainer from './FlatListContainer';
import GoodsDetailPageContainer from './GoodsDetailPageContainer';
import HotFixPushyContainer from './HotFixPushyContainer';
import IconCollectContainer from './IconCollectContainer';
import LayoutXYDemoContainer from './LayoutXYDemoContainer';
import LoggerContainer from './LoggerContainer';
import NestScrollViewContainer from './NestScrollViewContainer';
import RCTViewsContainer from './RCTViewsContainer';
import RNTabViewContainer from './RNTabViewContainer';
// import stack_navigator from'./stack_navigator';
import SwipeListContainer from'./SwipeListContainer';
import tab_navigator from'./tab_navigator';
import TabViewContainer from'./TabViewContainer';
import VerticalViewPagerContainer from'./VerticalViewPagerContainer';

export default stack_navigator = StackNavigator(
    {
        tab: {
            screen: tab_navigator,
            navigationOptions:({navigation}) => ({
                title: 'tab_navigator',
                header:null,
            }),
        },
        RNTabViewContainer: {
            screen: RNTabViewContainer,
            navigationOptions: ({navigation}) => ({
                title: 'RNTabViewContainer1',
                //header: null,
                headerTitle:'RNTabViewContainer',
                headerBackTitle:'<<',
            }),
        },
        AnimationDemoContainer: {
            screen: RNTabViewContainer,
            navigationOptions: ({navigation}) => ({ headerTitle:'AnimationDemoContainer',headerBackTitle:'<<',}),
        },
        CartAnimationContainer: {
            screen: CartAnimationContainer,
            navigationOptions: ({navigation}) => ({ headerTitle:'CartAnimationContainer',headerBackTitle:'<<',}),
        },
        drawer_navigator: {
            screen: drawer_navigator,
            navigationOptions: ({navigation}) => ({ headerTitle:'drawer_navigator',headerBackTitle:'<<',}),
        },
        DropDownAlertContainer: {
            screen: DropDownAlertContainer,
            navigationOptions: ({navigation}) => ({ headerTitle:'DropDownAlertContainer',headerBackTitle:'<<',}),
        },
        FlatListContainer: {
            screen: FlatListContainer,
            navigationOptions: ({navigation}) => ({ headerTitle:'FlatListContainer',headerBackTitle:'<<',}),
        },
        GoodsDetailPageContainer: {
            screen: GoodsDetailPageContainer,
            navigationOptions: ({navigation}) => ({ headerTitle:'GoodsDetailPageContainer',headerBackTitle:'<<',}),
        },
        HotFixPushyContainer: {
            screen: HotFixPushyContainer,
            navigationOptions: ({navigation}) => ({ headerTitle:'HotFixPushyContainer',headerBackTitle:'<<',}),
        },


        Setting: {
            // `ProfileScreen` is a React component that will be the main content of the screen.
            screen: Setting,
            // When `ProfileScreen` is loaded by the StackNavigator, it will be given a `navigation` prop.

            // Optional: When deep linking or using react-navigation in a web app, this path is used:
            path: 'people/:username',
            // The action and route params are extracted from the path.

            // Optional: Override the `navigationOptions` for the screen
            navigationOptions: ({navigation}) => ({
                title: 'Setting',
                //header: null,
                headerTitle:'Setting',
                headerBackTitle:'<<',
            }),
        },
    }, {
        //Options for the router:
        // - Sets the default screen of the stack. Must match one of the keys in route configs.
        initialRouteName: 'tab',
        // - The params for the initial route
        initialRouteParams: {},
        // - Default navigation options to use for screens
        navigationOptions: {},
        // - A mapping of overrides for the paths set in the route configs
        paths: 'app/:test',

        //Visual options:
        // - Defines the style for rendering and transitions:
        mode: 'card',
        //- Specifies how the header should be rendered:{float,screen,none,}
        headerMode: 'screen',
        //- Use this prop to override or extend the default style for an individual card in stack.
        cardStyle: {},
        // - Function to return an object that overrides default screen transitions.
        transitionConfig: (o)=>{},
        // - Function to be invoked when the card transition animation is about to start.
        onTransitionStart: (o)=>{},
        // - Function to be invoked once the card transition animation completes.
        onTransitionEnd: (o)=>{},
    });