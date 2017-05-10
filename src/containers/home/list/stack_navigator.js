/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.5.8 下午 2:29
 * @Desc: 公共组件 - stack_navigator
 * @Name: stack_navigator.js
 * @LifeCycle：https://github.com/kinshasa/react-native-qatest
 */

import {StackNavigator} from "react-navigation";
import tab_navigator from "./tab_navigator";
import Setting from "../../set/Setting";
tab_navigator.navigationOptions = ({navigation}) => {
    return {
        //header: null,
        title: 'Now you see me',
    };
};
export default stack_navigator = StackNavigator(
    {
        tab: {
            screen: tab_navigator,
            navigationOptions:({navigation}) => ({
                title: `Profile'`,
            }),
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
                title: `Profile'`,
                //header: null,
                headerTitle:'',
                headerBackTitle:'',
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
        //- Specifies how the header should be rendered:
        headerMode: 'none',
        //- Use this prop to override or extend the default style for an individual card in stack.
        cardStyle: {},
        // - Function to return an object that overrides default screen transitions.
        transitionConfig: (o)=>{},
        // - Function to be invoked when the card transition animation is about to start.
        onTransitionStart: (o)=>{},
        // - Function to be invoked once the card transition animation completes.
        onTransitionEnd: (o)=>{},
    });