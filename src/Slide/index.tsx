import React from 'react';
import classnames from 'classnames';
import { SlideProps } from './PropsType';
import { prefix } from '../_util/';
const prefixCls = `${prefix}-slide`;

import Cover from '../Cover';
import Portal from '../Portal';
import TransitionWrap from '../TransitionWrap';
import { Variable } from '../_util/';
const { transitionFade } = Variable;
const { Transition } = Cover;
const Slide = (props: SlideProps) => {
    const {
        className,
        children,
        // TransitionWrap
        visible,
        keepOnExit,
        time,
        onExitDone,
        transitionClassName = transitionFade,
        // Portal
        mountNode,
        // Cover
        coverProps = {},
        ...restProps
    } = props;
    const cls = classnames(prefixCls, className);
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
                    {children}
                </div>
            </TransitionWrap>
        </Portal>
    );
};

export default Slide;
