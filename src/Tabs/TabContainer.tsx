import React from 'react';
import classNames from 'classnames';
import { TabContainerProps } from './PropsType';

import prefix from '../_util/prefix';
const prefixCls = `${prefix}-tabs-con`;

export const TabContainer = (props: TabContainerProps) => {
    const { children, className, index, activeIndex, ...restProps } = props;
    const styleClass = classNames(
        prefixCls,
        {
            [`active`]: index === activeIndex,
        },
        className,
    );

    return (
        <div className={styleClass} {...restProps}>
            {children}
        </div>
    );
};
