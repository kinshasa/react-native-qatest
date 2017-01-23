/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.1.23 下午 6:57
 * @Todo: 公共组件 - App主路由
 * @NAME: MainRoute
 */

// reducers/index.js
import { reducer as router } from 'react-native-router-redux';

export {
    router, // the key must be 'router'
};

// hook up the reducers
import * as reducers from '../reducers';
const reducer = combineReducers(reducers);

// import react-native-router-redux
import {
    actions as routerActions,
    NavBar,
    Route,
    Router,
    Schema,
    TabBar,
    TabRoute
} from 'react-native-router-redux';

// connect your state and actions (using react-redux)
const mapStateToProps = state => ({
    router: state.router,
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({
        ...routerActions,
    }, dispatch),
    dispatch,
});

// define your routes
const defaultSchema = {
    navBar: NavBar,
    navLeftColor: '#FFFFFF',
    navTint: '#224655',
    navTitleColor: '#FFFFFF',
    navTitleStyle: {
        fontFamily: 'Avenir Next',
        fontSize: 18,
    },
    statusStyle: 'light-content',
    tabBar: TabBar,
};

class Application extends Component {
    render() {
        return (
            <Router {...this.props} assets={assets} initial="signIn">
                <Schema name="default" {...defaultSchema} />

                <Route name="signIn" component={SignIn} type="reset" hideNavBar={true} />
                <Route name="detail" component={Detail} />
                <TabRoute name="tabBar" barTint='#FFFFFF' tint="#32DEAF">
                    <Route name="tab1" component={Master('#111')} title="Home" tabItem={{icon: assets['home'], title: 'Home'}} />
                    <Route name="tab2" component={Master('#222')} title="Calendar" tabItem={{icon: assets['calendar'], title: 'Calendar'}} />
                    <Route name="tab3" component={Master('#333')} title="Video" tabItem={{icon: assets['video'], title: 'Video'}} />
                    <Route name="tab4" component={Master('#444')} title="Profile" tabItem={{icon: assets['profile'], title: 'Profile'}} />
                </TabRoute>
            </Router>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Application);