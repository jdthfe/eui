import React from 'react';
import classnames from 'classnames';
import { ToastProps } from './PropsType';
import prefix from '../_util/prefix';
const prefixCls = `${prefix}-toast`;

import Portal from '../Portal';
import TransitionWrap from '../TransitionWrap';
import Cover from '../Cover';
import variable from '../_util/variable';
const { transitionFade } = variable;

const Toast = (props: ToastProps) => {
    const {
        children,
        className,
        coverProps = {},
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
    const newVisible = children === undefined ? false : visible;
    return (
        <Portal mountNode={mountNode}>
            <Cover.Transition
                transparent
                visible={newVisible}
                keepOnExit={keepOnExit}
                onExitDone={onExitDone}
                transitionClassName={transitionClassName}
                {...coverProps}
            />
            <TransitionWrap
                visible={newVisible}
                keepOnExit={keepOnExit}
                time={time}
                onExitDone={onExitDone}
                transitionClassName={transitionClassName}
            >
                <div {...restProps} className={cls}>
                    {children}
                </div>
            </TransitionWrap>
        </Portal>
    );
};

export default Toast;
