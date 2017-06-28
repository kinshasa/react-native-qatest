package com.android.qatest.ui.base;

import android.content.Context;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.LinearLayout;
import android.view.ViewGroup.LayoutParams;

import com.android.log.L;

/**
 * Created by liusp@gagc.com.cn on 2016.10.17.
 */

public abstract class LazyFragment extends Fragment implements ILazyLayout {

    /**
     * 容器布局
     */
    private LinearLayout mContainer;
    private View mLoadingView;
    private View mBodyView;

    protected Context mContext;
    protected OnVisibleListener mListener;

    /**
     * 当前的状态
     */
    private State mCurState = State.NONE;
    protected LayoutInflater mInflater;

    @Override
    final public void onAttach(Context context) {
        // TODO Auto-generated method stub
        L.v();
        super.onAttach(context);
        mContext = context;
        if (mInflater == null) {
            mInflater = LayoutInflater.from(context);
        }
        if (mContainer == null) {
            mContainer = new LinearLayout(mContext);
            mContainer.setLayoutParams(new LayoutParams(LayoutParams.MATCH_PARENT, LayoutParams.WRAP_CONTENT));
        }
    }

    @Nullable
    @Override
    final public View onCreateView(LayoutInflater inflater, @Nullable ViewGroup container, Bundle savedInstanceState) {
        if (mInflater == null) {
            //mInflater = inflater;
        }
        showLoadingView();

        if (mContainer != null) {
            return mContainer;
        }

        return super.onCreateView(inflater, container, savedInstanceState);
    }

    final void onVisibleChanged() {

        switch (mCurState) {
            case VISIBLE:
                if (mListener != null) {
                    mListener.onVisible();
                }
                showContextView();

                break;
            case INVISIBLE:
                if (mListener != null) {
                    mListener.onInvisible();
                }
                //不可见时，如果销毁BodyView或者暂停动画视频等操作
                //可以在onInvisible里直接调用removeBodyView或相关操作
                break;
            default:
                break;
        }
    }

    /**
     * 显示LoadingView
     */
    private void showLoadingView() {

        //如果View为空，则先初始化
        if (null == mLoadingView) {
            mLoadingView = createLoadingView();
            //如果不为空，则加入到Container中显示
            if (null != mLoadingView) {
                mContainer.removeAllViews();
                mContainer.addView(mLoadingView);
            }
        }
    }

    /**
     * 显示ContextView
     */
    private void showContextView() {

        //如果View为空，则先初始化
        if (mBodyView == null) {
            mBodyView = setContextView();
            //如果不为空，则加入到Container中显示
            if (mBodyView != null) {
                mContainer.removeAllViews();
                mContainer.addView(mBodyView);
            }
        }
    }

    //移除ContextView，相当于显示LoadingView的意思
    public final void removeContextView() {
        mContainer.removeAllViews();
        mBodyView = null;
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
    final public void setState(State state) {
        mCurState = state;
        onVisibleChanged();
    }

    @Override
    final public State getState() {
        return mCurState;
    }

    final void setOnVisibleListener(OnVisibleListener listener) {
        this.mListener = listener;
    }


}
