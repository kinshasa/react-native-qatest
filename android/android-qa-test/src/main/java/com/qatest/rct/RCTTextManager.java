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
import android.widget.TextView;

import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;

@ReactModule(name = RCTTextManager.REACT_CLASS)
public class RCTTextManager extends SimpleViewManager<TextView> {

  protected static final String REACT_CLASS = "RCTText";

  private TextView v;

  @Override
  public String getName() {
    return REACT_CLASS;
  }


  @Override
  public TextView createViewInstance(ThemedReactContext context) {

    v = new TextView(context);
    v.setBackgroundColor(Color.YELLOW);
    v.setTextColor(Color.BLUE);
    v.setWidth(100);
    v.setHeight(100);
    v.setText("testeeeeeeeeeeeeeeee");
    return v;
  }

}
