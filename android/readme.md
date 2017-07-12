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



**`备注`**

6. 实现ReactNative多模块异步加载`(仿京东多RN组件并存方案)`
实现方式为：
    1. 创建一个react项目分多个index.js文件
    2. 在Activity中通过ReactInstanceManager创建对应的index.js文件
    3. 对应的Activity加载ReactRootView