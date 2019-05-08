import React from 'react';
import classnames from 'classnames';
import { TestProps } from './PropsType';
import prefix from '../_util/prefix';
const prefixCls = `${prefix}-test`;

const Test = (props: TestProps) => {
    const { prop = 'default', className, children, ...restProps } = props;
    const cls = classnames(prefixCls, className);
    return (
        <div {...restProps} className={cls}>
            {prop} | {children}
        </div>
    );
};

export default Test;
