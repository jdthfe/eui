import React, { useState, useEffect, useRef } from 'react';
import { TabsProps } from './PropsType';
import classnames from 'classnames';
import prefix from '../_util/prefix';
const prefixCls = `${prefix}-tabs-nav`;

function setTransitionDuration(element: any, times: number): void {
    element.style.webkitTransitionDuration = times + 'ms';
    element.style.mozTransitionDuration = times + 'ms';
    element.style.oTransitionDuration = times + 'ms';
    element.style.transitionDuration = times + 'ms';
}

export const Tabs = (props: TabsProps) => {
    const {
        children,
        position = 'top',
        activeIndex = 0,
        centerMode,
        scrollable = false,
        onClick,
        flex,
        ...restProps
    } = props;

    //  tabs组件 水平、垂直 结构；
    const horizontal = position === 'left' || position === 'right';
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const testNode: any = useRef(null);
    const tabNode = testNode.current;

    let dragging: boolean;
    let touches: any = {};
    let isMobile: boolean = 'ontouchstart' in document;

    const boxCls = classnames({ [`${prefixCls}-flex`]: flex });

    const getLineOffset = (index: any) => {
        let width = 0,
            height = 0,
            left = 0,
            top = 0;
        if (tabNode) {
            const tabs = tabNode.querySelectorAll('.edm-tabs-nav');
            for (let i = 0; i < tabs.length; i++) {
                if (i < index) {
                    left += tabs[i].offsetWidth;
                    top += tabs[i].offsetHeight;
                }
                if (i === index) {
                    width = tabs[i].offsetWidth;
                    height = tabs[i].offsetHeight;
                }
            }
        }
        return {
            width,
            left,
            height,
            top,
        };
    };

    const getPoint = (e: any) => {
        const touchEvent = isMobile ? e.changedTouches[0] : e;
        return {
            x: touchEvent.pageX || touchEvent.clientX,
            y: touchEvent.pageY || touchEvent.clientY,
        };
    };

    const swipeMove = (event: any) => {
        event.stopPropagation();
        if (dragging) {
            const { x, y } = getPoint(event);
            const diffX = x - touches.startX + x!;
            const diffY = y - touches.startY + y!;
            console.log(diffX);
            console.log(diffY);
            // setX(Math.max(Math.min(0, diffX), -touches.moveWith));
            // setY(Math.max(Math.min(0, diffY), -touches.moveHeight));

            touches.startX = x;
            touches.startY = y;
        }
    };

    const swipeEnd = (event: any) => {
        event.stopPropagation();
        dragging = false;
        document.removeEventListener(isMobile ? 'touchmove' : 'mousemove', swipeMove);
        document.removeEventListener(isMobile ? 'touchend' : 'mouseup', swipeEnd);
    };

    const swipeStart = (event: any) => {
        const wrapperNode = tabNode && tabNode.firstElementChild;
        if (wrapperNode) {
            touches.moveWith = wrapperNode.offsetWidth - tabNode.offsetWidth;
            touches.moveHeight = wrapperNode.offsetHeight - tabNode.offsetHeight;

            if (props.scrollable && touches.moveWith > 0) {
                setTransitionDuration(tabNode.firstElementChild, 0);
                event.stopPropagation();
                const { x, y } = getPoint(event);
                dragging = true;
                touches.startX = x;
                touches.startY = y;
                document.addEventListener(isMobile ? 'touchmove' : 'mousemove', swipeMove);
                document.addEventListener(isMobile ? 'touchend' : 'mouseup', swipeEnd);
            }
        }
    };

    let wrapperStyle = {
        transform: `translate3d(${horizontal ? y : x}px, 0, 0)`,
    };

    function updateTabPosition(activeIndex: any) {
        if (centerMode && tabNode) {
            const { width, height, left, top } = getLineOffset(activeIndex);
            const wrapperNode = tabNode.firstElementChild;
            setTransitionDuration(wrapperNode, 300);
            if (position === 'left' || position === 'right') {
                const navHeight = tabNode.offsetHeight;
                const wrapperHeight = wrapperNode.offsetHeight;
                const offsetY = top + height / 2;
                let diffHeight = offsetY - navHeight / 2;
                if (diffHeight > 0) {
                    if (wrapperHeight - top - height <= navHeight / 2) {
                        diffHeight = wrapperHeight - navHeight;
                    }
                    setY(-diffHeight);
                }
            } else {
                const navWidth = tabNode.offsetWidth;
                const wrapperWidth = wrapperNode.offsetWidth;
                const offsetX = left + width / 2;
                let diffWidth = offsetX - navWidth / 2;
                if (diffWidth > 0) {
                    if (wrapperWidth - left - width <= navWidth / 2) {
                        diffWidth = wrapperWidth - navWidth;
                    }
                } else {
                    diffWidth = 0;
                }
                setX(-diffWidth);
            }
        }
    }

    function handleChange(activeIndex: any) {
        if (flex) {
        } else {
            updateTabPosition(activeIndex);
        }
        onClick && onClick(activeIndex);
    }

    let childIndex = 0;
    let childrenCopy: any = children;
    const childrenClone = React.Children.map(childrenCopy, (child: React.ReactElement<any>) => {
        if (!React.isValidElement(child)) {
            return null;
        }
        const props: any = { ...child.props };
        return React.cloneElement(child as React.ReactElement<any>, {
            index: childIndex++,
            disabled: props.disabled,
            onClick: handleChange,
            activeIndex: activeIndex,
        });
    });

    useEffect(() => {
        return () => {
            document.removeEventListener(isMobile ? 'touchmove' : 'mousemove', swipeMove);
            document.removeEventListener(isMobile ? 'touchend' : 'mouseup', swipeEnd);
        };
    });

    return (
        <div
            className={`${prefixCls}-box ` + boxCls}
            ref={testNode}
            onMouseDown={isMobile ? () => false : swipeStart}
            onTouchStart={isMobile ? swipeStart : () => false}
            {...restProps}
        >
            <div className={`${prefixCls}-wrapper`} style={wrapperStyle}>
                {childrenClone}
            </div>
        </div>
    );
};
