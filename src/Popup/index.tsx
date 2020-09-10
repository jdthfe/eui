import React from 'react';
import classnames from 'classnames';
import { PopupProps } from './PropsType';
import { prefix } from '../_util/';
const prefixCls = `${prefix}-popup`;

import Cover from '../Cover';
import Portal from '../Portal';
import TransitionWrap from '../TransitionWrap';
import { Variable } from '../_util/';
const { transitionFade } = Variable;
const { Transition } = Cover;
const Popup = (props: PopupProps) => {
    const {
        className,
        children,
        visible,
        keepOnExit,
        time,
        onExitDone,
        transitionClassName = transitionFade,
        // Portal
        mountNode,
        // Cover
        coverProps = {},
        afterChild,
        ...restProps
    } = props;
    const cls = classnames(prefixCls, className);
    const popupBodyCls = classnames(`${prefixCls}-body`, className);
    return (
        <Portal mountNode={mountNode}>
            <Transition visible={visible} time={time} keepOnExit={keepOnExit} onExitDone={onExitDone} {...coverProps} />

            <TransitionWrap
                visible={visible}
                keepOnExit={keepOnExit}
                time={time}
                onExitDone={onExitDone}
                transitionClassName={transitionClassName}
            >
                <div className={cls} {...restProps}>
                    <div className={popupBodyCls}>{children}</div>
                    {afterChild ? afterChild : null}
                </div>
            </TransitionWrap>
        </Portal>
    );
};

export default Popup;
