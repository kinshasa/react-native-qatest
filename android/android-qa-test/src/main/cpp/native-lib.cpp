#include <jni.h>
#include <string>

extern "C" {
JNIEXPORT jstring JNICALL
Java_com_android_qatest_ui_user_MineFragment_getSignStr(JNIEnv *env, jobject instance) {

    std::string sign = "params with md5 sign.";

    return env->NewStringUTF(sign.c_str());
}

JNIEXPORT jstring JNICALL
Java_com_android_qatest_ui_user_MineFragment_stringFromJNI(
        JNIEnv *env,
        jobject /* this */) {
    std::string hello = "Hello from C++";
    return env->NewStringUTF(hello.c_str());
}

}

