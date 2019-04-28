import React from 'react';
import * as ReactDOM from 'react-dom';
import classnames from 'classnames';
import Portal from '../Portal';
import TransitionWrap from '../TransitionWrap';
import { PopoverPropsType } from './PropsType';
import prefix from '../_util/prefix';
const prefixCls = `${prefix}-popover`;

export const Popover = (props: PopoverPropsType) => {
    const {
        visible,
        children,
        className = '',
        onClose = () => {},
        hasArrow = false,
        anchorEl,
        dir,
        ...restProps
    } = props;
    const cls = classnames(prefixCls, className);

    let transitionEl: any = '';

    // 获得触发元素的位置
    const getElPositionStyle = (elem: any) => {
        if (anchorEl) {
            const rect = anchorEl.getBoundingClientRect();
            const width = anchorEl.offsetWidth,
                height = anchorEl.offsetHeight;
            let elemWidth = elem.offsetWidth;
            const offsetWidth = elemWidth - width;
            let left = 0,
                top = rect.top;
            switch (dir) {
                case 'top-right':
                    left = rect.left - offsetWidth;
                    break;
                case 'top-center':
                    left = rect.left - offsetWidth / 2;
                    elemWidth = elemWidth / 2;
                    break;
                case 'top-left':
                    left = rect.left;
                    elemWidth = 0;
                    break;
                case 'bottom-right':
                    top = rect.top + height;
                    left = rect.left - offsetWidth;
                    break;
                case 'bottom-center':
                    top = rect.top + height;
                    left = rect.left - offsetWidth / 2;
                    elemWidth = elemWidth / 2;
                    break;
                case 'bottom-left':
                    left = rect.left;
                    top = rect.top + height;
                    elemWidth = 0;
                    break;
            }
            return { left, top, transformOrigin: elemWidth + 'px 0 0' };
        }
    };

    // 设置模块位置
    const setElPositionStyle = (elem: any) => {
        if (elem && elem.style) {
            const position: any = getElPositionStyle(elem);
            elem.style.top = position.top + 'px';
            elem.style.left = position.left + 'px';
            elem.style.transformOrigin = position.transformOrigin;
        }
    };

    const getPopoverRef = (node: any) => {
        transitionEl = ReactDOM.findDOMNode(node);
        setElPositionStyle(transitionEl);
    };

    return (
        <Portal>
            <TransitionWrap visible={visible}>
                <div className={cls} {...restProps}>
                    <div className={`${prefixCls}-mask`} onClick={onClose} />
                    <div className={`${prefixCls}-wrap`} ref={getPopoverRef}>
                        <div className={`${prefixCls}-content`}>
                            {hasArrow ? <div className={`${prefixCls}-arrow`} /> : ''}
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
