import React from 'react';
import classnames from 'classnames';
import { CoverProps } from './PropsType';
import prefix from '../_util/prefix';
import Portal from '../Portal';

import { transitionFade } from '../_util/variable';
import TransitionWrap from '../TransitionWrap';
const prefixCls = `${prefix}-cover`;

const Cover = (props: CoverProps) => {
    const {
        transparent = false,
        children,
        className,
        onExitDone,
        visible,
        keepOnExit,
        time,
        transitionClassName = transitionFade,
        mountNode,
        ...restProps
    } = props;
    const cls = classnames(prefixCls, className, { [`${prefixCls}-transparent`]: transparent === true });
    return (
        <Portal mountNode={mountNode}>
            <TransitionWrap
                visible={visible}
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

export default Cover;
