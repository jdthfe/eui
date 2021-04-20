/* eslint-disable react-hooks/rules-of-hooks */
import React, { Fragment, useCallback, useEffect, useRef } from 'react';
import classnames from 'classnames';
import { prefix, Variable } from '../_util/';
import useToast from './useToast';
import { ToastProps, ToastPropsWithModel } from './PropsType';
import ReactDOM from 'react-dom';
import TransitionWrap from '../TransitionWrap';
import { Cover, Icon, WhiteSpace } from '@src/index';

const prefixCls = `${prefix}-toast`;
const { transitionFade, defaultDuration } = Variable;

const useToastModel = (props?: ToastPropsWithModel) => {
    const { mountNode, ...resProps } = props || {};

    const divRef = useRef(null);

    const Toast = useToast({});
    ReactDOM.render(component, div, () => {
        ReactDOM.render(React.cloneElement(component, { visible: true }), div);
    });

    return <Portal>toast</Portal>;

    // return {
    //     Toast: <div />,
    //     setToast,
    // };
};

export default useToastModel;
