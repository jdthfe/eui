import React from 'react';
import classnames from 'classnames';
import { TabProps } from './PropsType';
import prefix from '../_util/prefix';
const prefixCls = `${prefix}-tabs-nav`;

export const Tab = (props: TabProps) => {
    const { className, children, onClick, index, disabled, activeIndex, ...restProps } = props;
    const styleClass = classnames(prefixCls, className, {
        [`active`]: activeIndex === index,
        [`disabled`]: disabled,
    });

    return (
        <div className={styleClass} {...restProps} data-index={index}>
            <span className={`inner`}>{children}</span>
        </div>
    );
};
