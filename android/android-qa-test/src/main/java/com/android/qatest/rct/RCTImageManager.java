/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 * <p>
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

package com.android.qatest.rct;

import android.util.Log;

import com.facebook.drawee.backends.pipeline.Fresco;
import com.facebook.drawee.controller.AbstractDraweeControllerBuilder;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.views.image.ReactImageView;

import javax.annotation.Nullable;

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 * <p>
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
@ReactModule(name = RCTImageManager.REACT_CLASS)
public class RCTImageManager extends SimpleViewManager<ReactImageView> {

    protected static final String REACT_CLASS = "RCTImageView2";

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    private @Nullable AbstractDraweeControllerBuilder mDraweeControllerBuilder;
    private @Nullable Object mCallerContext;

    public RCTImageManager(ReactApplicationContext reactContext) {
        // Lazily initialize as FrescoModule have not been initialized yet
        mDraweeControllerBuilder = null;
        mCallerContext = reactContext;
    }

    public AbstractDraweeControllerBuilder getDraweeControllerBuilder() {
        if (mDraweeControllerBuilder == null) {
            mDraweeControllerBuilder = Fresco.newDraweeControllerBuilder();
        }
        return mDraweeControllerBuilder;
    }

    public Object getCallerContext() {
        return mCallerContext;
    }

    @Override
    public ReactImageView createViewInstance(ThemedReactContext context) {
        return new ReactImageView(
                context,
                getDraweeControllerBuilder(),
                getCallerContext());
    }

    // In JS this is Image.props.source
    @ReactProp(name = "source")
    public void setSource(ReactImageView view, @Nullable ReadableArray sources) {
        Log.v("RCTImageView2", sources.toString());
        view.setSource(sources);
    }
}
