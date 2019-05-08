import React, { useState, useRef, useEffect } from 'react';
import classnames from 'classnames';
import { TabsGroupProps } from './PropsType';
import prefix from '../_util/prefix';
const prefixCls = `${prefix}-tabs`;

export const TabsGroup = (props: TabsGroupProps) => {
    const {
        animated,
        activeIndex = 0,
        centerMode,
        children,
        className,
        position = 'top',
        onClick,
        scrollable,
        flex = false,
        ...restProps
    } = props;

    const [activeIndexCopy, setActiveIndexCopy] = useState(activeIndex);
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const containerEle = useRef(null);
    let wrapper = containerEle.current;
    const handleChange = (activeIndex: any) => {
        console.log('hello1');
        setActiveIndexCopy(activeIndex);
        onClick && onClick(activeIndex);
    };

    const navChildren: any = [],
        containerChildren: any = [],
        otherChild: any = [];
    let num = 0;
    React.Children.forEach(children, (child: any, index: number) => {
        const type: any = child.type;
        const fnName = type.name;
        const props: any = { ...child.props };
        props.key = index;
        if (fnName === 'Tabs') {
            props.activeIndex = activeIndexCopy;
            props.onClick = handleChange;
            props.position = position;
            props.centerMode = centerMode;
            props.scrollable = scrollable;
            props.flex = flex;
            console.log(props);
            navChildren.push(React.cloneElement(child, props));
        } else if (fnName === 'TabContainer') {
            props.index = num++;
            props.activeIndex = activeIndexCopy;
            containerChildren.push(React.cloneElement(child, props));
        } else {
            otherChild.push(React.cloneElement(child, props));
        }
    });

    const horizontal = position === 'left' || position === 'right';
    const wrapperStyles = {
        transform: !horizontal ? `translate3d(${x}px, 0, 0)` : `translate3d(0, ${y}px, 0)`,
        WebkitTransform: !horizontal ? `translate3d(${x}px, 0, 0)` : `translate3d(0, ${y}px, 0)`,
        msTransform: !horizontal ? `translate3d(${x}px, 0, 0)` : `translate3d(0, ${y}px, 0)`,
        WebkitTransition: animated ? '-webkit-transform .3s cubic-bezier(0.35, 0, 0.25, 1)' : '',
        transition: animated ? 'transform .3s cubic-bezier(0.35, 0, 0.25, 1)' : '',
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        setX(wrapper ? -(wrapper as any).offsetWidth * activeIndexCopy! : 0);
        setY(wrapper ? -(wrapper as any).offsetHeight * activeIndexCopy! : 0);
    });

    const styleClass = classnames(prefixCls, `${prefixCls}-${position}`, className);
    return (
        <div className={styleClass} {...restProps}>
            {navChildren}
            <div className="edm-tabs-con-box" ref={containerEle}>
                <div className="edm-tabs-con-wrapper" style={wrapperStyles}>
                    {containerChildren}
                </div>
            </div>
            {otherChild}
        </div>
    );
};
