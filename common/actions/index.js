/**
 * @Author: liushaobo2005@163.com
 * @Date: 2017.3.6 下午 5:09
 * @Desc: Redux的Actions集合 - index
 * @Name: index.js
 * @LifeCycle：http://www.tuicool.com/articles/nu6zInB
 */

import * as user_info from './user_info';
import * as home from './home';
import * as test from './test';


var actions = {...user_info,...home,...test};

module.exports = actions;