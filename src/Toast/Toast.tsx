import React from 'react';
import classnames from 'classnames';
import { ToastPropsWithModel } from './PropsType';
import prefix from '../_util/prefix';
const prefixCls = `${prefix}-toast`;

import { transitionFade } from '../_util/variable';
import Portal from '../Portal';
import TransitionWrap from '../TransitionWrap';

const Toast = (props: ToastPropsWithModel) => {
    const {
        children,
        className,
        // TransitionWrap
        visible,
        keepOnExit,
        time,
        onExitDone,
        transitionClassName = transitionFade,
        // Portal
        mountNode,

        ...restProps
    } = props;
    const cls = classnames(prefixCls, className);
    return (
        <Portal mountNode={mountNode}>
            <TransitionWrap
                visible={visible}
                keepOnExit={keepOnExit}
                time={time}
                onExitDone={onExitDone}
                transitionClassName={transitionClassName}
            >
                <div {...restProps} className={children ? cls : ''}>
                    {children}
                </div>
            </TransitionWrap>
        </Portal>
    );
};

export default Toast;
