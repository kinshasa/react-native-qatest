package com.android.qatest.ui.base;

import android.app.Fragment;
import android.content.Context;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import com.android.log.L;

/**
 * Created by liusp@gagc.com.cn on 2016.10.17.
 */

public abstract class LazyFragment extends Fragment implements ILazyLayout {

    /**
     * 容器布局
     */
    private View mContainer;
    protected Context mContext;

    /**
     * 当前的状态
     */
    private State mCurState = State.NONE;
    protected LayoutInflater mInflater;

    @Override
    public void onAttach(Context context) {
        // TODO Auto-generated method stub
        L.v();
        super.onAttach(context);
        mContext = context;
        if (mInflater == null) {
            mInflater = LayoutInflater.from(context);
        }
    }

    @Nullable
    @Override
    public View onCreateView(LayoutInflater inflater, @Nullable ViewGroup container, Bundle savedInstanceState) {
        if (mInflater == null) {
            //mInflater = inflater;
        }
        createContainer();
        if (mContainer != null) {
            return mContainer;
        } else {
            return super.onCreateView(inflater, container, savedInstanceState);
        }
    }

    void onVisibleChanged() {

        switch (mCurState) {
            case VISIBLE:
                break;
            case INVISIBLE:
                break;
            case NONE:
            default:
                break;
        }
    }

    void createContainer() {
        mContainer = createLoadingView();
        if (null == mContainer) {
            //throw new NullPointerException("Loading view can not be null.");
        }
    }

    @Override
    public void setUserVisibleHint(boolean isVisibleToUser) {
        super.setUserVisibleHint(isVisibleToUser);

        if (getUserVisibleHint()) {
            setState(State.VISIBLE);
        } else {
            setState(State.INVISIBLE);
        }
    }

    @Override
    public void setState(State state) {
        mCurState = state;
        onVisibleChanged();
    }

    @Override
    public State getState() {
        return mCurState;
    }
}
