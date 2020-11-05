import React, { useCallback, useMemo } from 'react';
import classnames from 'classnames';
import Portal from '../Portal';
import TransitionWrap from '../TransitionWrap';
import { PopoverPropsType } from './PropsType';
import { prefix, Variable } from '../_util/';
import { setElPositionStyle } from './helper';
const prefixCls = `${prefix}-popover`;
import Cover from '../Cover';

const { transitionFade } = Variable;
export const Popover = (props: PopoverPropsType) => {
    const {
        dir,
        visible,
        children,
        hasArrow = false,
        anchorEl,
        className = '',
        // TransitionWrap
        keepOnExit,
        time,
        onExitDone,
        transitionClassName = transitionFade,
        // Portal
        mountNode,
        // Cover
        onClickCover = true,
        coverProps = {},
        ...restProps
    } = props;

    const cls = classnames(prefixCls, className);

    const getPopoverRef = useCallback(
        (instance: HTMLDivElement | null) => {
            if (instance && anchorEl) {
                setElPositionStyle({ elem: instance, dir, anchorEl });
            }
        },
        [anchorEl, dir],
    );

    const arrowDir = useMemo(() => (dir.includes('top') ? `${prefixCls}-arrow-top` : `${prefixCls}-arrow-bottom`), [
        dir,
    ]);

    const newVisible = children === undefined ? false : visible;

    const newCoverProps: typeof coverProps = {
        ...coverProps,
        onClick: e => {
            if (onClickCover && (onClickCover === true || onClickCover() !== false)) {
                const { onClick = () => {} } = coverProps;
                onClick(e);
            }
        },
    };
    if (!onClickCover) {
        newCoverProps.visible = false;
    }

    if (!anchorEl) return null;

    return (
        <Portal>
            <Cover.Transition
                transparent
                visible={newVisible}
                keepOnExit={keepOnExit}
                onExitDone={onExitDone}
                transitionClassName={transitionClassName}
                {...newCoverProps}
            />
            <TransitionWrap
                time={time}
                visible={newVisible}
                keepOnExit={keepOnExit}
                onExitDone={onExitDone}
                transitionClassName={transitionClassName}
            >
                <div className={cls} {...restProps}>
                    {/* <div className={`${prefixCls}-mask`} onClick={onClose} /> */}
                    <div className={`${prefixCls}-wrap`} ref={getPopoverRef}>
                        <div className={`${prefixCls}-content`}>
                            {hasArrow ? <div className={`${prefixCls}-arrow ${arrowDir}`} /> : ''}
                            <div className={`${prefixCls}-inner`}>
                                <div className={`${prefixCls}-inner-wrapper`}>{children}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </TransitionWrap>
        </Portal>
    );
};
