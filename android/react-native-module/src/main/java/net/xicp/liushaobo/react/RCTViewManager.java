/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 * <p>
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

package net.xicp.liushaobo.react;

import android.graphics.Color;
import android.view.View;

import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

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
public class RCTViewManager extends SimpleViewManager<View> {

    protected static final String REACT_CLASS = "RCTViewS";

    @Override
    public String getName() {
        return REACT_CLASS;
    }


    public RCTViewManager() {
    }


    @Override
    public View createViewInstance(ThemedReactContext context) {
        return new View(context);
    }

    // In JS this is props
    @ReactProp(name = "bgColor", customType = "Color")
    public void setBackGroundColor(View view, @Nullable Integer color) {
        if (color == null) {
            view.setBackgroundColor(Color.TRANSPARENT);
        } else {
            view.setBackgroundColor(color);
        }
    }
}
