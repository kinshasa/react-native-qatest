/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.5.8 下午 2:36
 * @Desc: 公共组件 - drawer_navigator
 * @Name: drawer_navigator.js
 * @LifeCycle：https://github.com/kinshasa/react-native-qatest
 */
import {TabNavigator} from "react-navigation";
import HomePage from "../HomePage";
import QATest from "../../test/QATest";
import Setting from "../../set/Setting";


export default drawer_navigator = TabNavigator(
    {
        HomePage: {screen: HomePage},
        QATest: {screen: QATest},
        Setting: {
            // `ProfileScreen` is a React component that will be the main content of the screen.
            screen: Setting,
            // When `ProfileScreen` is loaded by the StackNavigator, it will be given a `navigation` prop.

            // Optional: When deep linking or using react-navigation in a web app, this path is used:
            path: 'people/:username',
            // The action and route params are extracted from the path.

            // Optional: Override the `navigationOptions` for the screen
            navigationOptions: ({navigation}) => ({
                title: `${navigation.state.params.username}'s Profile'`,
            }),
        },
    },
    {
        tabBarPosition: 'bottom',
        lazyLoad: false,
        tabBarOptions: {activeTintColor: 'white', activeBackgroundColor: 'green', inactiveBackgroundColor: 'red'}
    });