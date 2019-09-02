import React from 'react';
import classnames from 'classnames';
import { NAMEProps } from './PropsType';
import { prefix } from '../_util/';
const prefixCls = `${prefix}-NAME`;

const NAME = (props: NAMEProps) => {
    const { prop = 'default', className, children, ...restProps } = props;
    const cls = classnames(prefixCls, className);
    return (
        <div {...restProps} className={cls}>
            {prop} | {children}
        </div>
    );
};

export default NAME;
