/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

package com.qatest.rct;

import android.graphics.Color;
import android.view.ViewGroup;

import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;

@ReactModule(name = RCTViewManager.REACT_CLASS)
public class RCTViewManager extends SimpleViewManager<ViewGroup> {

  protected static final String REACT_CLASS = "RCTText";

  private ViewGroup v2;

  @Override
  public String getName() {
    return REACT_CLASS;
  }


  @Override
  public ViewGroup createViewInstance(ThemedReactContext context) {

    ViewGroup v = new ViewGroup(context) {
      @Override
      protected void onLayout(boolean changed, int l, int t, int r, int b) {

      }
    };
    v.setBackgroundColor(Color.YELLOW);
    v.setLayoutParams(new ViewGroup.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT,ViewGroup.LayoutParams.MATCH_PARENT));
    return v;
  }

}
