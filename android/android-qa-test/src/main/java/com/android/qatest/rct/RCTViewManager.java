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
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.views.image.ImageLoadEvent;
import com.facebook.react.views.image.ImageResizeMode;
import com.facebook.react.views.image.ReactImageView;

import java.util.Map;

import javax.annotation.Nullable;

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 * <p>
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
@ReactModule(name = RCTViewManager.REACT_CLASS)
public class RCTViewManager extends SimpleViewManager<ReactImageView> {

    protected static final String REACT_CLASS = "RCTImageView2";

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    private @Nullable AbstractDraweeControllerBuilder mDraweeControllerBuilder;
    private @Nullable Object mCallerContext;

    public RCTViewManager(
            AbstractDraweeControllerBuilder draweeControllerBuilder,
            Object callerContext) {
        mDraweeControllerBuilder = draweeControllerBuilder;
        mCallerContext = callerContext;
    }

    public RCTViewManager() {
        // Lazily initialize as FrescoModule have not been initialized yet
        mDraweeControllerBuilder = null;
        mCallerContext = null;
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
    @ReactProp(name = "src")
    public void setSource(ReactImageView view, @Nullable ReadableArray sources) {
        //Log.v("RCTImageView", sources.toString());
        view.setSource(sources);
    }



    @Override
    public @javax.annotation.Nullable
    Map getExportedCustomDirectEventTypeConstants() {
        return MapBuilder.of(
                ImageLoadEvent.eventNameForType(ImageLoadEvent.ON_LOAD_START),
                MapBuilder.of("registrationName", "onLoadStart"),
                ImageLoadEvent.eventNameForType(ImageLoadEvent.ON_LOAD),
                MapBuilder.of("registrationName", "onLoad"),
                ImageLoadEvent.eventNameForType(ImageLoadEvent.ON_ERROR),
                MapBuilder.of("registrationName", "onError"),
                ImageLoadEvent.eventNameForType(ImageLoadEvent.ON_LOAD_END),
                MapBuilder.of("registrationName", "onLoadEnd"));
    }

    @Override
    protected void onAfterUpdateTransaction(ReactImageView view) {
        super.onAfterUpdateTransaction(view);
        view.maybeUpdateView();
    }
}
