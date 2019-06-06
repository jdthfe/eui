import React, { useState, useEffect, useRef } from 'react';
import { TabsProps } from './PropsType';
import classnames from 'classnames';
import prefix from '../_util/prefix';
const prefixCls = `${prefix}-tabs`;

function setTransitionDuration(element: any, times: number): void {
    element.style.webkitTransitionDuration = times + 'ms';
    element.style.mozTransitionDuration = times + 'ms';
    element.style.oTransitionDuration = times + 'ms';
    element.style.transitionDuration = times + 'ms';
}

function getLineOffset(index: any, tabWrapNode?: any) {
    let width = 0,
        height = 0,
        left = 0,
        top = 0;
    if (tabWrapNode) {
        const tabs = tabWrapNode.querySelectorAll('.edm-tabs-nav');
        // console.log(tabs);
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
}

export default (props: TabsProps) => {
    const {
        tabs,
        flex = false,
        activeIndex = 0,
        position = 'top',
        animated = true,

        children,
        onClick,
        className,
        ...restProps
    } = props;

    // 当前的选中的tab
    const [activeIndexCopy, setActiveIndexCopy] = useState(activeIndex);
    //  tabs组件 水平、垂直 ; 默认的是水平
    const horizontal = position === 'top' || position === 'bottom';

    //tab 的展示逻辑
    const tabNavWrapNode: any = useRef(null);
    const tabWrapNode: any = useRef(null);

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const boxCls = classnames({ [`${prefixCls}-nav-flex`]: flex });

    let tabsStyle = {
        transform: `translate3d(${horizontal ? x : y}px, 0, 0)`,
    };

    function updateTabPosition(activeIndex: any) {
        const wrapperNode = tabNavWrapNode.current;
        const tabNode = tabWrapNode.current;

        if (wrapperNode && tabNode) {
            const { width, height, left, top } = getLineOffset(activeIndex, tabNode);
            if (horizontal) {
                const wrapperWidth = wrapperNode.offsetWidth;
                const navWidth = tabNode.offsetWidth;

                const offsetX = left + width / 2;
                let diffWidth = offsetX - wrapperWidth / 2;
                if (diffWidth > 0) {
                    if (navWidth - left - width <= wrapperWidth / 2) {
                        diffWidth = navWidth - wrapperWidth;
                    }
                } else {
                    diffWidth = 0;
                }
                setX(-diffWidth);
            } else {
                const wrapperHeight = wrapperNode.offsetHeight;
                const navHeight = tabNode.offsetHeight;

                const offsetY = top + height / 2;
                let diffHeight = offsetY - wrapperHeight / 2;
                if (diffHeight > 0) {
                    if (navHeight - top - height <= wrapperHeight / 2) {
                        diffHeight = navHeight - wrapperHeight;
                    }
                } else {
                    diffHeight = 0;
                }

                setY(-diffHeight);
            }
        }
    }

    function handleChange(activeIndex: any) {
        setActiveIndexCopy(activeIndex);
        onClick && onClick(activeIndex);
    }

    const navChildren: any = [];
    tabs.forEach((tab: any, index: number) => {
        const props: any = { ...tab.props };
        const { onClick } = props;
        props.key = index;
        props.index = index;
        props.onClick = () => {
            handleChange(index);
            onClick && onClick();
        };
        const navCls = classnames(`${prefixCls}-nav`, className, {
            [`active`]: activeIndexCopy === index,
        });

        navChildren.push(
            React.createElement('div', { className: `${navCls}`, key: index }, React.cloneElement(tab, props)),
        );
    });

    useEffect(() => {
        if (animated) {
            setTransitionDuration(tabWrapNode.current, 300);
        }
        updateTabPosition(activeIndexCopy);
    }, [x, y, activeIndexCopy]);

    // line的展示逻辑

    const lineNode: any = useRef(null);

    const [lineX, setLineX] = useState(0);
    const [lineY, setLineY] = useState(0);

    const lineStyle = {
        transform: `translate3d(${horizontal ? lineX : lineY}px, 0, 0)`,
    };

    function updateLinePosition(activeIndex: any) {
        const tabWrapEle = tabWrapNode.current;
        const lineEle = lineNode.current;

        if (tabWrapEle) {
            const { left, top } = getLineOffset(activeIndex, tabWrapEle);
            const tabNode = tabWrapEle.childNodes[activeIndex];

            if (horizontal) {
                const lineWidth = lineEle.offsetWidth;
                const tabWidth = tabNode.offsetWidth;
                let diffWidth = left + (tabWidth - lineWidth) / 2;

                setLineX(diffWidth);
            } else {
                const lineHeight = lineEle.offsetHeight;
                const tabHeight = tabNode.offsetHeight;
                let diffHeight = top + (tabHeight - lineHeight) / 2;

                setLineY(diffHeight);
            }
        }
    }

    useEffect(() => {
        //设置动画时间
        if (animated) {
            setTransitionDuration(lineNode.current, 380);
        }

        updateLinePosition(activeIndexCopy);
    }, [lineX, lineY, activeIndexCopy]);

    // 内容conWrap的展示逻辑
    const [conX, setConX] = useState(0);
    const [cony, setConY] = useState(0);
    const containerEle = useRef(null);
    let wrapper = containerEle.current;

    const containerChildren: any = [];
    React.Children.forEach(children, (child: any, index: number) => {
        const props: any = { ...child.props };
        const conClass = classnames(`${prefixCls}-con`, className);
        props.key = index;
        props.index = index;
        props.className = conClass;
        props.onClick = () => {
            handleChange(index);
        };

        containerChildren.push(React.cloneElement(child, props));
    });

    const wrapperStyles = {
        transform: horizontal ? `translate3d(${conX}px, 0, 0)` : `translate3d(0, ${cony}px, 0)`,
        WebkitTransform: horizontal ? `translate3d(${conX}px, 0, 0)` : `translate3d(0, ${cony}px, 0)`,
        msTransform: horizontal ? `translate3d(${conX}px, 0, 0)` : `translate3d(0, ${cony}px, 0)`,
        WebkitTransition: animated ? '-webkit-transform .3s cubic-bezier(0.35, 0, 0.25, 1)' : '',
        transition: animated ? 'transform .3s cubic-bezier(0.35, 0, 0.25, 1)' : '',
    };

    useEffect(() => {
        setConX(wrapper ? -(wrapper as any).offsetWidth * activeIndexCopy! : 0);
        setConY(wrapper ? -(wrapper as any).offsetHeight * activeIndexCopy! : 0);
    });

    const styleClass = classnames(prefixCls, `${prefixCls}-${position}`, className);
    return (
        <div className={styleClass} {...restProps}>
            <div ref={tabNavWrapNode} className={`edm-tabs-nav-box ` + boxCls} {...restProps}>
                <div className={`edm-tabs-nav-wrapper`} style={tabsStyle} ref={tabWrapNode}>
                    {navChildren}
                    <div className="edm-tabs-nav-underline" style={lineStyle} ref={lineNode} />
                </div>
            </div>

            <div className="edm-tabs-con-box" ref={containerEle}>
                <div className="edm-tabs-con-wrapper" style={wrapperStyles}>
                    {containerChildren}
                </div>
            </div>
        </div>
    );
};
