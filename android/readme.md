**`介绍`**

1. 该App是基于ReactNative开发并测试第三方组件性能而创建
2. 该App目前已实现Native/H5/ReactNative混合开发


**`TodoList`**

1. 完成ReactNative开发首页
2. 完成仿京东商品分类页
3. 完成仿京东商品列表页`（包含交互）`
4. 完成仿京东购物车页
5. 完成仿大圣车服三大首页
6. 实现ReactNative多模块异步加载`(仿京东多RN组件并存方案)`
7. 实现ReactNative统一处理不同场景开发`（一个RN组件模块）`
8. 实现Native/H5/ReactNative三方通信场景开发
9. 加入ReactNativeSdk源代码并解剖模块并定制需求`（替换网络请求和图片加载框架）`
10. 实现共享锁和独占锁的实例
11. JNI实例开发
12. AIDL实例开发
13. RecyclerView实例开发
14. 自定义组件`(onMeather,onLayout,onTouch时间传递)`
15. 动画实现`(onDraw,Paint,invadite)`



**`实现ReactNative多模块开发方案`**

1. （实现中）同一个bundleJs文件，多个AppRegistry入口实现多模块开发：
    1. 创建一个react项目注册多个AppRegistry组件模块
    2. 对应的Activity加载对应的AppRegistry组件模块名称
    3. 优点：入门简单，容易开发
    4. 缺点：bundleJs文件过大，无法实现多模块异步更新和异步加载
    5. 优化：采用moles-packer拆包思想，分拆公用的commonBundleJs文件，尝试解决包大和差异化更新

2. 同一个bundleJs文件和AppRegistry入口，根据不同的传参启动相应的页面：
    1. 在ReactActivity中传入该模块的相关参数bundle注册给React
    2. 在index入口中根据不同的bundle参数启动相应的页面
    3. 优点：入门简单，容易开发
    4. 缺点：bundleJs文件过大，无法实现多模块异步更新和异步加载
    5. 优化：采用moles-packer拆包思想，分拆公用的commonBundleJs文件，尝试解决包大和差异化更新

3. （未实现）仿手淘/京东多BundleJS模块异步加载实现功能：
    1. 对多个react项目进行编译打包到不同的bundleJS文件放到assets文件夹中
    2. 在ReactActivity中引入不同的bundleJS文件加载即可
    3. 优点：业务分工明确，bundleJS文件不大，可以实现异步加载
    4. 缺点：技术难度大，暂时无法实现多模块加载
    5. 优化：
        1. 通过MainApplication中注入mReactNativeHost数组实现多模块加载
        2. 需要实现debug环境开发和不同端口映射
        3. 采用moles-packer拆包思想，分拆公用的commonBundleJs文件，减少每个bundleJs体积
        
4. 参考文档
    1. React Native JS Module 加载性能优化 https://yq.aliyun.com/articles/3208?spm=5176.100239.yqblog1.39.t2g49u&utm_source=tuicool&utm_medium=referral
    2. React Native For Android 架构初探 https://zhuanlan.zhihu.com/p/20259704?columnSlug=magilu
    3. ReactNative For Android 项目实战总结 https://zhuanlan.zhihu.com/p/20587485?columnSlug=magilu
    4. ReactNative安卓首屏白屏优化 http://reactnative.cn/post/754
    5. 携程框架团队ctripcorp/moles-packer https://github.com/ctripcorp/moles-packer
    6. react native 系列教程之已有项目接入React Native http://blog.csdn.net/z4909801/article/details/53943050
    7. 基于 React Native 的 58 同城 App 开发实践 http://geek.csdn.net/news/detail/105028
    8. 携程魏晓军：React Native Bundle拆分 https://sdk.cn/news/3617
    9. React Native打包代码解析与拆分Bundle做法 http://blog.csdn.net/sinat_17775997/article/details/70511668

